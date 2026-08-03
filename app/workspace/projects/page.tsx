import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export default async function ProjectsPage() {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { discordId: session?.user?.discordId },
    include: { projects: true },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dự án</h1>
        <Link
          href="/workspace/projects/new"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          + Tạo dự án
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {user?.projects?.length === 0 && (
          <p className="text-gray-500 dark:text-gray-400">Chưa có dự án nào</p>
        )}
        {user?.projects?.map((project: any) => (
          <div
            key={project.id}
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:shadow-lg transition"
          >
            <h3 className="font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{project.description}</p>
            <div className="mt-2 text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full inline-block">
              {project.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
