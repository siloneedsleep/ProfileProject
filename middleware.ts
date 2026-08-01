import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Nếu request đã được xác thực (có token), tiếp tục như bình thường
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Chỉ cho phép khi có token (đã đăng nhập)
    },
    // Trang đăng nhập mặc định - nếu chưa đăng nhập, redirect đến đây
    pages: {
      signIn: "/auth/signin", // Đường dẫn đến trang đăng nhập bạn đã tạo
    },
  }
);

// Cấu hình matcher để bảo vệ các route cần thiết và bỏ qua các route công khai
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (các route xác thực của NextAuth)
     * - auth/signin (trang đăng nhập - để tránh redirect vô hạn)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon)
     * - public folder
     * - (các route tĩnh khác nếu cần)
     */
    "/((?!api/auth|auth/signin|_next/static|_next/image|favicon.ico|public|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
