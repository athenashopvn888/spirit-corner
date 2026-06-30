import crypto from "crypto";
import { cookies } from "next/headers";
import { managerBlogConfig } from "./managerBlogConfig";

export const MANAGER_BLOG_SESSION_COOKIE = "manager_blog_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;
const validRoles = ["publisher", "master_admin"] as const;

export type ManagerBlogRole = (typeof validRoles)[number];

export interface ManagerBlogUser {
  username: string;
  passwordHash: string;
  role: ManagerBlogRole;
  stores: string[];
}

export interface ManagerBlogSession {
  role: ManagerBlogRole;
  username: string;
  store_code: string;
  store_codes: string[];
  manager_owner: string;
  can_manage_users: boolean;
  exp: number;
}

function normalizeStoreCode(value: unknown) {
  const store = String(value || "").trim().toUpperCase();
  return store === "SCC" ? "SCC01" : store;
}

function normalizeRole(value: unknown): ManagerBlogRole {
  return value === "master_admin" ? "master_admin" : "publisher";
}

function parseUsersJson(): ManagerBlogUser[] {
  const raw = process.env.MANAGER_BLOG_USERS_JSON;
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed
      .map((entry) => {
        const record = entry as Record<string, unknown>;
        const stores = Array.isArray(record.stores)
          ? record.stores.map(normalizeStoreCode).filter(Boolean)
          : [];

        return {
          username: String(record.username || "").trim(),
          passwordHash: String(record.passwordHash || "").trim(),
          role: normalizeRole(record.role),
          stores,
        };
      })
      .filter((user) => user.username && user.passwordHash && user.stores.includes(managerBlogConfig.storeCode));
  } catch {
    return [];
  }
}

export function getConfiguredManagerBlogUsers(): ManagerBlogUser[] {
  const multiUserConfig = parseUsersJson();
  if (multiUserConfig.length > 0) return multiUserConfig;

  const username = process.env.MANAGER_BLOG_USERNAME || "";
  const passwordHash = process.env.MANAGER_BLOG_PASSWORD_HASH || "";
  if (!username || !passwordHash) return [];

  return [{
    username,
    passwordHash,
    role: "publisher",
    stores: [managerBlogConfig.storeCode],
  }];
}

export function isManagerBlogAuthConfigured() {
  return Boolean(process.env.MANAGER_BLOG_SESSION_SECRET && getConfiguredManagerBlogUsers().length > 0);
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
  const attemptedUsername = username.trim();
  const users = getConfiguredManagerBlogUsers();

  for (const user of users) {
    if (!timingSafeStringEqual(attemptedUsername, user.username)) continue;
    if (verifyScryptHash(password, user.passwordHash)) return user;
  }

  return null;
}

function signPayload(payload: string, secret: string) {
  return crypto.createHmac("sha256", secret).update(payload).digest("base64url");
}

export function createManagerBlogSessionToken(user: ManagerBlogUser) {
  const secret = process.env.MANAGER_BLOG_SESSION_SECRET || "";
  if (!secret || !user.stores.includes(managerBlogConfig.storeCode)) return null;

  const session: ManagerBlogSession = {
    role: user.role,
    username: user.username,
    store_code: managerBlogConfig.storeCode,
    store_codes: user.stores,
    manager_owner: user.username,
    can_manage_users: user.role === "master_admin",
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
    if (!validRoles.includes(session.role)) return null;
    if (session.store_code !== managerBlogConfig.storeCode) return null;
    if (!Array.isArray(session.store_codes) || !session.store_codes.includes(managerBlogConfig.storeCode)) return null;
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
