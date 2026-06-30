import crypto from "crypto";
import { cookies } from "next/headers";
import { managerBlogConfig } from "./managerBlogConfig";

export const MANAGER_BLOG_SESSION_COOKIE = "manager_blog_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;

export interface ManagerBlogSession {
  role: "manager-blog";
  store_code: string;
  manager_owner: string;
  exp: number;
}

export function isManagerBlogAuthConfigured() {
  return Boolean(
    process.env.MANAGER_BLOG_USERNAME &&
      process.env.MANAGER_BLOG_PASSWORD_HASH &&
      process.env.MANAGER_BLOG_SESSION_SECRET
  );
}

function timingSafeStringEqual(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function verifyScryptHash(password: string, storedHash: string) {
  const [scheme, saltHex, keyHex] = storedHash.split(":");
  if (scheme !== "scrypt" || !saltHex || !keyHex) return false;

  try {
    const expected = Buffer.from(keyHex, "hex");
    const actual = crypto.scryptSync(password, Buffer.from(saltHex, "hex"), expected.length);
    return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
  } catch {
    return false;
  }
}

export function verifyManagerBlogPassword(username: string, password: string) {
  const expectedUsername = process.env.MANAGER_BLOG_USERNAME || "";
  const passwordHash = process.env.MANAGER_BLOG_PASSWORD_HASH || "";

  if (!expectedUsername || !passwordHash) return false;
  if (!timingSafeStringEqual(username, expectedUsername)) return false;

  return verifyScryptHash(password, passwordHash);
}

function signPayload(payload: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createManagerBlogSessionToken() {
  const secret = process.env.MANAGER_BLOG_SESSION_SECRET || "";
  if (!secret) return null;

  const session: ManagerBlogSession = {
    role: "manager-blog",
    store_code: managerBlogConfig.storeCode,
    manager_owner: managerBlogConfig.managerOwner,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };

  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  return `${payload}.${signPayload(payload, secret)}`;
}

export function verifyManagerBlogSessionToken(token?: string) {
  const secret = process.env.MANAGER_BLOG_SESSION_SECRET || "";
  if (!secret || !token) return null;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  if (!timingSafeStringEqual(signature, signPayload(payload, secret))) return null;

  try {
    const session = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as ManagerBlogSession;
    if (session.role !== "manager-blog") return null;
    if (session.store_code !== managerBlogConfig.storeCode) return null;
    if (session.exp < Math.floor(Date.now() / 1000)) return null;
    return session;
  } catch {
    return null;
  }
}

export async function getManagerBlogSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(MANAGER_BLOG_SESSION_COOKIE)?.value;
  return verifyManagerBlogSessionToken(token);
}

export const managerBlogSessionMaxAge = SESSION_TTL_SECONDS;