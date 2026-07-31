"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateTechnicianProfile } from "../../_action/updateTechnicianmProfile";


interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  experience: number;
}

interface FormValues {
  experience: number;
}

const EditExperienceModal = ({
  open,
  setOpen,
  experience,
}: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      experience,
    },
  });

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      const res = await updateTechnicianProfile({
        bio: "",
        location: "",
        hourlyRate: 0,
        experience: data.experience,
      });

      if (res.success) {
        toast.success(res.message);
        router.refresh();
        setOpen(false);
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-white/10 bg-[#1d1d1d] text-white">
        <DialogHeader>
          <DialogTitle>Update Experience</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block">
              Experience (Years)
            </label>

            <Input
              type="number"
              {...register("experience", {
                valueAsNumber: true,
                required: "Experience is required",
                min: {
                  value: 0,
                  message: "Minimum 0",
                },
              })}
            />

            {errors.experience && (
              <p className="mt-1 text-sm text-red-500">
                {errors.experience.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#C93C3F]"
          >
            {isPending ? "Updating..." : "Update Experience"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditExperienceModal;