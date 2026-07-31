import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Calendar, Clock, MapPin } from "lucide-react";
import { IBooking } from "@/components/Interface/booking.interface";

interface Props {
  booking: IBooking;
}

const BookingCard = ({ booking }: Props) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
      {/* category */}

      <p className="text-4xl">{booking.service.category.icon}</p>

      <h2 className="mt-3 text-xl font-semibold text-white">
        {booking.service.title}
      </h2>

      {/* technician */}

      <div className="mt-6 flex items-center gap-4">
        <Image
          src={booking.technicianProfile.user.profileImage}
          alt=""
          width={40}
          height={40}
          className="h-20 w-20 rounded-full object-cover"
        />

        <div>
          <p className="text-sm text-gray-400">Technician</p>

          <p className="font-semibold text-white">
            {booking.technicianProfile.user.name}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-2 text-gray-300">
          <Calendar size={18} />
          {format(new Date(booking.bookingDate), "dd MMM yyyy")}
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <Clock size={18} />
          {booking.availability.startTime} - {booking.availability.endTime}
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <MapPin size={18} />
          {booking.address}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-3xl font-bold text-[#C93C3F]">
          ৳{booking.service.price}
        </span>

        <span
          className={`rounded-full px-4 py-1 text-sm font-medium

          ${
            booking.status === "REQUESTED" && "bg-yellow-500/20 text-yellow-400"
          }

          ${booking.status === "ACCEPTED" && "bg-blue-500/20 text-blue-400"}

          ${booking.status === "PAID" && "bg-green-500/20 text-green-400"}

          ${
            booking.status === "COMPLETED" &&
            "bg-emerald-500/20 text-emerald-400"
          }

          ${booking.status === "DECLINED" && "bg-red-500/20 text-red-400"}

          `}
        >
          {booking.status}
        </span>
      </div>

      <div className="mt-8">
        {booking.status === "REQUESTED" && (
          <div className="rounded-xl bg-yellow-500/10 p-3 text-center text-sm text-yellow-400">
            Waiting for technician approval
          </div>
        )}

        {booking.status === "ACCEPTED" && (
          <Link
            href={`/dashboard/customer/bookings/${booking.id}/pay`}
            className="block rounded-xl bg-[#C93C3F] py-3 text-center font-semibold text-white"
          >
            Proceed to Payment
          </Link>
        )}

        {booking.status === "PAID" && (
          <div className="rounded-xl bg-green-500/10 p-3 text-center text-green-400">
            Payment Completed
          </div>
        )}

        {booking.status === "COMPLETED" && (
          <button className="w-full rounded-xl bg-[#C93C3F] py-3 font-semibold text-white">
            Leave Review
          </button>
        )}

        {booking.status === "DECLINED" && (
          <div className="rounded-xl bg-red-500/10 p-3 text-center text-red-400">
            Booking Declined
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingCard;
