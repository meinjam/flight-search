import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex min-h-[90vh] items-center justify-center overflow-hidden bg-[#ebf0f5]'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-8 offset-sm-2 -mt-32 text-center text-gray-50'>
            <div className='relative'>
              <h1
                className='relative text-9xl font-bold tracking-tighter text-primary'
                style={{ textShadow: '-8px 0 0 #0069e4' }}
              >
                <span>4</span>
                <span>0</span>
                <span>4</span>
              </h1>
              <span className='absolute top-0 -ml-12 font-semibold text-dark-light'>Oops!</span>
            </div>
            <h5 className='-mr-10 -mt-3 font-semibold text-dark-light'>Page not found</h5>
            <p className='mb-6 mt-2 text-dark-light'>we are sorry, but the page you requested was not found</p>
            <Link
              href='/'
              className='text-md rounded-[32px] bg-primary px-5 py-2 font-medium text-white duration-300 hover:bg-[#0070F5]'
            >
              Got to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
