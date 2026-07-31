"use server";

import { cookies } from "next/headers";

export const deleteAvailabilityAction = async (
  id: string
) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/technicians/availability/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: token ?? "",
      },
    }
  );

  return res.json();
};