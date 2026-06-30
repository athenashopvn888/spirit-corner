import { redirect } from "next/navigation";
import { getManagerBlogSession } from "../lib/managerBlogAuth";
import { managerBlogConfig } from "../lib/managerBlogConfig";
import ManagerBlogLogin from "./ManagerBlogLogin";

export const metadata = {
  title: `Manager Blog Login | ${managerBlogConfig.storeName}`,
  robots: { index: false, follow: false },
};

export default async function ManagerBlogLoginPage() {
  const session = await getManagerBlogSession();
  if (session) redirect(managerBlogConfig.adminPath);

  return <ManagerBlogLogin storeName={managerBlogConfig.storeName} />;
}