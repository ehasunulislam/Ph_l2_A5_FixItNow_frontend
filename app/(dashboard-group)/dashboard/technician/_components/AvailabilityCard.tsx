"use client";

import { format } from "date-fns";
import { Pencil, Trash2 } from "lucide-react";
import { useState } from "react";
import EditAvailabilityModal from "./EditAvailabilityModal";

interface Props {
  slot: {
    id: string;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: boolean;
  };
}

const AvailabilityCard = ({ slot }: Props) => {
  const [open, setOpen]=useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-[#1d1d1d] p-5">

      <div className="flex items-center justify-between">

        <div>

          <h4 className="text-lg font-semibold text-white">
            {format(new Date(slot.date), "dd MMM yyyy")}
          </h4>

          <p className="mt-2 text-gray-400">
            {slot.startTime} - {slot.endTime}
          </p>

          <span
            className={`mt-4 inline-flex rounded-full px-3 py-1 text-sm font-medium ${
              slot.isBooked
                ? "bg-red-500/20 text-red-400"
                : "bg-green-500/20 text-green-400"
            }`}
          >
            {slot.isBooked ? "Booked" : "Available"}
          </span>

        </div>

        <div className="flex gap-3">

         <button
              onClick={() => setOpen(true)}
              className="rounded-lg bg-blue-500/20 p-3 text-blue-400 cursor-pointer"
          >
              <Pencil size={18}/>
          </button>

          <EditAvailabilityModal
            open={open}
            setOpen={setOpen}
            slot={slot}
          />

          <button className="rounded-lg bg-red-500/20 p-3 text-red-400 hover:bg-red-500/30 transition cursor-pointer">
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default AvailabilityCard;