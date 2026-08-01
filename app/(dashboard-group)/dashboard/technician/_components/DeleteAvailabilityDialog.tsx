"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Trash2 } from "lucide-react";
import { deleteAvailabilityAction } from "../_action/deleteAvailabilityAction";

interface Props {
  id: string;
}

const DeleteAvailabilityDialog = ({ id }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      const res = await deleteAvailabilityAction(id);

      if (res.success) {
        toast.success("Availability deleted successfully");
        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <button
          type="button"
          className="rounded-lg bg-red-500/20 p-3 text-red-400 hover:bg-red-500/30 transition cursor-pointer"
        >
          <Trash2 size={18} />
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-[#181818] border border-white/10 text-white">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl">
            Delete Availability?
          </AlertDialogTitle>

          <AlertDialogDescription className="text-gray-400">
            This action cannot be undone. The selected availability slot
            will be permanently removed.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer bg-black border-0 ">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            disabled={isPending}
            onClick={handleDelete}
            className="bg-red-600 hover:bg-red-700 cursor-pointer"
          >
            {isPending ? "Deleting..." : "Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAvailabilityDialog;