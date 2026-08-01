import { ITechnicianBooking } from "@/components/Interface/technician-booking.interface";
import TechnicianBookingCard from "./TechnicianBookingCard";
import EmptyBooking from "./EmptyBooking";


interface Props {
  bookings: ITechnicianBooking[];
}

const BookingList = ({
  bookings,
}: Props) => {
  if (!bookings.length) {
    return <EmptyBooking />;
  }

  return (
    <div className="grid gap-6">
      {bookings.map((booking) => (
        <TechnicianBookingCard
          key={booking.id}
          booking={booking}
        />
      ))}
    </div>
  );
};

export default BookingList;