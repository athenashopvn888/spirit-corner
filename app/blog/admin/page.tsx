import { redirect } from "next/navigation";

export default function LegacyBlogAdminRedirect() {
  redirect("/manager-blog-login");
}