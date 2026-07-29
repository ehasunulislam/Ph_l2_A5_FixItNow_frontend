import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export const logout = async() => {
    const cookieStore = await cookies();

    cookieStore.delete("accessableToken");
    cookieStore.delete("refreshableToken");

    redirect("/login");
}