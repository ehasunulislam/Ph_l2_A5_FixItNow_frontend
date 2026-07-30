"use server";

import { cookies } from "next/headers";

export const updateUserStatus = async (
  id: string,
  payload: {
    status: "ACTIVE" | "BLOCKED";
  }
) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/users/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ?? "",
      },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
};