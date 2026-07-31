"use server";

import { IService } from "@/components/Interface/service.interface";
import { cookies } from "next/headers";

interface ApiResponse {
  success: boolean;
  message: string;
  data: IService;
}

export const getServiceByIdAction = async (
  id: string
): Promise<ApiResponse> => {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessableToken")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/services/${id}`,
    {
      headers: {
        Authorization: token ?? "",
      },
      cache: "no-store",
    }
  );

  return res.json();
};