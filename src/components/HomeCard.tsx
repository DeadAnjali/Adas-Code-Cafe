'use client';

import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[200px] rounded-[14px] cursor-pointer pb-0',
        className
      )}
      onClick={handleClick}>

      <div className="flex flex-col gap-2 mb-10 p-0 mt-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;