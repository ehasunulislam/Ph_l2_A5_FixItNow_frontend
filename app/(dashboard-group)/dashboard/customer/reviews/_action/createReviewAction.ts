"use server";

import { cookies } from "next/headers";

interface Payload {
  bookingId: string;
  rating: number;
  comment: string;
}

export const createReviewAction = async (payload: Payload) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value ?? "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/reviews`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },

      body: JSON.stringify(payload),
    },
  );

  return res.json();
};
