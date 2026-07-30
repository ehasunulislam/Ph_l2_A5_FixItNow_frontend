import { Button } from '@/components/ui/button';
import { BadgeCheck, MapPin } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

interface Props {
  technician: {
    user: {
      profileImage: string;
      name: string;
      address: string;
    };
    isVerified: boolean;
    averageRating: number;
    totalReviews: number;
    experience: number;
  };
}


const ProfileHeader = ({ technician }: Props) => {
  return (
    <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:-mt-16 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end">
            <Image
              src={technician.user.profileImage}
              alt={technician.user.name}
              width={170}
              height={170}
              className="h-42.5 w-42.5 rounded-full border-4 border-[#181818] object-cover shadow-xl"
            />

            <div className="pb-3">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-white">
                  {technician.user.name}
                </h1>

                {technician.isVerified && (
                  <BadgeCheck
                    size={22}
                    className="fill-sky-500 text-sky-500"
                  />
                )}
              </div>

              <p className="mt-2 text-gray-300">
                Worker in Fixit-now
              </p>

              <div className="mt-3 flex flex-wrap gap-5 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {technician.user.address}
                </div>

                <div>
                  ⭐ {Number(technician.averageRating).toFixed(1)}
                </div>

                <div>
                  {technician.totalReviews} Reviews
                </div>

                <div>
                  {technician.experience} Years Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="pb-4">
            <Button className="h-12 rounded-xl bg-[#C93C3F] px-8 text-base hover:bg-[#b13336]">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfileHeader
