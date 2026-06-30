import { NextRequest, NextResponse } from "next/server";
import { getManagerBlogSession } from "../../../lib/managerBlogAuth";
import {
  ManagerBlogStorageError,
  deleteManagerBlogPost,
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

export async function GET() {
  const session = await requireSession();
  if (!session) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  if (!isManagerBlogStorageConfigured()) {
    return NextResponse.json(
      { error: "Manager blog storage is not configured.", posts: [], storage_configured: false },
      { status: 503 }
    );
  }

  try {
    const posts = await listManagerBlogPosts();
    return NextResponse.json({ posts, storage_configured: true });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function POST(request: NextRequest) {
  const session = await requireSession();
  if (!session) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  try {
    const body = await request.json();
    const result = await saveManagerBlogPost(body);
    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return errorResponse(error);
  }
}

export async function DELETE(request: NextRequest) {
  const session = await requireSession();
  if (!session) return NextResponse.json({ error: "Authentication required." }, { status: 401 });

  try {
    const body = await request.json();
    const result = await deleteManagerBlogPost(body);
    return NextResponse.json({ ok: true, result });
  } catch (error) {
    return errorResponse(error);
  }
}