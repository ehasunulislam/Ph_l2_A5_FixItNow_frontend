"use server";

import { cookies } from "next/headers";

export const getAllUsers = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/users`,
    {
      headers: {
        Authorization: token ?? "",
      },
      cache: "no-store",
    }
  );

  return res.json();
};