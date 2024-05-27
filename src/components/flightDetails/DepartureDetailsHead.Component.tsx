import { cn } from '@/lib/cn';
import React from 'react';

interface DepartureDetailsHeadType {
  headBg: string;
  leftText: string;
  rightText: string | React.JSX.Element;
  colorfulMapIcon?: boolean;
}

const DepartureDetailsHead = ({ headBg, leftText, rightText, colorfulMapIcon }: DepartureDetailsHeadType) => {
  return (
    <div className='flex items-center gap-3 my-[2px]'>
      <div className='w-8 h-9 grid place-content-center shrink-0'>
        <LocationSvg colorfulMapIcon={colorfulMapIcon} />
      </div>
      <div className={cn('grow text-theme-13 flex justify-between items-center rounded-md px-4 py-3', headBg)}>
        <div className='font-medium text-primary-black'>{leftText}</div>
        <div className='text-dark-light'>{rightText}</div>
      </div>
    </div>
  );
};

export default DepartureDetailsHead;

const LocationSvg = ({ colorfulMapIcon }: { colorfulMapIcon?: boolean }) => (
  <svg
    className={cn(!colorfulMapIcon ? 'fill-[#9BA6B2]' : 'fill-primary')}
    width={14}
    height={20}
    viewBox='0 0 14 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <ellipse opacity='0.5' cx={7} cy={18} rx={4} ry={2} fill='#9BA6B2' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.00377 0C10.7135 0.0180664 13.75 3.14514 13.75 7C13.75 9.18384 12.805 11.3662 11.5846 12.8939L11.4998 13L7.55324 17.7051C7.53394 17.7295 7.51369 17.7527 7.4925 17.7744C7.47414 17.7932 7.45531 17.811 7.43553 17.8278C7.39127 17.8654 7.34419 17.8975 7.29428 17.9233C7.27968 17.9312 7.26461 17.9385 7.24908 17.9451L7.218 17.9575L7.18504 17.9691C7.12054 17.9896 7.05462 18 6.98823 18C6.88323 18 6.77917 17.974 6.68218 17.9233C6.58519 17.8727 6.49714 17.7986 6.42322 17.7051L2.50016 13L2.40081 12.8755C1.18227 11.3513 0.25 9.18445 0.25 7C0.25 3.13403 3.27187 0 7.00377 0ZM7 9C8.5533 9 9.8125 7.7408 9.8125 6.1875C9.8125 4.6342 8.5533 3.375 7 3.375C5.4467 3.375 4.1875 4.6342 4.1875 6.1875C4.1875 7.7408 5.4467 9 7 9Z'
      fill=''
    />
  </svg>
);
