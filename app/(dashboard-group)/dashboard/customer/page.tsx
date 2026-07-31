import { getMyBookingsAction } from "./_action/getMyBookingsAction";
import BookingGrid from "./_components/BookingGrid";

const CustomerDashboard = async () => {
  const result = await getMyBookingsAction();

  const bookings = result.data.getMyBooking;

  return (
    <section className="space-y-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="py-3 text-center">
          <h1 className="text-4xl font-bold text-white">My Bookings</h1>

          <p className="mt-2 text-gray-400">
            Track all your bookings and payment status.
          </p>
        </div>

        <div className="mt-5">
          <BookingGrid bookings={bookings} />
        </div>
      </div>
    </section>
  );
};

export default CustomerDashboard;
