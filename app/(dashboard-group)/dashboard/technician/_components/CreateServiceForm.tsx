"use client";

import { useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { createServiceAction } from "../_action/createServiceAction";

const serviceSchema = z.object({
  categoryId: z.string().min(1, "Please select a category"),
  title: z.string().min(3),
  description: z.string().min(10),
  price: z.coerce.number().min(1),
  duration: z.coerce.number().min(1),
});

type FormValues = z.input<typeof serviceSchema>;

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Props {
  categories: Category[];
}

const CreateServiceForm = ({ categories }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(serviceSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    startTransition(async () => {
      try {
        // ensure numeric fields are actual numbers (react-hook-form may give unknown/string)
        const payload = {
          ...values,
          price: Number(values.price),
          duration: Number(values.duration),
        };

        const res = await createServiceAction(payload);

        if (res.success) {
          toast.success(res.message);
          reset();
          router.refresh();
        } else {
          toast.error(res.message);
        }
      } catch {
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#1d1d1d] p-8 text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Category
          </label>

          <select
            {...register("categoryId")}
            className="w-full rounded-lg border border-white/10 bg-[#262626] p-3 text-white outline-none"
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.icon} {category.name}
              </option>
            ))}
          </select>

          {errors.categoryId && (
            <p className="mt-1 text-sm text-red-500">
              {errors.categoryId.message}
            </p>
          )}
        </div>

        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Service Title
          </label>

          <Input
            {...register("title")}
            placeholder="Electric Repair"
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-500">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-white">
            Description
          </label>

          <Textarea
            rows={5}
            {...register("description")}
            placeholder="Describe your service..."
          />

          {errors.description && (
            <p className="mt-1 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Price */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Price (৳)
            </label>

            <Input
              type="number"
              {...register("price")}
              placeholder="500"
            />

            {errors.price && (
              <p className="mt-1 text-sm text-red-500">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white">
              Duration
            </label>

            <Input
              type="number"
              {...register("duration")}
              placeholder="60"
            />

            {errors.duration && (
              <p className="mt-1 text-sm text-red-500">
                {errors.duration.message}
              </p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-[#C93C3F] hover:bg-[#a92e31] cursor-pointer"
        >
          {isPending ? "Creating..." : "Create Service"}
        </Button>
      </form>
    </div>
  );
};

export default CreateServiceForm;