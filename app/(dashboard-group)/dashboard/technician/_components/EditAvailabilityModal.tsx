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

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { updateAvailabilityAction } from "../_action/updateAvailabilityAction";

interface Props {
  open: boolean;
  setOpen: (v: boolean) => void;

  slot: {
    id: string;
    date: string;
    startTime: string;
    endTime: string;
  };
}

export default function EditAvailabilityModal({
  open,
  setOpen,
  slot,
}: Props) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [date, setDate] = useState(slot.date.slice(0, 10));
  const [startTime, setStartTime] = useState(slot.startTime);
  const [endTime, setEndTime] = useState(slot.endTime);

  const submit = () => {
    startTransition(async () => {
      const res = await updateAvailabilityAction(slot.id, {
        date,
        startTime,
        endTime,
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
      <DialogContent className="bg-[#1c1c1c] text-white border-white/10">

        <DialogHeader>
          <DialogTitle>Edit Availability</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">

          <Input
            type="date"
            value={date}
            onChange={(e)=>setDate(e.target.value)}
          />

          <Input
            type="time"
            value={startTime}
            onChange={(e)=>setStartTime(e.target.value)}
          />

          <Input
            type="time"
            value={endTime}
            onChange={(e)=>setEndTime(e.target.value)}
          />

          <Button
            onClick={submit}
            disabled={isPending}
            className="w-full bg-[#C93C3F]"
          >
            Update
          </Button>

        </div>

      </DialogContent>
    </Dialog>
  );
}