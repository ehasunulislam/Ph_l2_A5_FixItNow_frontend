"use server";

import { cookies } from "next/headers";

export const getTechnicianBookingsAction =
  async () => {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessableToken")?.value;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/technician/bookings`,
      {
        headers: {
          Authorization: token ?? "",
        },
        cache: "no-store",
      }
    );

    return res.json();
  };