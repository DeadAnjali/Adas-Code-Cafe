"use client"
import { useQuery } from 'convex/react';
import React from 'react'
import { api } from '../../../../../convex/_generated/api';
import Scholarship from '@/components/Scholarship';

const scholarship = () => {
  const data=useQuery(api.getscholarship.get);
  if(data==undefined){
    return <div className='text-white'>
      I am loading
    </div>
  }
  return (
    <div>
      <section className="grid grid-cols-3 gap-3 md:grid-cols-2 xl:grid-cols-2">
      {data.map((item) => {
          return (
            <Scholarship
            title={item.title}
            company={item.company}
            apply={item.appliDate}
            end={item.endDate}
            />
          );
        })}
        </section>
    </div>
  )
}

export default scholarship
