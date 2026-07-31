"use server";

import { cookies } from "next/headers";

interface Payload {
  date: string;
  startTime: string;
  endTime: string;
}

export const updateAvailabilityAction = async (
  id: string,
  payload: Payload
) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/technicians/availability/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ?? "",
      },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
};