"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createCategory } from "../../_action/createCategoryAction";


interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

interface FormValues {
  name: string;
  slug: string;
  icon: string;
  description: string;
}

const CreateCategoryModal = ({
  open,
  setOpen,
}: Props) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (values: FormValues) => {
    startTransition(async () => {
      const res = await createCategory(values);

      if (res.success) {
        toast.success(res.message);

        reset();
        setOpen(false);

        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#1d1d1d] border-white/10 text-white sm:max-w-lg">

        <DialogHeader>
          <DialogTitle>Create Category</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <label>Name</label>

            <Input
              {...register("name", {
                required: "Name is required",
              })}
            />

            <p className="text-red-500 text-sm">
              {errors.name?.message}
            </p>
          </div>

          <div>
            <label>Slug</label>

            <Input
              {...register("slug", {
                required: "Slug is required",
              })}
            />

            <p className="text-red-500 text-sm">
              {errors.slug?.message}
            </p>
          </div>

          <div>
            <label>Icon (Emoji)</label>

            <Input
              placeholder="⚡"
              {...register("icon", {
                required: "Icon is required",
              })}
            />

            <p className="text-red-500 text-sm">
              {errors.icon?.message}
            </p>
          </div>

          <div>
            <label>Description</label>

            <Textarea
              rows={4}
              {...register("description", {
                required: "Description is required",
              })}
            />

            <p className="text-red-500 text-sm">
              {errors.description?.message}
            </p>
          </div>

          <Button
            disabled={isPending}
            type="submit"
            className="w-full bg-[#C93C3F] hover:bg-[#a92e31]"
          >
            {isPending
              ? "Creating..."
              : "Create Category"}
          </Button>
        </form>

      </DialogContent>
    </Dialog>
  );
};

export default CreateCategoryModal;