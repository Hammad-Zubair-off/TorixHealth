import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact-schema";
import { siteContact } from "@/lib/site-contact";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatServiceLabel(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail =
    process.env.CONTACT_TO_EMAIL?.trim() || siteContact.email.label;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    "Torix Solutions <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: "Please check the form and try again.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped — pretend success so bots don't retry.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  const serviceLabel = formatServiceLabel(data.service);
  const subject = `Contact form: ${serviceLabel} — ${data.fullName}`;

  const text = [
    "New contact form submission from torixsolutions.com",
    "",
    `Full name: ${data.fullName}`,
    `Organization: ${data.organization || "—"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Service: ${serviceLabel}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const html = `
    <div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
      <p style="margin: 0 0 16px;">New contact form submission from <strong>torixsolutions.com</strong></p>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td style="padding: 6px 0; color: #555;">Full name</td><td style="padding: 6px 0;">${escapeHtml(data.fullName)}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Organization</td><td style="padding: 6px 0;">${escapeHtml(data.organization || "—")}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Email</td><td style="padding: 6px 0;"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Phone</td><td style="padding: 6px 0;">${escapeHtml(data.phone || "—")}</td></tr>
        <tr><td style="padding: 6px 0; color: #555;">Service</td><td style="padding: 6px 0;">${escapeHtml(serviceLabel)}</td></tr>
      </table>
      <p style="margin: 20px 0 8px; color: #555;">Message</p>
      <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
