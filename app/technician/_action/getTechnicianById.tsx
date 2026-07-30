"use server"

export const getTechnicianById = async (id: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/technician/${id}`,
        {
            cache: "no-store"
        }
    );

    const result = await res.json();

    return result.data;
}