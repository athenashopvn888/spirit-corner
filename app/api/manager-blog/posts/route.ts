import { NextRequest, NextResponse } from "next/server";
import { getManagerBlogSession } from "../../../lib/managerBlogAuth";
import {
  ManagerBlogStorageError,
  changeManagerBlogPostStatus,
  deleteManagerBlogPost,
  duplicateManagerBlogPost,
  getManagerBlogStorageProviderName,
  isManagerBlogStorageConfigured,
  listManagerBlogPosts,
  saveManagerBlogPost,
} from "../../../lib/managerBlogStorage";
import { managerBlogConfig } from "../../../lib/managerBlogConfig";

async function requireSession() {
  const session = await getManagerBlogSession();
  return session?.store_code === managerBlogConfig.storeCode ? session : null;
}

function errorResponse(error: unknown) {
  if (error instanceof ManagerBlogStorageError) {
    return NextResponse.json({ error: error.message }, { status: error.status });
  }

  return NextResponse.json({ error: "Manager blog request failed." }, { status: 500 });
}

function storageStatus() {
  return {
    storage_configured: isManagerBlogStorageConfigured(),
    storage_provider: getManagerBlogStorageProviderName(),
  };
}

export async function GET() {
  const session = await requireSession();
  if (!session) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  if (!isManagerBlogStorageConfigured()) {
    return NextResponse.json({ posts: [], ...storageStatus() });
  }

  try {
    const posts = await listManagerBlogPosts(session);
    return NextResponse.json({ posts, ...storageStatus() });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  const session = await requireSession();
  if (!session) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  try {
    const body = await request.json();
    const action = String(body.action || "save").toLowerCase();
    let result: unknown;

    if (action === "publish" || action === "unpublish" || action === "archive") {
      result = await changeManagerBlogPostStatus(body, session, action);
    } else if (action === "duplicate") {
      result = await duplicateManagerBlogPost(body, session);
    } else if (action === "delete") {
      result = await deleteManagerBlogPost(body, session);
    } else {
      result = await saveManagerBlogPost(body, session);
    }

    return NextResponse.json({ ok: true, result, ...storageStatus() });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request: NextRequest) {
  const session = await requireSession();
  if (!session) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  try {
    const body = await request.json();
    const result = await deleteManagerBlogPost(body, session);
    return NextResponse.json({ ok: true, result, ...storageStatus() });
  } catch (error) {
    return errorResponse(error);
  }
}
