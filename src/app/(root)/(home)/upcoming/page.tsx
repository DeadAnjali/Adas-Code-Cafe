"use client"
import { useQuery } from 'convex/react'
import React from 'react'
import { api } from '../../../../../convex/_generated/api'

const Upcoming = () => {
  const domain="NEXT";
  const data=useQuery(api.events.get,{domain})
  return (
    <section className="flex size-full flex-col gap-3 text-white">
      <div>
        Upcoming
        {JSON.stringify(data)}
      </div>
    </section>
  )
}

export default Upcoming
