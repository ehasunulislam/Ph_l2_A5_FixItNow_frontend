import { getTechnicianBookingsAction } from "../_action/getTechnicianBookingsAction";
import BookingList from "../_components/BookingList";


const TechnicianBookingsPage = async () => {
  const result =
    await getTechnicianBookingsAction();

  return (
    <section className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-9">
        <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
                Incoming Bookings
            </h1>

            <p className="mt-2 text-gray-400">
                Review and manage booking requests.
            </p>
        </div>
      </div>

      <BookingList
        bookings={result.data}
      />
    </section>
  );
};

export default TechnicianBookingsPage;