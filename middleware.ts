import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isLoggedIn = !!req.auth;

  const authRoutes = ["/login", "/register"];
  const protectedRoutes = ["/cart", "/dashboard"];

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // If user is logged in and trying to access login page, redirect to home
  if (isLoggedIn && isAuthRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If user is not logged in and trying to access protected routes, redirect to login
  if (!isLoggedIn && isProtectedRoute) {
    const callbackUrl = encodeURIComponent(pathname);
    return NextResponse.redirect(
      new URL(`/login?callbackUrl=${callbackUrl}`, req.url)
    );
  }
  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|assets).*)",
  ],
};
