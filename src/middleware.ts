import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// const PUBLIC_PATHS = ["/login", "/api/onepass", '/']; // ! Development only
const PUBLIC_PATHS = ["/login", "/api/onepass"]; // * Production
function isPublicPath(pathname: string) {
  return PUBLIC_PATHS.some((p) => pathname.startsWith(p));
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const onepass = req.cookies.get("onepass")?.value;

  // Check if the path is public
  if (isPublicPath(pathname)) return NextResponse.next();

  // One time pass to home page
  if (pathname === "/") {
    if (onepass) {
      const res = NextResponse.next();
      res.cookies.delete("onepass");
      return res;
    }
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // All routes is closed → /login
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico|.*\\..*).*)"],
};
