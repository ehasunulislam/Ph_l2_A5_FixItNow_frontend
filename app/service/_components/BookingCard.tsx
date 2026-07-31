"use client";

import { IService } from "@/components/Interface/service.interface";
import { format } from "date-fns";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface Props {
  service: IService;
}

const BookingCard = ({ service }: Props) => {
  const [selectedSlot, setSelectedSlot] = useState("");

  return (
    <div className="sticky top-24">
      <div className="rounded-2xl bg-[#181818] border border-white/10 p-6">
        <h2 className="text-2xl font-semibold text-white">Book Service</h2>

        <div className="mt-6">
          <p className="text-gray-400">Price</p>

          <p className="text-3xl text-[#C93C3F] font-bold">৳{service.price}</p>
        </div>

        <div className="mt-8">
          <h3 className="text-white font-semibold mb-4">Available Slots</h3>

        <RadioGroup
          value={selectedSlot}
          onValueChange={setSelectedSlot}
          className="space-y-3"
        >
          {service.technicianProfile.availability.map((slot) => (
            <Label
              key={slot.id}
              htmlFor={slot.id}
              className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition
                ${
                  selectedSlot === slot.id
                    ? "border-[#C93C3F] bg-[#C93C3F]/10"
                    : "border-white/10 hover:border-[#C93C3F]/50"
                }`}
            >
              <div>
                <p className="font-medium text-white">
                  {format(new Date(slot.date), "dd MMM yyyy")}
                </p>

                <p className="text-sm text-gray-400">
                  {slot.startTime} - {slot.endTime}
                </p>
              </div>

              <RadioGroupItem
                value={slot.id}
                id={slot.id}
              />
            </Label>
          ))}
        </RadioGroup>
        </div>

        <button className="mt-8 w-full h-12 rounded-xl bg-[#C93C3F] text-white font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
