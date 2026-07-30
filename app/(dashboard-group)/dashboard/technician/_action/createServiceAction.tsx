"use server";

import { cookies } from "next/headers";

interface Payload {
  categoryId: string;
  title: string;
  description: string;
  price: number;
  duration: number;
}

export const createServiceAction = async (
  payload: Payload
) => {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/services`,
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