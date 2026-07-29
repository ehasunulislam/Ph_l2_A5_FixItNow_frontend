"use server";

import { cookies } from "next/headers";
import { RegisterFormValues } from "../schemas/register.schema";

export const registerAction = async (payload: RegisterFormValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message);
  }

  const cookieStore = await cookies();

  cookieStore.set("accessableToken", result.data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  cookieStore.set("refreshableToken", result.data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return result;
};