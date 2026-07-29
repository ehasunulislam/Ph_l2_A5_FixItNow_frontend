"use server";

import { cookies } from "next/headers";

export const getCurrentUser = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value;

  if (!token) {
    return null;
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/me`,
    {
      headers: {
        Authorization: token,
      },
      cache: "no-store",
    }
  );

  
  if(!res.ok) {
      throw new Error("Token unthoriged");
  }

  const result = await res.json();


  return result.data.result;
};