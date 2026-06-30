import { NextRequest, NextResponse } from "next/server";
import {
  MANAGER_BLOG_SESSION_COOKIE,
  createManagerBlogSessionToken,
  getManagerBlogSession,
  isManagerBlogAuthConfigured,
  managerBlogSessionMaxAge,
  verifyManagerBlogPassword,
} from "../../../lib/managerBlogAuth";
import { managerBlogConfig } from "../../../lib/managerBlogConfig";

function sessionCookieOptions(maxAge: number) {
  return {
    httpOnly: true,
    sameSite: "strict" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  };
}

export async function GET() {
  const session = await getManagerBlogSession();
  return NextResponse.json({
    authenticated: Boolean(session),
    store_code: managerBlogConfig.storeCode,
    store_name: managerBlogConfig.storeName,
  });
}

export async function POST(request: NextRequest) {
  if (!isManagerBlogAuthConfigured()) {
    return NextResponse.json({ error: "Manager blog authentication is not configured." }, { status: 503 });
  }

  const body = await request.json().catch(() => ({}));
  const username = String(body.username || "");
  const password = String(body.password || "");

  if (!verifyManagerBlogPassword(username, password)) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const token = createManagerBlogSessionToken();
  if (!token) {
    return NextResponse.json({ error: "Manager blog session secret is not configured." }, { status: 503 });
  }

  const response = NextResponse.json({ ok: true, redirect: managerBlogConfig.adminPath });
  response.cookies.set(MANAGER_BLOG_SESSION_COOKIE, token, sessionCookieOptions(managerBlogSessionMaxAge));
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(MANAGER_BLOG_SESSION_COOKIE, "", sessionCookieOptions(0));
  return response;
}