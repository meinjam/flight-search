import React from 'react';

const FlightCardHeader = () => {
  return (
    <div className='px-5 py-4 border-b border-[#ebf0f5] flex justify-between items-center'>
      <div className='flex items-center gap-4'>
        <div className='size-6 bg-primary rounded-full text-white flex items-center justify-center text-sm font-semibold'>
          1
        </div>
        <div>
          <div className='text-primary-black font-semibold text-lg'>DAC → JFK</div>
          <ul className='flex items-center text-theme-13 leading-4 text-dark-light gap-primary'>
            <li className='flex items-center gap-primary'>
              Round Trip <DotSvg />
            </li>
            <li className='flex items-center gap-primary'>
              25 Mar - 4 Apr 2023 <DotSvg />
            </li>
            <li>1 Stop</li>
          </ul>
        </div>
      </div>
      <div className='bg-[#E8F3FF] text-xs px-2 py-1 text-primary rounded-[32px] font-medium'>33h 20m</div>
    </div>
  );
};

export default FlightCardHeader;

const DotSvg = () => {
  return (
    <svg width={3} height={4} viewBox='0 0 3 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='1.5' cy={2} r='1.5' fill='#9BA6B2' />
    </svg>
  );
};
