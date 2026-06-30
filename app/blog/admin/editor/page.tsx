import { redirect } from "next/navigation";

export default function LegacyBlogEditorRedirect() {
  redirect("/manager-blog-admin");
}