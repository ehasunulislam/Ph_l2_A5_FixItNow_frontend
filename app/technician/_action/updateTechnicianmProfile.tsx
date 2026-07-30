"use server";

import { cookies } from "next/headers";

export const updateTechnicianProfile = async (
  payload: {
    bio: string;
    location: string;
    hourlyRate: number;
  }
) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/technician/profile`,
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