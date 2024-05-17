"use client"
import { useQuery } from 'convex/react'
import React, { useEffect, useState } from 'react'
import { api } from '../../../../../convex/_generated/api'
import { LoaderIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Register from '@/components/Register'
import Event from '@/components/eventRow'

const Upcoming = () => {
  const data=useQuery(api.events.get);
  
  //testing out leetcode api
  // async function getleetcode(username:string){
  //   const leetcode=await fetch(`https://leetcodestats.cyclic.app/${username}`);
  //   console.log(leetcode);
  //   return leetcode;
  // }
  // getleetcode("anjalimahere15");
  //testing out leetcode api

  if(data==undefined){
    return <div className='text-white'>
      I am loading
    </div>
  }
  const n=data.length;
  return (
    <section className="flex size-full flex-col gap-3 text-white ">
      <div className='flex flex-row gap-3'>
        <div className='flex basis-1/2 bg-dark-3 flex-col justify-between p-5 h-60 rounded-[14px]'>
              <h2 className="glassmorphism max-w-[240px] rounded py-2 text-center text-base font-normal">
                {data[0].launchDate} to {data[0].endDate}
              </h2>
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-extrabold lg:text-5xl">{data[0].title}</h1>
                <div className='flex flex-row justify-between'>
                    <p className="text-lg font-medium text-sky-1 lg:text-2xl">{data[0].domain}</p>
                    <Register/>
                </div>
                
              </div>
              
        </div>
        <div className='flex basis-1/2 flex-col gap-3'>
              <div className='flex basis-1/2  flex-row gap-x-3'>
                  <div className='flex basis-1/2 bg-dark-4 rounded-[14px] '>
                    dsjcbjsdcn
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
      <h1 className="text-lg font-medium text-sky-1 lg:text-2xl p-4">All Events</h1>
      {data.map((item) => {
          
          return (
            <Event
            title={item.title}
            endDate={item.endDate}
             />
          );
        })}
    </section>
  )
}

export default Upcoming
