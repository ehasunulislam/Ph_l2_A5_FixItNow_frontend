import { IService } from "@/components/Interface/service.interface";
import { Clock } from "lucide-react";


interface Props {
  service: IService;
}

const ServiceDetailsHero = ({ service }: Props) => {
  return (
    <div className="rounded-2xl bg-[#181818] border border-white/10 p-8">
      <h1 className="text-4xl font-bold text-white">{service.title}</h1>

      <p className="text-gray-400 mt-4">{service.description}</p>

      <div className="flex gap-6 mt-6">
        <div>
          <span className="text-[#C93C3F] text-3xl font-bold">
            ৳{service.price}
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <Clock size={18} />
          {service.duration} Minutes
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsHero;
