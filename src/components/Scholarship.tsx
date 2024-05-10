import React from 'react'
interface ScholarshipProps{
    title:string,
    company:string,
    apply:string,
    end:string
}
const Scholarship = ({title,company,apply,end}:ScholarshipProps) => {
  return (
        <div>
      <div className='flex bg-dark-3 flex-col justify-between p-5 h-60 w-50 rounded-[14px]'>
              <h2 className="glassmorphism max-w-[240px] rounded py-2 text-center text-base font-normal">
                {apply} to {end}
              </h2>
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-extrabold lg:text-4xl text-white">{title}</h1>
                <div className='flex flex-row justify-between'>
                    <p className="text-lg font-medium text-sky-1 lg:text-2xl">{company}</p>
                </div>
              </div>
        </div>
        </div>
  )
}

export default Scholarship
