"use client";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Booking {
  id: string;
  customer: {
    name: string;
  };
  technicianProfile: {
    user: {
      name: string;
    };
  };
  service: {
    title: string;
    price: number;
  };
  bookingDate: string;
  status: "REQUESTED" | "ACCEPTED" | "PAID" | "IN_PROGRESS" | "COMPLETED" | "DECLINED" | string;
  payment?: {
    status: string;
    amount: number;
  } | null;
}

interface Props {
  bookings: Booking[];
}

const statusColor = (status: string) => {
  switch (status) {
    case "REQUESTED":
      return "bg-yellow-500";

    case "ACCEPTED":
      return "bg-blue-500";

    case "PAID":
      return "bg-cyan-500";

    case "IN_PROGRESS":
      return "bg-purple-500";

    case "COMPLETED":
      return "bg-green-600";

    case "DECLINED":
      return "bg-red-600";

    default:
      return "bg-gray-500";
  }
};

const GetAllBookings = ({ bookings }: Props) => {
  return (
    <div className="rounded-xl border border-white/10  p-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-9 text-white">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Booking Management
          </h2>

          <p className="text-sm text-gray-400">
            Total Bookings: {bookings.length}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/10">

        <Table>

          <TableHeader>
            <TableRow className="bg-[#262626]">

              <TableHead className="text-gray-400">Customer</TableHead>

              <TableHead className="text-gray-400">Technician</TableHead>

              <TableHead className="text-gray-400">Service</TableHead>

              <TableHead className="text-gray-400">Date</TableHead>

              <TableHead className="text-gray-400">Status</TableHead>

              <TableHead className="text-gray-400">Payment</TableHead>

              <TableHead className="text-gray-400">Amount</TableHead>

            </TableRow>
          </TableHeader>

          <TableBody>

            {bookings.map((booking) => (
              <TableRow key={booking.id}>

                <TableCell>
                  {booking.customer.name}
                </TableCell>

                <TableCell>
                  {booking.technicianProfile.user.name}
                </TableCell>

                <TableCell>
                  {booking.service.title}
                </TableCell>

                <TableCell>
                  {new Date(
                    booking.bookingDate
                  ).toLocaleDateString()}
                </TableCell>

                <TableCell>
                  <Badge
                    className={statusColor(
                      booking.status
                    )}
                  >
                    {booking.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  {booking.payment
                    ? booking.payment.status
                    : "UNPAID"}
                </TableCell>

                <TableCell>
                  ৳
                  {booking.payment?.amount ??
                    booking.service.price}
                </TableCell>

              </TableRow>
            ))}

          </TableBody>

        </Table>

      </div>

    </div>
  );
};

export default GetAllBookings;