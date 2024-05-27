import React from 'react';
import FlightCardHeader from '@/components/flightDetails/FlightCardHeader.Component';
import DepartureSingle from '@/components/flightDetails/DepartureSingle.Component';
import DepartureDetailsHead from '@/components/flightDetails/DepartureDetailsHead.Component';

const FlightCard = () => {
  return (
    <div className='rounded-primary bg-white'>
      <FlightCardHeader />

      <div className='py-4'>
        <DepartureSingle
          showWarning={true}
          headBg='bg-[#F5F7FA]'
          leftText='Departure from Dhaka'
          rightText={
            <>
              <span className='font-medium'> Terminal 1:</span> Hazrat Shahjalal International Airport
            </>
          }
        />

        <DepartureSingle
          headBg='bg-[#E8F3FF]'
          leftText='Layover at Dubai: 12 hr 20 min'
          rightText='Dubai International Airport'
        />

        <div className='px-4'>
          <DepartureDetailsHead
            headBg='bg-[#F5F7FA]'
            leftText='Destination at New York'
            rightText={
              <>
                <span className='font-medium'> Terminal 4: </span> John F Kennedy International Airport
              </>
            }
            colorfulMapIcon={true}
          />
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
