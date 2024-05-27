import Breadcrumb from '@/components/flightDetails/Breadcrumb.Component';
import FlightCard from '@/components/flightDetails/FlightCard.Component';

export default function Home() {
  return (
    <main>
      <div className='container grid grid-cols-12 mt-4 gap-6'>
        <aside className='col-span-3 bg-white rounded-primary'></aside>
        <section className='col-span-9'>
          <Breadcrumb />
          <FlightCard />
        </section>
      </div>
    </main>
  );
}
