"use client";

import { useId, useState } from "react";
import { Icon } from "@/components/icons";
import { cn } from "@/lib/utils";

export type ContactServiceOption = {
  value: string;
  label: string;
};

type ContactFormProps = {
  serviceOptions: ContactServiceOption[];
  submitLabel?: string;
};

const fieldClass =
  "w-full rounded-md border border-divider bg-band-paper px-3.5 py-2.5 text-[14px] text-text outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-neutral-500 focus:border-accent focus:shadow-[0_0_0_3px_rgba(10,80,208,0.15)]";

const labelClass = "mb-1.5 block text-[13px] font-medium text-text";

export function ContactForm({
  serviceOptions,
  submitLabel = "Send Message",
}: ContactFormProps) {
  const formId = useId();
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: String(formData.get("fullName") ?? ""),
      organization: String(formData.get("organization") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!res.ok) {
        setError(
          data?.error ??
            "Unable to send your message right now. Please try again or email us directly.",
        );
        return;
      }

      form.reset();
      setSubmitted(true);
    } catch {
      setError(
        "Unable to send your message right now. Please check your connection and try again.",
      );
    } finally {
      setPending(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-accent-300 bg-accent-100/70 p-6"
        role="status"
      >
        <p className="mb-2 font-[family-name:var(--font-heading)] text-[18px] text-text">
          Message received.
        </p>
        <p className="text-[14px] leading-[1.55] text-neutral-700">
          Thanks for reaching out. A member of our team will get back to you as
          soon as possible during business hours.
        </p>
        <button
          type="button"
          className="mt-4 text-[13px] font-semibold text-accent-700 underline-offset-2 hover:underline"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      onSubmit={onSubmit}
      className="relative flex flex-col gap-4"
      noValidate
    >
      {/* Honeypot — visually hidden; bots that fill it are ignored. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-0 w-0 overflow-hidden opacity-0"
        style={{ left: "-9999px", top: "auto" }}
      >
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div>
        <label className={labelClass} htmlFor={`${formId}-name`}>
          Full Name
        </label>
        <input
          id={`${formId}-name`}
          name="fullName"
          type="text"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder="Your name"
        />
      </div>
      <div>
        <label className={labelClass} htmlFor={`${formId}-org`}>
          Organization / Practice Name
        </label>
        <input
          id={`${formId}-org`}
          name="organization"
          type="text"
          autoComplete="organization"
          className={fieldClass}
          placeholder="Practice or organization"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor={`${formId}-email`}>
            Email Address
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="you@practice.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor={`${formId}-phone`}>
            Phone Number
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="(555) 000-0000"
          />
        </div>
      </div>
      <div>
        <label className={labelClass} htmlFor={`${formId}-service`}>
          Service of Interest
        </label>
        <select
          id={`${formId}-service`}
          name="service"
          required
          className={cn(fieldClass, "bg-band-paper")}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor={`${formId}-message`}>
          Message
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          required
          rows={5}
          className={cn(fieldClass, "resize-y min-h-[120px]")}
          placeholder="Tell us what you need help with"
        />
      </div>
      {error ? (
        <p
          className="rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-[13px] leading-[1.5] text-red-800"
          role="alert"
        >
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className={cn(
          "inline-flex items-center justify-center gap-1.5 rounded-md border border-transparent bg-accent px-7 py-3.5 text-[15px] font-semibold text-white",
          "shadow-[0_8px_24px_rgba(10,80,208,0.28)] transition-[transform,box-shadow,background-color,opacity] duration-[160ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:-translate-y-0.5 hover:bg-accent-700 hover:shadow-[0_14px_36px_rgba(10,80,208,0.34)]",
          "active:translate-y-0 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-70",
        )}
      >
        {pending ? "Sending…" : submitLabel}
        {!pending ? <Icon name="arrowRight" size={16} /> : null}
      </button>
    </form>
  );
}
