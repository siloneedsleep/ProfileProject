import NextAuth, { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

// Chỉ cho phép Discord ID của bạn
const ALLOWED_DISCORD_ID = "914831312295165982";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Kiểm tra ID Discord trùng khớp
      if (account?.provider === "discord" && profile?.id === ALLOWED_DISCORD_ID) {
        return true; // Cho phép đăng nhập
      }
      return false; // Từ chối
    },
    async jwt({ token, profile }) {
      if (profile?.id) {
        token.discordId = profile.id;
        if (profile.id === ALLOWED_DISCORD_ID) {
          token.role = "ADMIN";
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.discordId) {
        session.user.discordId = token.discordId as string;
        session.user.role = token.role as string || "USER";
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/signin", // Bạn có thể tạo trang đăng nhập tùy chỉnh
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
