"use client";

import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useState } from "react";
import { createAvailabilityAction } from "../_action/createAvailabilityAction";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const AvailabilityForm = () => {
  const [date, setDate] = useState<Date>();
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const router = useRouter();

  const handleSubmit = async() => {
    if (!date) return;

    const payload = {
      date: format(date, "yyyy-MM-dd"),
      startTime,
      endTime,
    };

    const result = await createAvailabilityAction(payload);

    if (result.success) {
      toast.success(result.message);
      router.refresh();
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#1c1c1c] p-6 text-white">

      <h2 className="text-2xl font-bold text-white">
        Add Availability
      </h2>

      <p className="mt-1 text-sm text-gray-400">
        Select a day and your working hours.
      </p>

      {/* Calendar */}
      <div className="mt-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-xl border border-white/10 bg-[#252525] w-full"
        />
      </div>

      {/* Selected Date */}
      <div className="mt-6">
        <label className="text-sm text-gray-400">
          Selected Date
        </label>

        <div className="mt-2 rounded-lg bg-[#2b2b2b] p-3 text-white">
          {date ? format(date, "PPP") : "No date selected"}
        </div>
      </div>

      {/* Time Inputs */}
      <div className="mt-6 grid grid-cols-2 gap-4">

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Start Time
          </label>

          <Input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            End Time
          </label>

          <Input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>

      </div>

      <Button
        onClick={handleSubmit}
        className="mt-8 w-full bg-[#C93C3F] hover:bg-[#ad3134]"
      >
        Add Availability
      </Button>

    </div>
  );
};

export default AvailabilityForm;