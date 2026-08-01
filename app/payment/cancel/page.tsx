import Link from "next/link";

const CancelPage = () => {
  return (
    <div className="flex h-[70vh] items-center justify-center">

      <div className="rounded-2xl bg-[#181818] p-10">

        <h1 className="text-3xl font-bold text-red-500">
          Payment Cancelled
        </h1>

        <Link
          href="/dashboard/customer/bookings"
          className="mt-6 inline-block rounded-lg bg-[#C93C3F] px-5 py-3 text-white"
        >
          Back To Bookings
        </Link>

      </div>
    </div>
  );
};

export default CancelPage;