import { IBooking } from "@/components/Interface/booking.interface";
import BookingCard from "./BookingCard";

interface Props{
    bookings: IBooking[];
}

const BookingGrid = ({bookings}:Props) => {
    return(
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {bookings.map((booking)=>(
                <BookingCard
                    key={booking.id}
                    booking={booking}
                />
            ))}
        </div>
    )
}

export default BookingGrid;