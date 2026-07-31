"use client";

import { IService } from "@/components/Interface/service.interface";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { format } from "date-fns";
import {
  Clock,
  MapPin,
  NotebookPen,
  Wallet,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { createBookingAction } from "../_action/createBookingAction";

interface Props {
  service: IService;

  user: {
    id: string;
    role: string;
  } | null;
}

const BookingCard = ({
  service,
  user,
}: Props) => {
  const router = useRouter();

  const [selectedSlot, setSelectedSlot] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [note, setNote] = useState("");

  const [isPending, startTransition] =
    useTransition();

  const handleBooking = () => {
    if (!user) {
      toast.error("Please login first.");
      router.push("/login");
      return;
    }

    if (user.role !== "CUSTOMER") {
      toast.error(
        "Only customers can book services."
      );
      return;
    }

    if (!selectedSlot) {
      toast.error(
        "Please select an available slot."
      );
      return;
    }

    if (!address.trim()) {
      toast.error(
        "Please enter your service address."
      );
      return;
    }

    startTransition(async () => {
      const res = await createBookingAction({
        serviceId: service.id,
        availabilityId: selectedSlot,
        address,
        note,
      });

      if (res.success) {
        toast.success(
          "Booking request submitted successfully."
        );

        router.push("/dashboard/customer");
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <div className="sticky top-24">
      <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-white">
          Book This Service
        </h2>

        {/* Price */}
        <div className="mt-6 rounded-xl border border-white/10 bg-[#202020] p-4">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-gray-400">
              <Wallet size={18} />
              Service Price
            </span>

            <span className="text-3xl font-bold text-[#C93C3F]">
              ৳{service.price}
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="flex items-center gap-2 text-gray-400">
              <Clock size={18} />
              Duration
            </span>

            <span className="font-medium text-white">
              {service.duration} Minutes
            </span>
          </div>
        </div>

        {/* Slots */}
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Select Available Slot
          </h3>

          {service.technicianProfile
            .availability.length === 0 ? (
            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-center text-yellow-400">
              No available slots.
            </div>
          ) : (
            <RadioGroup
              value={selectedSlot}
              onValueChange={setSelectedSlot}
              className="space-y-3"
            >
              {service.technicianProfile.availability.map(
                (slot) => (
                  <Label
                    key={slot.id}
                    htmlFor={slot.id}
                    className={`flex cursor-pointer items-center justify-between rounded-xl border p-4 transition ${
                      selectedSlot === slot.id
                        ? "border-[#C93C3F] bg-[#C93C3F]/10"
                        : "border-white/10 hover:border-[#C93C3F]/40"
                    }`}
                  >
                    <div>
                      <p className="font-medium text-white">
                        {format(
                          new Date(slot.date),
                          "dd MMM yyyy"
                        )}
                      </p>

                      <p className="mt-1 text-sm text-gray-400">
                        {slot.startTime} -{" "}
                        {slot.endTime}
                      </p>
                    </div>

                    <RadioGroupItem
                      value={slot.id}
                      id={slot.id}
                    />
                  </Label>
                )
              )}
            </RadioGroup>
          )}
        </div>

        {/* Address */}
        <div className="mt-8">
          <label className="mb-2 block font-medium text-white">
            Service Address
          </label>

          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#202020] p-3">
            <MapPin
              size={18}
              className="mt-1 text-gray-400"
            />

            <textarea
              rows={3}
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              placeholder="Enter the address where the technician will visit..."
              className="w-full resize-none bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Note */}
        <div className="mt-6">
          <label className="mb-2 block font-medium text-white">
            Additional Note
          </label>

          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#202020] p-3">
            <NotebookPen
              size={18}
              className="mt-1 text-gray-400"
            />

            <textarea
              rows={3}
              value={note}
              onChange={(e) =>
                setNote(e.target.value)
              }
              placeholder="Write any special instructions..."
              className="w-full resize-none bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="mt-8 rounded-xl border border-white/10 bg-[#202020] p-4">
          <h3 className="mb-4 font-semibold text-white">
            Booking Summary
          </h3>

          <div className="flex justify-between text-gray-400">
            <span>Service Fee</span>

            <span className="font-medium text-white">
              ৳{service.price}
            </span>
          </div>

          <div className="mt-2 flex justify-between text-gray-400">
            <span>Duration</span>

            <span className="font-medium text-white">
              {service.duration} Minutes
            </span>
          </div>

          <div className="mt-2 flex justify-between text-gray-400">
            <span>Status</span>

            <span className="font-medium text-yellow-400">
              Request Pending
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={handleBooking}
          disabled={
            isPending ||
            !user ||
            user.role !== "CUSTOMER" ||
            service.technicianProfile
              .availability.length === 0
          }
          className="mt-8 h-12 w-full rounded-xl bg-[#C93C3F] font-semibold text-white transition hover:bg-[#b63336] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isPending
            ? "Sending Request..."
            : !user
            ? "Login to Book"
            : user.role !== "CUSTOMER"
            ? "Only Customers Can Book"
            : "Request Booking"}
        </button>

        {/* Flow */}
        <div className="mt-8 rounded-xl border border-white/10 bg-[#202020] p-4">
          <h4 className="mb-4 font-semibold text-white">
            Booking Process
          </h4>

          <div className="space-y-2 text-sm text-gray-400">
            <p>1. Submit your booking request.</p>

            <p>
              2. Technician accepts or declines
              your request.
            </p>

            <p>
              3. Complete secure payment after
              approval.
            </p>

            <p>
              4. Technician completes the
              service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;