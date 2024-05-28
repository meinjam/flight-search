import React from 'react';
import { cn } from '@/lib/cn';
import DepartureDetailsHead from '@/components/flightDetails/DepartureDetailsHead.Component';

interface DepartureSingleTypes {
  headBg: string;
  showWarning?: boolean;
  leftText: string;
  rightText: string | React.JSX.Element;
  colorfulMapIcon?: boolean;
}

const DepartureSingle = ({ headBg, showWarning, leftText, rightText, colorfulMapIcon }: DepartureSingleTypes) => {
  return (
    <div className='px-3 xs:px-4'>
      <DepartureDetailsHead
        headBg={headBg}
        leftText={leftText}
        rightText={rightText}
        colorfulMapIcon={colorfulMapIcon}
      />
      <div>
        <div className='mt-4 flex items-center gap-3'>
          <div className='grid h-9 w-8 shrink-0 place-content-center'>
            <AirlinesIconSvg />
          </div>
          <div className='grid w-full grid-cols-3 gap-x-3'>
            <div>
              <h5 className='departure-single-title'>DAC - DXB</h5>
              <p className='departure-single-description'>12 hr 20 min</p>
            </div>
            <div>
              <h5 className='departure-single-title'>07:30 PM</h5>
              <p className='departure-single-description'>28 Mar, Friday</p>
            </div>
            <div>
              <h5 className='departure-single-title'>08:50 AM</h5>
              <p className='departure-single-description'>29 Mar, Saturday</p>
            </div>
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='w-8 shrink-0'>
            <div className='flex h-full flex-col items-center justify-between'>
              <div className='mb-3 mt-1 w-[2px] grow rounded bg-[#D8E1EB]'></div>
              <div className='grow-0'>
                <PlaneSvg />
              </div>
              <div className='mb-1 mt-3 w-[2px] grow rounded bg-[#D8E1EB]'></div>
            </div>
          </div>
          <div className={cn('grow', showWarning ? 'pb-4' : '')}>
            <div className='grid grid-cols-3 gap-x-3 py-4'>
              <div className='col-span-1'>
                <h5 className='text-sm font-medium leading-[18px] text-dark-deep'>Turkish Airlines</h5>
                <p className='mt-1 text-sm leading-[18px] text-dark-light'>Flight no : TUR467</p>
              </div>
              <div className='col-span-2'>
                <h5 className='text-sm leading-[18px] text-dark-light'>Airbus Industrie 737-800-738</h5>
                <p className='mt-1 text-sm leading-[18px] text-dark-light'>
                  Class : <span className='font-medium'>ECONOMY-Y (O)</span>
                </p>
              </div>
            </div>
            {showWarning && (
              <div className='flex items-center gap-2 rounded-md border border-[#FFE1C2] bg-[#FFEEDB] px-3 py-2'>
                <div>
                  <WarningSvg />
                </div>
                <p className='text-xs text-dark-deep'>
                  Technical stoppage at Malpensa International Airport (Milano). Before booking this flight please check
                  your visa requirements as per your nationality
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartureSingle;

const WarningSvg = () => (
  <svg width={18} height={18} viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='0.666672' y='0.666656' width='16.6667' height='16.6667' rx='8.33333' fill='#F27D00' />
    <rect x='8.00006' y='4.41666' width={2} height='6.66667' rx={1} fill='white' />
    <rect x='7.90007' y='11.8' width='2.2' height='2.2' rx='1.1' fill='white' />
  </svg>
);

const PlaneSvg = () => (
  <svg width={14} height={14} viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.98925 9.10311L5.98925 12.948C5.98455 13.0875 6.00776 13.2265 6.05745 13.3564C6.10715 13.4864 6.18228 13.6046 6.27823 13.7037C6.37254 13.801 6.4853 13.8774 6.60955 13.9282C6.7338 13.9791 6.86691 14.0034 7.00069 13.9996C7.13446 14.0034 7.26757 13.9791 7.39182 13.9282C7.51607 13.8774 7.62883 13.801 7.72314 13.7037C7.91807 13.5013 8.03254 13.232 8.0443 12.948L8.04362 9.10311L13.5 5.58638V4.20591L8.04362 5.94815L8.04362 2.10331L9.39196 1.05165V0L7.01644 0.689884L4.60872 0V1.05165L5.98925 2.10331L5.98925 5.94815L0.5 4.20661V5.58638L5.98925 9.10311Z'
      fill='#9BA6B2'
    />
  </svg>
);

const AirlinesIconSvg = () => {
  return (
    <svg width={20} height={24} viewBox='0 0 20 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.6339 2.52131C12.5012 2.65602 12.0347 3.34389 12.0347 4.19607C12.0347 4.40009 12.0384 9.28525 12.0347 9.46046C12.0275 9.83217 11.7945 10.3617 11.6025 10.5483C11.4673 10.6802 10.6362 11.4169 10.5624 11.4942L11.0338 11.5015C11.1871 11.3585 12.788 9.97519 12.9555 9.78908C13.1734 9.54768 13.6926 8.93612 13.6926 7.97571L13.6953 2.91741C13.6953 2.15842 14.0582 1.7374 14.2449 1.53415C14.4369 1.32546 15.0677 0.81254 15.1795 0.696511L14.6851 0.682235C14.5655 0.798783 12.7984 2.35336 12.6339 2.52131ZM8.6702 21.664L10.6306 23.3333H11.9434C13.278 23.3333 14.4981 22.7765 15.3031 21.9921C16.1086 21.2066 16.4053 20.152 16.4053 19.1654V16.4289C16.4053 15.5093 15.8122 14.9743 15.6479 14.8139C15.5579 14.7267 14.987 14.2018 14.987 14.2018V16.3012C14.987 16.3012 15.6163 16.9346 15.7406 17.0631C16.3222 17.6653 16.3158 18.7617 14.4747 20.5112C14.1522 20.8173 13.2322 21.664 11.9663 21.664H8.6702Z'
        fill='#C23C40'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.123 10.4333C13.9047 10.6586 13.6951 11.2097 13.6951 11.6954V12.7316H14.7733C15.1919 12.7316 15.7452 12.3596 15.865 12.1629C15.8722 12.1483 15.865 11.1352 15.865 11.1352C15.865 11.1352 16.1417 11.5215 16.4408 11.7255C16.5531 11.5871 17.5344 10.4271 18.3561 10.4206C19.728 10.4097 19.4181 12.0972 18.8576 12.6371C18.676 12.8108 17.8656 13.5355 17.6151 13.7678C16.9669 14.3692 15.8576 14.0814 15.8576 12.5273C15.8576 12.5273 14.667 13.6292 14.4886 13.7751C14.3091 13.921 13.6951 14.5551 13.6951 14.5551V17.2853C13.6951 18.5946 13.2531 19.0338 12.8869 19.4275C12.7444 19.5804 11.232 20.9255 11.0296 21.0714L10.5356 21.0823C10.5356 21.0823 11.4207 20.2979 11.5981 20.1182C11.7999 19.914 12.0351 19.4992 12.0351 18.8087C12.0351 18.6338 12.0127 14.5185 12.0127 14.5185H5.13242C2.73931 14.5185 2.22778 11.9295 2.21287 11.237C2.20914 11.033 2.21287 8.9652 2.21287 8.64436C2.21287 8.21892 1.93353 7.50095 1.48751 7.27953H2.16254C2.24029 7.31146 2.66449 7.4781 2.66449 9.06539C2.66449 9.06539 2.63573 10.9125 2.63573 11.0109C2.63573 11.8156 3.29212 12.7389 4.24063 12.7389L12.0281 12.7316C12.0353 12.5273 12.2444 11.753 12.6185 11.3437C12.8313 11.1129 14.5011 9.62321 14.6921 9.47993L15.1866 9.47448C15.1112 9.54145 14.3036 10.2477 14.123 10.4333ZM16.6799 11.9882C16.6799 11.9882 17.1307 12.5714 17.3456 12.7391C18.1844 13.3951 18.5825 12.6906 18.0196 11.937C17.7969 11.6401 16.9342 11.7257 16.6799 11.9882Z'
        fill='#C23C40'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8.32964 16.8788C8.32964 17.2453 7.12843 18.2182 7.05813 18.2867C6.97132 17.8919 6.66829 17.4558 5.77304 16.5826L7.08742 15.3014C7.96803 16.1611 8.32964 16.3441 8.32964 16.8788ZM10.609 2.19216C10.8727 2.44914 11.4401 3.14635 11.0995 3.47887C10.7989 3.77218 10.3324 4.23734 10.3324 4.23734C10.3089 4.06965 9.87223 3.66602 9.87223 3.66602C9.87223 3.66602 9.87596 4.9034 9.87223 5.05655C9.85732 5.61515 9.64163 5.77452 9.64163 5.77452C9.64163 5.77452 10.7006 6.7988 10.7006 8.11457C10.7006 8.7526 10.7033 9.33949 10.7033 9.46616C10.7033 9.73586 10.6335 9.94456 10.4408 10.1514C10.3457 10.2542 9.36389 11.2157 9.21451 11.3468C8.93012 11.5965 8.63108 11.6383 8.40687 11.6383H4.75636C4.18145 11.6383 3.58976 11.2009 3.58976 10.7635C3.58976 10.6542 3.59722 9.44384 3.59722 9.44384C3.78442 9.65539 3.97481 9.90251 4.43495 9.89602C4.79417 9.89056 5.17176 9.61542 5.27269 9.51704C5.37734 9.41399 8.03407 6.70665 8.03407 6.70665C8.03407 6.70665 6.78971 5.58218 5.97009 5.04798C5.57013 4.78659 5.03889 5.11651 4.95874 5.45992C4.70736 6.53689 4.95874 8.15247 4.95874 8.15247L3.95085 7.17232C3.54529 6.77596 3.55994 5.87939 4.04351 5.40801C4.1202 5.33299 4.85675 4.52131 5.79248 4.52131H7.24986C8.22766 4.52131 9.29706 5.47082 9.29706 5.47082C9.29706 5.47082 9.45417 5.30314 9.45417 5.14091C9.45417 4.65239 9.43553 3.3348 9.43553 3.3348C8.69978 2.61786 8.59966 1.87782 8.95222 1.53415C9.61047 0.892744 9.8496 0.666656 9.8496 0.666656C9.8496 0.666656 9.84161 1.44485 10.609 2.19216ZM6.0292 9.34183C5.66945 9.70913 5.60688 9.80101 5.27029 9.99777H9.38147C10.4956 9.99777 10.2741 9.3234 10.0743 8.98362C9.66453 8.28641 8.37092 6.99088 8.37092 6.99088C8.37092 6.99088 6.10403 9.26422 6.0292 9.34183Z'
        fill='#C23C40'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.34142 12.9896H0.666656C0.666656 12.9896 1.39175 13.3779 1.39175 14.3793V17.5778C1.39175 19.6593 3.15296 21.5838 5.29283 21.5838H7.08014C8.15327 21.5838 8.52979 21.3304 9.17847 20.7692C9.41626 20.5631 9.72542 20.2249 9.83859 20.1021C10.2127 19.6941 10.6105 19.3642 10.6105 18.2924V17.2455C10.6105 16.3407 10.0732 15.964 9.81329 15.711C9.64686 15.5487 9.18965 15.1228 9.18965 15.1228V17.2671C9.18965 17.2671 9.64021 17.7348 9.83859 17.8869C10.7666 18.6013 10.0279 19.8415 9.16728 19.8415C8.99526 19.8415 5.48136 19.8426 5.24197 19.8485C3.79657 19.8836 1.84284 18.6267 1.84284 16.5136V14.7757C1.8431 12.9896 1.34142 12.9896 1.34142 12.9896Z'
        fill='#C23C40'
      />
    </svg>
  );
};
