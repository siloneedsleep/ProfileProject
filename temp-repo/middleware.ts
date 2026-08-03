import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        const path = req.nextUrl.pathname;
        if (path === "/" || path.startsWith("/blog") || path.startsWith("/api/auth")) {
          return true;
        }
        if (path.startsWith("/workspace")) {
          return !!token;
        }
        return true;
      },
    },
    pages: {
      signIn: "/api/auth/signin",
    },
  }
);

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
