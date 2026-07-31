import { getServiceByIdAction } from "../_action/getSingleServiceAction";
import BookingCard from "../_components/BookingCard";
import ServiceDetailsHero from "../_components/ServiceDetailsHero";
import TechnicianCard from "../_components/TechnicianCard";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const ServiceDetailsPage = async ({ params }: Props) => {
  const { id } = await params;

  const result = await getServiceByIdAction(id);

  const service = result.data;

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <ServiceDetailsHero service={service} />

      <div className="grid lg:grid-cols-3 gap-8 mt-10">
        <div className="lg:col-span-2">
          <TechnicianCard technician={service.technicianProfile} />
        </div>

        <BookingCard service={service} />
      </div>
    </section>
  );
};

export default ServiceDetailsPage;
