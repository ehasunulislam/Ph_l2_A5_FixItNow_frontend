"use client";

import { useTransition } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
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
import { updateTechnicianProfile } from "../../_action/updateTechnicianmProfile";

const profileSchema = z.object({
  bio: z.string().min(10, "Bio must be at least 10 characters"),
  location: z.string().min(2, "Location is required"),
  hourlyRate: z.number().min(0, "Hourly rate must be positive"),
  experience: z.number().min(0, "Experience must be positive"),
});

type FormValues = z.infer<typeof profileSchema>;

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;

  technician: {
    bio: string | null;
    location: string;
    hourlyRate: string;
    experience: string;
  };
}

const EditProfileModal = ({ open, setOpen, technician }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      bio: technician.bio ?? "",
      location: technician.location ?? "",
      hourlyRate: Number(technician.hourlyRate),
      experience: Number(technician.experience)
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    startTransition(async () => {
      try {
        const res = await updateTechnicianProfile(values);

        if (res.success) {
          toast.success(res.message);
          setOpen(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#1d1d1d] border-white/10 text-white sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Edit Technician Profile</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Bio */}
          <div>
            <label className="mb-2 block text-sm font-medium">Bio</label>

            <Textarea
              rows={5}
              placeholder="Write something about yourself..."
              {...register("bio")}
            />

            {errors.bio && (
              <p className="mt-1 text-sm text-red-500">{errors.bio.message}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="mb-2 block text-sm font-medium">Location</label>

            <Input placeholder="Dhaka" {...register("location")} />

            {errors.location && (
              <p className="mt-1 text-sm text-red-500">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Hourly Rate */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Hourly Rate (৳)
            </label>

            <Input
              type="number"
              placeholder="500"
              {...register("hourlyRate", {
                valueAsNumber: true,
              })}
            />

            {errors.hourlyRate && (
              <p className="mt-1 text-sm text-red-500">
                {errors.hourlyRate.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#C93C3F] hover:bg-[#a92e31]"
          >
            {isPending ? "Updating..." : "Save Changes"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileModal;
