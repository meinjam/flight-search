import Breadcrumb from '@/components/flightDetails/Breadcrumb.Component';
import FlightCard from '@/components/flightDetails/FlightCard.Component';

function Home() {
  return (
    <main>
      <div className='container grid grid-cols-12 mt-4 gap-6'>
        <aside className='col-span-3 bg-white rounded-primary hidden md:block'></aside>
        <section className='col-span-12 md:col-span-9'>
          <Breadcrumb />
          <FlightCard />
        </section>
      </div>
    </main>
  );
}

export default Home;
