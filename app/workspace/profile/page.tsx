import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { discordId: session?.user?.discordId },
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Hồ sơ</h1>
      <div className="max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Tên</label>
          <input
            defaultValue={user?.name || ""}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            defaultValue={user?.email || ""}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900"
            disabled
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Avatar</label>
          {user?.image && (
            <img src={user.image} alt="Avatar" className="w-16 h-16 rounded-full" />
          )}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Thông tin được đồng bộ từ Discord</p>
      </div>
    </div>
  );
}
