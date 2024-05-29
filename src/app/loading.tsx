import React from 'react';

const Loading = () => {
  return (
    <main>
      <div className='container mt-4 grid grid-cols-12 gap-6'>
        <aside className='col-span-3 hidden h-full w-full space-y-4 rounded-primary bg-white p-3 xs:p-4 md:block'>
          {Array.from({ length: 6 })
            .fill(0)
            .map((data, i) => (
              <div key={i} className='h-20 w-full animate-pulse rounded-md bg-slate-200'></div>
            ))}
        </aside>
        <section className='col-span-12 md:col-span-9'>
          <div className='h-full w-full space-y-4 rounded-primary bg-white p-3 xs:p-4'>
            {Array.from({ length: 6 })
              .fill(0)
              .map((data, i) => (
                <div key={i} className='h-20 w-full animate-pulse rounded-md bg-slate-200'></div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Loading;
