"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { updateBookingStatusAction } from "../_action/updateBookingStatusAction";

interface Props {
  bookingId: string;
  status: string;
}

const UpdateBookingStatus = ({ bookingId, status }: Props) => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const updateStatus = (status: string) => { startTransition(async () => {
    const res = await updateBookingStatusAction(bookingId, status);

      if (res.success) {
        toast.success(res.message);
        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  };

  if (status === "REQUESTED") {
    return (
      <div className="mt-6 flex gap-3">
        <Button
          disabled={isPending}
          onClick={() => updateStatus("ACCEPTED")}
          className="bg-green-700 hover:bg-green-800 cursor-pointer"
        >
          Accept
        </Button>

        <Button
          disabled={isPending}
          onClick={() => updateStatus("DECLINED")}
          variant="destructive"
          className="cursor-pointer"
        >
          Decline
        </Button>
      </div>
    );
  }

  if (status === "PAID") {
    return (
      <div className="mt-6">
        <Button
          disabled={isPending}
          onClick={() => updateStatus("IN_PROGRESS")}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Start Work
        </Button>
      </div>
    );
  }

  if (status === "IN_PROGRESS") {
    return (
      <div className="mt-6">
        <Button
          disabled={isPending}
          onClick={() => updateStatus("COMPLETED")}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          Mark Completed
        </Button>
      </div>
    );
  }

  return null;
};

export default UpdateBookingStatus;
