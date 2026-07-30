"use client";

import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateCategoryModal from "./CreateCategoryModal";

interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  createdAt: string;
}

interface Props {
  categories: Category[];
}

const CategoryCards = ({ categories }: Props) => {
    const [open, setOpen] = useState(false);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-white">
            Service Categories
          </h2>

          <p className="mt-2 text-gray-400">
            Manage all available service categories.
          </p>
        </div>

        <Button className="bg-[#C93C3F] hover:bg-[#a92e31]" onClick={() => setOpen(true)}>
          + Add Category
        </Button>

        <CreateCategoryModal
            open={open}
            setOpen={setOpen}
        />
      </div>

      {/* Cards */}
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group rounded-2xl border border-white/10 bg-[#1d1d1d] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#C93C3F]"
          >
            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#C93C3F]/10 text-2xl">
              {category.icon}
            </div>

            {/* Name */}
            <h3 className="mt-5 font-semibold text-white">
              {category.name}
            </h3>

            {/* Slug */}
            <p className="mt-1 text-sm text-[#C93C3F]">
              {category.slug}
            </p>

            {/* Description */}
            <p className="mt-4 line-clamp-3 leading-7 text-gray-400 text-[0.9rem]">
              {category.description}
            </p>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <CalendarDays size={16} />
                {new Date(category.createdAt).toLocaleDateString()}
              </div>

              {/* <Button
                variant="outline"
                size="sm"
                className="border-white/10 bg-transparent text-white hover:bg-[#C93C3F] hover:text-white cursor-pointer"
              >
                <Pencil size={15} />
              </Button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {categories.length === 0 && (
        <div className="rounded-2xl border border-dashed border-white/10 py-16 text-center">
          <h3 className="text-xl font-semibold text-white">
            No Categories Found
          </h3>

          <p className="mt-2 text-gray-400">
            Start by creating your first service category.
          </p>
        </div>
      )}
    </section>
  );
};

export default CategoryCards;