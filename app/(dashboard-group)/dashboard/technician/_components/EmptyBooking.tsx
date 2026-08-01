const EmptyBooking = () => {
  return (
    <div className="rounded-2xl border border-dashed border-white/10 py-20 text-center">
      <h2 className="text-2xl font-semibold text-white">
        No Bookings Yet
      </h2>

      <p className="mt-2 text-gray-400">
        Incoming customer requests will appear here.
      </p>
    </div>
  );
};

export default EmptyBooking;