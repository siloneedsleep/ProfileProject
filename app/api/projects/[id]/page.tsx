import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { discordId: session?.user?.discordId },
  });

  const project = await prisma.project.findFirst({
    where: { id: params.id, userId: user?.id },
  });

  if (!project) notFound();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{project.name}</h1>
        <Link
          href="/workspace/projects"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Quay lại
        </Link>
      </div>
      <div className="space-y-4">
        {project.description && (
          <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
        )}
        <div className="flex gap-4 text-sm">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">
            {project.status === "active" ? "Đang làm" : "Đã lưu"}
          </span>
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              GitHub Repo →
            </a>
          )}
        </div>
        <p className="text-xs text-gray-400">
          Tạo: {new Date(project.createdAt).toLocaleDateString("vi-VN")}
        </p>
      </div>
    </div>
  );
}
