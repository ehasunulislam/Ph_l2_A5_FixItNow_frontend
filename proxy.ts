import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("accessableToken")?.value;
  const pathname = request.nextUrl.pathname;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET!
    ) as {
      id: string;
      role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";
    };

    // Admin routes
    if (
      pathname.startsWith("/dashboard/admin-dashboard") &&
      decoded.role !== "ADMIN"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Technician dashboard
    if (
      pathname.startsWith("/dashboard/technician-dashboard") &&
      decoded.role !== "TECHNICIAN"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Customer dashboard
    if (
      pathname.startsWith("/dashboard/customer-dashboard") &&
      decoded.role !== "CUSTOMER"
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/admin-dashboard/:path*",
    "/dashboard/technician-dashboard/:path*",
    "/dashboard/customer-dashboard/:path*",
    "/dashboard/technician/:path*"
  ],
};