'use client'
//the pathname function can only be used on client side
import React, { useState } from 'react'
import { sidebarLinks } from '../../constants'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import {cn} from '@/lib/utils'
import Image from 'next/image'; 
import axios from 'axios'
import { toast } from 'react-toastify'

const Sidebar = () => {
    const pathname =usePathname();//checks which route we currently are on
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between bg-dark-2 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <div className='flex flex-1 flex-col gap-6'>
            {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn(
                'flex gap-2 items-center p-4 rounded-lg justify-start',
                {
                  'bg-blue-1': isActive,
                }
              )}
            >
              <Image
                src={item.imgurl}
                alt={item.label}
                width={24}
                height={24}
              />
              <p className="font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
        <button
        onClick={logout}
        className="bg-blue-700 mt-0 hover:bg-blue-900 text-white font-bold py-2 px-4 mt-0 rounded"
        >Logout</button>
        </div> 
    </section>
  )
}

export default Sidebar
