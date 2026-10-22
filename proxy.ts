import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const preferredHost = "www.torixhealth.com";
const alternateHosts = new Set(["torixhealth.com"]);

/** Redirect the bare production domain to the one canonical HTTPS hostname. */
export function proxy(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const hostname = (forwardedHost ?? request.headers.get("host") ?? "")
    .split(",")[0]
    .trim()
    .replace(/:\d+$/, "")
    .toLowerCase();

  if (!alternateHosts.has(hostname)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = preferredHost;
  url.port = "";

  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
