"use server"

import { RegisterFormValues } from "../schemas/register.schema";

export const registerAction = async(payload: RegisterFormValues) => {
    try{
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify(payload)
            }
        );

        const result = await res.json();

        if(!res.ok) {
            throw new Error(result.message || "Registration failed")
        }

        return result
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch(err: any) {
        throw new Error(err.message);
    }
}