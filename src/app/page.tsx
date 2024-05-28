import Breadcrumb from '@/components/flightDetails/Breadcrumb.Component';
import FlightCard from '@/components/flightDetails/FlightCard.Component';

function Home() {
  return (
    <main>
      <div className='container mt-4 grid grid-cols-12 gap-6'>
        <aside className='col-span-3 hidden rounded-primary bg-white md:block'></aside>
        <section className='col-span-12 md:col-span-9'>
          <Breadcrumb />
          <FlightCard />
        </section>
      </div>
    </main>
  );
}

export default Home;
