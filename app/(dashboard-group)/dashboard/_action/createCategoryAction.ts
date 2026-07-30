"use server";

import { cookies } from "next/headers";

interface CategoryPayload {
  name: string;
  slug: string;
  icon: string;
  description: string;
}

export const createCategory = async (payload: CategoryPayload) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/categories`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ?? "",
      },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
};