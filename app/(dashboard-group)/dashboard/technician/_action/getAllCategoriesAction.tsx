"use server";

export const getAllCategoriesAction = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/categories`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return res.json();
};