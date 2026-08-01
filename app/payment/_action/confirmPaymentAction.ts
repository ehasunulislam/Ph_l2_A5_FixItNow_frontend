"use server";

import { cookies } from "next/headers";

export const confirmPaymentAction = async (sessionId: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments/confirm`,
    {
      method: "POST",

      headers: {
        Authorization: token || "",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        sessionId,
      }),
    },
  );

  return res.json();
};
