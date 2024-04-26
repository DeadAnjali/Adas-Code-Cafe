import React from 'react'
import {AdminEvent} from '@/components/AdminEventCard'
import { checkRole } from '@/utils/roles';
import { redirect } from 'next/navigation';

const Event = () => {
  if (!checkRole("admin")) {
    redirect("/");
  } 
  return (
    <section className="flex size-full flex-col gap-3 text-white ">
      <div className='bg-dark-4 rounded-[14px] h-60 p-5 justify-centre'>
        fhjbsjv
      </div>
      <div className='flex flex-row gap-3'>
        <div className='flex basis-1/3 bg-dark-3 flex-col justify-between p-5 h-28 rounded-[14px]'>
              jahdbjabfj
        </div>
        <div className='flex basis-1/3 bg-dark-3 flex-col justify-between p-5 h-28 rounded-[14px]'>
          fhsdjgbjsdbjkzdnj
        </div>
        <div className='flex basis-1/3 bg-dark-3 flex-col justify-between p-5 h-28 rounded-[14px]'>
          fhsdjgbjsdbjkzdnj
        </div>
      </div>
      
    </section>
  )
}

export default Event
