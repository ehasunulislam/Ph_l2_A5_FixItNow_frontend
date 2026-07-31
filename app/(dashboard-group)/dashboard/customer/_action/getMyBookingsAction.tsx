"use server";

import { cookies } from "next/headers";

export const getMyBookingsAction = async () => {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessableToken")?.value;

  if (!token) {
    return {
      success: false,
      message: "Unauthorized",
      data: {
        getMyBooking: [],
      },
    };
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/bookings`,
      {
        method: "GET",
        headers: {
          Authorization: token,
        },
        cache: "no-store",
      }
    );

    const result = await res.json();

    return result;
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to fetch bookings",
      data: {
        getMyBooking: [],
      },
    };
  }
};