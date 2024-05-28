import React from 'react';

const FlightCardHeader = () => {
  return (
    <div className='flex items-center justify-between gap-x-3 border-b border-[#ebf0f5] px-5 py-4'>
      <div className='flex items-center gap-4'>
        <div className='flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white'>
          1
        </div>
        <div>
          <div className='text-lg font-semibold text-primary-black'>DAC → JFK</div>
          <ul className='flex flex-wrap items-center gap-primary text-theme-13 leading-4 text-dark-light'>
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
      <div className='shrink-0 rounded-[32px] bg-[#E8F3FF] px-2 py-1 text-xs font-medium text-primary'>33h 20m</div>
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
