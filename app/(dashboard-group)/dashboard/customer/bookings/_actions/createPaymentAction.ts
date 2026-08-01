"use server";

import { cookies } from "next/headers";

export const createPaymentAction = async (bookingId: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payments/create`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: token || "",
      },

      body: JSON.stringify({
        bookingId,
      }),
    },
  );

  return res.json();
};
