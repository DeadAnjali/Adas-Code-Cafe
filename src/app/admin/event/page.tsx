import React from 'react'
import {AdminEvent} from '@/components/AdminEventCard'
import { checkRole } from '@/utils/roles';
import { redirect } from 'next/navigation';
import { DialogDemo } from '@/components/AddEvent';
import AddScholarship from '@/components/AddScholarship';

const Event = () => {
  if (!checkRole("admin")) {
    redirect("/");
  } 
  return (
    <section className="flex size-full flex-col gap-3 text-white ">
      <div className='bg-dark-4 rounded-[14px] h-60 p-5 justify-centre'>
      </div>
      <div className='flex flex-row gap-3'>
        <div className='flex basis-1/3 bg-pink-3 flex-col justify-between p-5 h-20 rounded-[14px] justify-center items-center'>
              <DialogDemo/>
        </div>
        <div className='flex basis-1/3 bg-sky-1 flex-col justify-between p-5 h-20 rounded-[14px]'>
          fhsdjgbjsdbjkzdnj
        </div>
        <div className='flex basis-1/3 bg-pink-3 flex-col justify-between p-5 h-20 rounded-[14px]'>
          <AddScholarship/>
        </div>
      </div>
      
    </section>
  )
}

export default Event
