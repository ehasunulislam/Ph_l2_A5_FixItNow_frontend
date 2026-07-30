// "use server";

// export const getAllServices = async (searchParams: {
//     page?: number;
//     searchTerm?: string;
//     category?: string;
//   }
// ) => {
//   const params = new URLSearchParams();

//   if (searchParams.page)
//     params.append("page", searchParams.page.toString());

//   if (searchParams.searchTerm)
//     params.append("searchTerm", searchParams.searchTerm);

//   if (searchParams.category)
//     params.append("category", searchParams.category);

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/services?${params.toString()}`,
//     {
//       next: {
//         revalidate: 60,
//       },
//     }
//   );

//   return res.json();
// };

"use server";

export const getAllServices = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/services`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch services");
  }

  return res.json();
};