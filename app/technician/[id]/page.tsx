import React from 'react'
import { getTechnicianById } from '../_action/getTechnicianById';
import ProfileHeader from '../_components/Proifle/ProfileHeader';

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
    </div>
  )
}

export default technicianProfilePage
