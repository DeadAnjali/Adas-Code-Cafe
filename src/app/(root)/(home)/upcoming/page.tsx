"use client"
import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '../../../../../convex/_generated/api'

const Upcoming = () => {
  const domain="NEXT";
  const data=useQuery(api.events.get,{domain})
  return (
    <section className="flex size-full flex-col gap-3 text-white ">
      <div className='flex flex-row gap-3'>
        <div className='flex basis-1/2 bg-dark-3 flex-col justify-between p-5 h-60 rounded-[14px]'>
              <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
                Upcoming Meeting at: 12:30 PM
              </h2>
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-extrabold lg:text-7xl">time</h1>
                <p className="text-lg font-medium text-sky-1 lg:text-2xl">date</p>
              </div>
        </div>
        <div className='flex basis-1/2 flex-col gap-3'>
              <div className='flex basis-1/2  flex-row gap-x-3'>
                  <div className='flex basis-1/2 bg-dark-4 rounded-[14px] '>
                    ghjk
                  </div>
                  <div className='flex basis-1/2 bg-dark-4 rounded-[14px]'>
                    fghj
                  </div>
              </div>
              <div className='flex basis-1/2 bg-dark-4 rounded-[14px]'>
                asdghabj
              </div>
        </div>
      </div>
      <div className='bg-dark-4 rounded-[14px]'>
        fhjbsjv
      </div>
    </section>
  )
}

export default Upcoming
