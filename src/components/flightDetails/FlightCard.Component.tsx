import React from 'react';
import FlightCardHeader from '@/components/flightDetails/FlightCardHeader.Component';
import DepartureSingle from './DepartureSingle.Component';
import DepartureDetailsHead from './DepartureDetailsHead.Component';

const FlightCard = () => {
  return (
    <div className='rounded-primary bg-white'>
      <FlightCardHeader />

      <div className='py-4'>
        <DepartureSingle
          showWarning={true}
          headBg='#F5F7FA'
          leftText='Departure from Dhaka'
          rightText={
            <>
              <span className='font-medium'> Terminal 1:</span> Hazrat Shahjalal International Airport
            </>
          }
        />

        <DepartureSingle
          headBg='#E8F3FF'
          leftText='Layover at Dubai: 12 hr 20 min'
          rightText='Dubai International Airport'
        />

        <div className='px-4'>
          <DepartureDetailsHead
            headBg='#F5F7FA'
            leftText='Destination at New York'
            rightText={
              <>
                <span className='font-medium'> Terminal 4: </span> John F Kennedy International Airport
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
