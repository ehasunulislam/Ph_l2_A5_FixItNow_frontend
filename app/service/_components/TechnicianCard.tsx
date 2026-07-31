import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { ITechnicianProfile } from "@/components/Interface/service.interface";

interface Props {
  technician: ITechnicianProfile;
}

const TechnicianCard = ({ technician }: Props) => {
  return (
    <div className="rounded-2xl bg-[#181818] border border-white/10 p-8">
      <h2 className="text-2xl font-semibold text-white mb-8">Technician</h2>

      <div className="flex gap-5">
        <Image
          src={technician.user.profileImage}
          alt="technecian profile image"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="text-2xl text-white font-semibold">
            {technician.user.name}
          </h3>

          <p className="mt-3 flex gap-2 text-gray-400">
            <Phone size={18} />

            {technician.user.phone}
          </p>

          <p className="mt-2 flex gap-2 text-gray-400">
            <MapPin size={18} />

            {technician.user.address}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <section>
            <h3 className="font-bold text-white">Bio:</h3>
            <p className="mt-3 flex gap-2 text-gray-400">{technician.bio}</p>
        </section>

        <section className="pt-3">
            <h3 className="font-bold text-white">Exprerience:</h3>
            <p className="mt-3 flex gap-2 text-gray-400">{technician.experience} years</p>
        </section>

        <section className="pt-3">
            <h3 className="font-bold text-white">Total Review:</h3>
            <p className="mt-3 flex gap-2 text-gray-400">{technician.totalReviews}</p>
        </section>
      </div>
    </div>
  );
};

export default TechnicianCard;
