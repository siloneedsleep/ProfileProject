import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { discordId: session.user?.discordId },
    include: { projects: true },
  });

  return NextResponse.json(user?.projects || []);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { discordId: session.user?.discordId },
  });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const body = await req.json();
  const project = await prisma.project.create({
    data: {
      name: body.name,
      description: body.description,
      status: body.status || "active",
      repoUrl: body.repoUrl,
      userId: user.id,
    },
  });

  return NextResponse.json(project, { status: 201 });
}
