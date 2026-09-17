import { NextResponse } from "next/server";

// Draft-stage gate: set SITE_USERNAME and SITE_PASSWORD as Environment
// Variables in the Vercel project to require a login before the site is
// public. Leave them unset (e.g. while developing locally) and the site
// is open with no prompt.
export function proxy(request) {
  const user = process.env.SITE_USERNAME;
  const pass = process.env.SITE_PASSWORD;

  if (!user || !pass) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  if (authHeader) {
    const encoded = authHeader.split(" ")[1] || "";
    const decoded = atob(encoded);
    const separatorIndex = decoded.indexOf(":");
    const suppliedUser = decoded.slice(0, separatorIndex);
    const suppliedPass = decoded.slice(separatorIndex + 1);

    if (suppliedUser === user && suppliedPass === pass) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="CITP2M Playbook Draft"' },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
