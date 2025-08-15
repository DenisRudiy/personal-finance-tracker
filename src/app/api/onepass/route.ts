import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const res = NextResponse.redirect(new URL("/", req.url));
  res.cookies.set("onepass", "1", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 120,
  });
  return res;
}
