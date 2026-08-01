import About from "./About";

interface Props {
  technician: {
    bio: string | null;
    location: string;
    hourlyRate: string;
    experience: string;
    reviews: {
      id: string;
      booking: {
        id: string;
        bookingDate: string;
        address: string;
        status: string;
        note: string;
      };
    }[];
  };
}

const ProfileAbout = ({ technician }: Props) => {
  return (
    <section>
      <About technician={technician} />

      {/* booking section */}
      <div className="mt-10">
        <h2 className="mb-5 text-2xl font-bold text-white">
          Recent Completed Jobs
        </h2>

        <div className="space-y-4">
          {technician.reviews.length > 0 ? (
            technician.reviews.map((review) => (
              <div
                key={review.booking.id}
                className="rounded-xl border border-white/10 p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">
                      Booking #{review.booking.id.slice(0, 8)}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {review.booking.address}
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      {new Date(
                        review.booking.bookingDate,
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-500/15 px-3 py-1 text-sm font-medium text-green-400">
                    {review.booking.status}
                  </span>
                </div>

                {review.booking.note && (
                  <div className="mt-4 rounded-lg bg-[#1b1b1b] p-3">
                    <p className="text-sm text-gray-300">
                      {review.booking.note}
                    </p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-white/10 p-8 text-center text-gray-400">
              No completed jobs yet.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileAbout;
