"use server";

import { cookies } from "next/headers";

export const updateBookingStatusAction =
  async (
    bookingId: string,
    status: string
  ) => {
    const cookieStore = await cookies();

    const token =
      cookieStore.get("accessableToken")
        ?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/technician/${bookingId}/status`,
      {
        method: "PATCH",

        headers: {
          "Content-Type":
            "application/json",

          Authorization: token ?? "",
        },

        body: JSON.stringify({
          status,
        }),
      }
    );

    return res.json();
  };