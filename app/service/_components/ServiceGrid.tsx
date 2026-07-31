import { getAllServicesAction } from "../_action/getAllServicesAction";
import ServiceCard from "./ServiceCard";

interface IService {
  id: string;
  technicianProfileId: string;
  categoryId: string;
  title: string;
  description: string;
  price: string;
  duration: number;

  category: {
    id: string;
    name: string;
    slug: string;
    icon: string;
    description: string;
  };

  technicianProfile: {
    id: string;
    experience: number;
    hourlyRate: string;
    location: string;
    averageRating: string;
    totalReviews: number;
    isVerified: boolean;

    user: {
      id: string;
      name: string;
      profileImage: string;
      address: string;
    };

    availability: {
      id: string;
      date: string;
      startTime: string;
      endTime: string;
      isBooked: boolean;
    }[];
  };
}

const ServiceGrid = async () => {
  const result = await getAllServicesAction();

  const services: IService[] = result.data.services.data;

  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}
      </div>
    </section>
  );
};

export default ServiceGrid;