import { BadgeDollarSign, MapPin } from 'lucide-react';
import React from 'react'

interface Props {
  technician: {
    bio: string | null;
    location: string;
    hourlyRate: string;
  };
}

const ProfileAbout = ({ technician }: Props) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="rounded-2xl border border-white/10 p-6 text-white max-w-2xl">
        <h2 className="mb-6 text-2xl font-bold">About</h2>

        <p className="leading-8 text-gray-300">
          {technician.bio ||
            "This technician hasn't added a bio yet."}
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">

          <div className="flex items-center gap-3 rounded-xl bg-[#262626] p-4">
            <MapPin className="text-[#C93C3F]" />
            <div>
              <p className="text-sm text-gray-400">Service Location</p>
              <p className="font-semibold">
                {technician.location || "Not specified"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-[#262626] p-4">
            <BadgeDollarSign className="text-[#C93C3F]" />
            <div>
              <p className="text-sm text-gray-400">Hourly Rate</p>
              <p className="font-semibold">
                ৳{technician.hourlyRate}/hour
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileAbout;
