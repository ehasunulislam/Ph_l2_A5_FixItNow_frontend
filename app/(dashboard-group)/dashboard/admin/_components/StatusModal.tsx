"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { updateUserStatus } from "../../_action/updateUserStatusAction";


interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;

  user: {
    id: string;
    name: string;
    status: "ACTIVE" | "BLOCKED";
  };
}

const UpdateUserStatusModal = ({
  open,
  setOpen,
  user,
}: Props) => {
  const router = useRouter();

  const [status, setStatus] = useState(user.status);

  const [isPending, startTransition] = useTransition();

  const handleUpdate = () => {
    startTransition(async () => {
      const res = await updateUserStatus(user.id, {
        status,
      });

      if (res.success) {
        toast.success(res.message);

        setOpen(false);

        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-[#1d1d1d] text-white border-white/10">

        <DialogHeader>
          <DialogTitle>
            Update User Status
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">

          <div>
            <p className="text-sm text-gray-400 mb-2">
              User
            </p>

            <p className="font-semibold">
              {user.name}
            </p>
          </div>

          <Select
            value={status}
            onValueChange={(value) =>
              setStatus(value as "ACTIVE" | "BLOCKED")
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="ACTIVE">
                ACTIVE
              </SelectItem>

              <SelectItem value="BLOCKED">
                BLOCKED
              </SelectItem>
            </SelectContent>
          </Select>

          <Button
            onClick={handleUpdate}
            disabled={isPending}
            className="w-full bg-amber-300 text-black"
          >
            {isPending ? "Updating..." : "Update Status"}
          </Button>

        </div>

      </DialogContent>
    </Dialog>
  );
};

export default UpdateUserStatusModal;