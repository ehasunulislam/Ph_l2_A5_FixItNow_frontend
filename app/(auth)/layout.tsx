import Image from "next/image";
import React from "react";

import authImg from "@/components/assets/auth_img.png";

const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="min-h-screen bg-[#202020]">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <div className="relative hidden lg:block overflow-hidden">

          {/* Background Image */}
          <Image
            src={authImg}
            alt="Auth Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="flex min-h-screen items-center justify-center bg-[#202020] px-6 py-12">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;