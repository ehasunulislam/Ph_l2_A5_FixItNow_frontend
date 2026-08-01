"use client"

import React, { useState } from "react";
import { BadgeDollarSign, MapPin, PenLine } from "lucide-react";
import EditProfileModal from "./EditProfileModal";

interface Props {
  technician: {
    bio: string | null;
    location: string;
    hourlyRate: string;
    experience: string;
  };
}

const About = ({ technician }: Props) => {

  const [open, setOpen] = useState(false); 

  return (
    <div>
      {/* about section */}
      <div className="rounded-2xl border border-white/10 p-6 text-white">
        <div className="flex justify-between items-center">
          <h2 className="mb-6 text-2xl font-bold">About</h2>

          <div className="p-2 rounded-full border-2 cursor-pointer edit-btn" onClick={() => setOpen(true)}>
            <PenLine size={15} />
          </div>

          <EditProfileModal
                open={open}
                setOpen={setOpen}
                technician={technician}
          />
        </div>

        <p className="leading-8 text-gray-300">
          {technician.bio || "This technician hasn't added a bio yet."}
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
              <p className="font-semibold">৳{technician.hourlyRate}/hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
