import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Chỉ cho phép nếu có token (đã đăng nhập)
    },
  }
);

// Bảo vệ tất cả route trừ các route công khai
export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|public).*)",
  ],
};
