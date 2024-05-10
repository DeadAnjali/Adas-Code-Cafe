'use client';

interface EventProps {
  className?: string;
  title: string;
  endDate: string;
}

const Event = ({ className, title, endDate}: EventProps) => {
  return (
    <div className='bg-dark-1 rounded-[14px] p-4 flex justify-between'>
        <div>{title}</div>
        <div>{endDate}</div>
    </div>
  );
};

export default Event;