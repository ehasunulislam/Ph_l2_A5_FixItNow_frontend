interface Props {
  status: string;
}

const BookingStatusBadge = ({
  status,
}: Props) => {
  const colors = {
    REQUESTED:
      "bg-yellow-500/20 text-yellow-400",

    ACCEPTED:
      "bg-blue-500/20 text-blue-400",

    DECLINED:
      "bg-red-500/20 text-red-400",

    PAID:
      "bg-green-500/20 text-green-400",

    COMPLETED:
      "bg-emerald-500/20 text-emerald-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        colors[
          status as keyof typeof colors
        ]
      }`}
    >
      {status}
    </span>
  );
};

export default BookingStatusBadge;