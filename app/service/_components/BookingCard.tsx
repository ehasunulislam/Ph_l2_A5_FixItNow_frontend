"use client";

import { IAvailability, IService } from "@/components/Interface/service.interface";
import { format } from "date-fns";

interface Props {
  service: IService;
}

const BookingCard = ({ service }: Props) => {
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

          <div className="space-y-3">
            {service.technicianProfile.availability.map((slot: IAvailability) => (
              <div
                key={slot.id}
                className="rounded-xl border border-white/10 p-4 hover:border-[#C93C3F] cursor-pointer transition"
              >
                <p className="text-white">
                  {format(new Date(slot.date), "dd MMM yyyy")}
                </p>

                <p className="text-gray-400">
                  {slot.startTime} - {slot.endTime}
                </p>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-8 w-full h-12 rounded-xl bg-[#C93C3F] text-white font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
