import React from 'react';

const Breadcrumb = () => {
  return (
    <ul className='mb-5 flex flex-wrap gap-[6px] text-theme-13 text-dark-light'>
      <li className='flex items-center gap-[6px]'>
        <a href='#' className='duration-300 hover:text-primary'>
          Home
        </a>
        <RightArrow />
      </li>
      <li className='flex items-center gap-[6px]'>
        <a href='#' className='duration-300 hover:text-primary'>
          Booking History
        </a>
        <RightArrow />
      </li>
      <li className='flex items-center gap-[6px]'>
        <a href='#' className='duration-300 hover:text-primary'>
          Flight
        </a>
        <RightArrow />
      </li>
      <li className='flex items-center font-medium text-primary'>STFL17121182045413</li>
    </ul>
  );
};

export default Breadcrumb;

const RightArrow = () => {
  return (
    <svg width={6} height={8} viewBox='0 0 6 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.09305 7.66954C0.892158 7.45588 0.892158 7.10947 1.09305 6.89581L3.81573 4L1.09305 1.10419C0.892158 0.890532 0.892158 0.544119 1.09305 0.330459C1.29393 0.116797 1.61963 0.116797 1.82052 0.330459L4.90694 3.61313C5.10783 3.82679 5.10783 4.17321 4.90694 4.38687L1.82052 7.66954C1.61963 7.8832 1.29393 7.8832 1.09305 7.66954Z'
        fill='#77818C'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.90694 4.38687C5.10783 4.17321 5.10783 3.82679 4.90694 3.61313L1.82052 0.330459C1.61963 0.116797 1.29393 0.116797 1.09305 0.330459C0.892158 0.544119 0.892158 0.890532 1.09305 1.10419L3.81573 4L1.09305 6.89581C0.892158 7.10947 0.892158 7.45588 1.09305 7.66954C1.29393 7.8832 1.61963 7.8832 1.82052 7.66954L4.90694 4.38687ZM3.58614 4L0.975021 6.77716C0.712021 7.05688 0.712021 7.50847 0.975021 7.78819C1.24055 8.0706 1.67302 8.0706 1.93854 7.78819L5.02496 4.50552C5.28797 4.22579 5.28797 3.77421 5.02496 3.49448L1.93854 0.211807C1.67302 -0.0706024 1.24055 -0.0706024 0.975021 0.211807C0.712021 0.49153 0.712021 0.94312 0.975021 1.22284L3.58614 4Z'
        fill='#77818C'
      />
    </svg>
  );
};
