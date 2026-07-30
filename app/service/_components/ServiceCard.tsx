import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Clock } from "lucide-react";

interface Props {
  service: {
    id: string;
    title: string;
    description: string;
    price: string;
    duration: number;

    category: {
      name: string;
      icon: string;
    };

    technicianProfile: {
      experience: number;
      averageRating: string;
      location: string;

      user: {
        id: string;
        name: string;
        profileImage: string;
      };
    };
  };
}

const ServiceCard = ({ service }: Props) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#1d1d1d] transition hover:border-[#C93C3F] text-white">

      <Image
        src={service.technicianProfile.user.profileImage}
        alt={service.title}
        width={500}
        height={250}
        className="h-56 w-full object-cover"
      />

      <div className="space-y-4 p-6">

        <span className="inline-flex rounded-full bg-[#C93C3F]/10 px-3 py-1 text-sm text-[#C93C3F]">
          {service.category.icon} {service.category.name}
        </span>

        <h2 className="text-xl font-bold text-white">
          {service.title}
        </h2>

        <p className="line-clamp-2 text-sm text-gray-400">
          {service.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-300">
          <span>{service.technicianProfile.user.name}</span>

          <span className="flex items-center gap-1">
            <MapPin size={15} />
            {service.technicianProfile.location}
          </span>
        </div>

        <div className="flex items-center justify-between border-y border-white/10 py-4">

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            <span>{service.technicianProfile.averageRating}</span>
          </div>

          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{service.duration} hr</span>
          </div>

          <span className="font-semibold text-[#C93C3F]">
            ৳{service.price}
          </span>
        </div>

        <Link
          href={`/services/${service.id}`}
          className="block rounded-xl bg-[#C93C3F] py-3 text-center font-semibold text-white transition hover:bg-[#b83438]"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;