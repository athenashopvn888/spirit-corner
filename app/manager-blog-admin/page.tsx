import { redirect } from "next/navigation";
import { getManagerBlogSession } from "../lib/managerBlogAuth";
import { managerBlogConfig } from "../lib/managerBlogConfig";
import { getManagerBlogStorageProviderName, isManagerBlogStorageConfigured } from "../lib/managerBlogStorage";
import ManagerBlogAdmin from "./ManagerBlogAdmin";

export const metadata = {
  title: `Manager Blog Admin | ${managerBlogConfig.storeName}`,
  robots: { index: false, follow: false },
};

export default async function ManagerBlogAdminPage() {
  const session = await getManagerBlogSession();
  if (!session) redirect(managerBlogConfig.loginPath);

  return (
    <ManagerBlogAdmin
      storeName={managerBlogConfig.storeName}
      storeCode={managerBlogConfig.storeCode}
      storageConfigured={isManagerBlogStorageConfigured()}
      storageProvider={getManagerBlogStorageProviderName()}
      username={session.username}
      role={session.role}
      canManageUsers={session.can_manage_users}
    />
  );
}
