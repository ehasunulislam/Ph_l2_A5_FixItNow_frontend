import React from 'react'
import { getTechnicianById } from '../_action/getTechnicianById';
import ProfileHeader from '../_components/Proifle/ProfileHeader';
import ProfileAbout from '../_components/Proifle/ProfileAbout';
import ProfileReview from '../_components/Proifle/ProfileReview';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const technicianProfilePage = async({params} : Props) => {
    const { id } = await params;
    const technician = await getTechnicianById(id);

  return (
    <div className='bg-[#181818] py-16 md:py-24'>
      <ProfileHeader technician={technician} />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                <ProfileAbout technician={technician} />
                </div>

                <div className="flex-1">
                <ProfileReview technician={technician} />
                </div>
            </div>
        </section>

    </div>
  )
}

export default technicianProfilePage
