import { getAvailabilityAction } from "../_action/getAvailabilityAction";
import AvailabilityForm from "./AvailabilityForm";
import AvailabilityList from "./AvailabilityList";

const AvailabilitySection = async () => {
  const result = await getAvailabilityAction();
  console.log(result);

  const availability = result.data.availability;

  return (
    <section className="space-y-10">

      <div>
        <h2 className="text-3xl font-bold text-white">
          My Availability
        </h2>

        <p className="text-gray-400 mt-2">
          Create and manage your available time slots.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-1">
          <AvailabilityForm />
        </div>

        <div className="lg:col-span-2">
          <AvailabilityList
            availability={availability}
          />
        </div>

      </div>

    </section>
  );
};

export default AvailabilitySection;