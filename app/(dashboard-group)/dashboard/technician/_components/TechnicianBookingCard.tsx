import { format } from "date-fns";
import { Calendar, Clock, MapPin, Phone } from "lucide-react";

import { ITechnicianBooking } from "@/components/Interface/technician-booking.interface";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import BookingStatusBadge from "./BookingStatusBadge";

interface Props {
  booking: ITechnicianBooking;
}

const TechnicianBookingCard = ({ booking }: Props) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#181818] p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10 border border-white/10">
              <AvatarImage src={booking.customer.profileImage || ""} />
            </Avatar>

          <div>
            <h3 className="text-xl font-semibold text-white">
              {booking.customer.name}
            </h3>

            <p className="text-sm text-gray-400">{booking.customer.email}</p>
          </div>
        </div>

        <BookingStatusBadge status={booking.status} />
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <div>
          <p className="font-semibold text-white">
            {booking.service.category.icon} {booking.service.title}
          </p>

          <p className="mt-2 text-gray-400">৳{booking.service.price}</p>
        </div>

        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar size={16} />

            {format(new Date(booking.bookingDate), "dd MMM yyyy")}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={16} />
            {booking.availability.startTime} -{booking.availability.endTime}
          </div>

          <div className="flex items-center gap-2">
            <Phone size={16} />

            {booking.customer.phone}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />

            {booking.address}
          </div>
        </div>
      </div>

      {booking.note && (
        <div className="mt-5 rounded-xl bg-white/5 p-4">
          <p className="text-sm text-gray-400">Customer Note</p>

          <p className="mt-2 text-white">{booking.note}</p>
        </div>
      )}
    </div>
  );
};

export default TechnicianBookingCard;
