"use client"
import React, { useEffect, useState } from 'react'
//this shit is renderingggggggggggg
import MeetingTypeList from '@/components/MeetingTypeList'
import axios from 'axios';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);
  //getting information of the current login user
  const [user, setUser] = useState("nothing");


  const getUserDetails = async () => {
    const res = await axios.get('api/users/me')
    console.log("Check up",res);
    setUser(res.data.data.name)
  }

  useEffect(()=>{
    getUserDetails();
  },[]);
  
  return (
    <section className="flex size-full flex-col gap-3 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-3 max-md:py-5 lg:p-8">
          
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
            Hello {user}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList/>
    </section>
  )
}

export default Home
