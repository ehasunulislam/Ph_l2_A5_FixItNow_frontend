"use server";

import { cookies } from "next/headers";

interface Payload {
  serviceId: string;
  availabilityId: string;
  address: string;
  note?: string;
}

export const createBookingAction = async (payload: Payload) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/bookings`,
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