import AvailabilityCard from "./AvailabilityCard";

interface Availability {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

interface Props {
  availability: Availability[];
}

const AvailabilityList = ({
  availability,
}: Props) => {
  return (
    <div className="space-y-5">

      {availability.length > 0 ? (
        availability.map((slot) => (
          <AvailabilityCard
            key={slot.id}
            slot={slot}
          />
        ))
      ) : (
        <div className="rounded-xl border border-dashed border-white/10 p-10 text-center text-gray-400">
          No availability added.
        </div>
      )}

    </div>
  );
};

export default AvailabilityList;