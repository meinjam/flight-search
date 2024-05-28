import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className='relative bg-white py-2 xs:py-3'>
      <nav>
        <div className='container flex items-center justify-center gap-x-5 xs:justify-between'>
          <div className='w-32 xs:w-36'>
            <Link href='/'>
              <MainLogo />
            </Link>
          </div>
          <ul className='hidden items-center gap-x-10 text-sm font-medium text-dark-light xs:flex'>
            <li>
              <a href='#'>Flight</a>
            </li>
            <li>
              <a href='#'>Hotel</a>
            </li>
            <li>
              <a href='#'>Hoilday</a>
            </li>
          </ul>
          <div className='hidden xs:block'>
            <a href='#' className='text-md rounded-[32px] bg-primary px-5 py-2 font-medium text-white'>
              Login
            </a>
          </div>
        </div>
      </nav>

      <div className='absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer xs:hidden'>
        <MobileToggleSvg />
      </div>
    </header>
  );
};

export default Navbar;

const MainLogo = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlSpace='preserve'
      id='Layer_1_st_logo'
      x={0}
      y={0}
      viewBox='0 0 592.61 161.23'
    >
      <style dangerouslySetInnerHTML={{ __html: '.st0{fill:#1882ff}.st1{fill:#003897}.st2{fill:#fff}' }} />
      <path
        d='M14.42 107.63c-3.02.58-4.74 1.07-5.75 1.48C3.13 98.71 0 86.87 0 74.28 0 33.27 33.25 0 74.27 0c30.14 0 56.06 17.94 67.71 43.7l-1.57.18-44.95-8.3a.852.852 0 0 0-.83.29c-.22.23-.29.54-.2.85l2.37 8.34c.11.4.47.65.87.67l25.71.14-4.7.54c-.02 0-.04.02-.04.02L96.35 50.1c-14.16 2.93-23.26 4.52-27.1 4.72.36-.58.63-1.1.87-1.61.61-.47 1.39-.98 2.35-1.57 2.88-.71 3.31-2.57 3.31-3.62v-.51c0-.71-.29-1.43-.83-2.12l-.18-.22a.872.872 0 0 0-.71-.34h-.29c-1.03 0-2.13.18-3.47.61-.43.2-.83.4-1.23.6-.83-1.16-2.82-1.92-6.44-2.5a.808.808 0 0 0-.31 0c-4.21.45-7.13 1.07-8.72 1.81-3.51.8-8.57 2.86-15.07 6.13C27.31 58.1 21.87 64.12 21.87 69.9c0 1.5.52 3.13 1.57 4.79 1.54 2.57 4.74 4.54 9.86 6.02 4.49.87 8.99 1.63 13.28 2.26 4.79 1.05 7.45 2.79 7.92 5.14-.05.11-.09.23-.09.38v.6c0 .36-.2 1.43-1.97 3.44-2.5 2.44-4.97 4.2-7.4 5.19l-5.95 2.88c-6.47 2.6-14.8 4.95-24.67 7.03zm129.16-60.09c-.8.65-2.6 1.34-6.53 2.46-.04 0-.16.04-.2.04-2.8.38-5.63.78-8.45 1.21l-27.51 8.01c-2.91 6.35-5.41 12.05-7.42 16.97l-.16.29c-.16.25-.92 1.74-5.1 12.07-1.25 2.59-2.19 4.79-2.86 6.58-.14.42-.69 1.7-3.26 7.53l-4.14 9.61c-.04.05-.07.13-.11.18-1.85 2.42-2.79 2.86-3.53 2.95-.05.02-.14.02-.22.02-.14 0-.29-.02-.38-.05-1.23-.47-1.79-1.1-1.79-1.95 0-2.51 2.04-8.3 6.4-18.22 4.25-10.09 9.21-22.1 14.72-35.73l.09-.18c.36-.65.71-1.36 1.03-2.1-11.23 2.1-17.98 3.27-20.1 3.49l-3.58.51c-.29 0-.54-.04-.74-.11l-1.45.11c-1.54 0-2.71-.27-3.69-.71-1.61 1.68-3.53 3.49-5.81 5.52-3.56 2.62-4.87 2.97-5.68 2.97h-.34c-2.39-.27-3.74-1.63-3.74-3.62 0-.96.54-1.59 3.98-3.67 4.36-3.62 6.8-6.08 8.18-7.72.34-1.41 1.07-2.71 2.17-3.93-.14-.04-.31-.04-.45-.09-4.45.29-10.33 2.13-17.46 5.48-2.04.76-5.55 2.93-10.51 6.46-3.22 2.89-5.34 5.55-6.2 7.89-.18.72-.24 1.01-.25 1.12 0 2.08 4.07 3.84 11.16 4.76 11.18 1.74 13.87 3.13 14.92 4.02 2.84 1.63 4.96 4.23 6.2 7.62l.07.36.02 2.89c0 8.66-13.02 15.7-40.99 22.1L13.01 114h-.2c-.2 0-.4-.04-.58-.09l-.63.07h-.11c13.17 20.79 36.36 34.59 62.79 34.59 20.51 0 39.07-8.32 52.53-21.76 13.42-13.44 21.74-32.02 21.74-52.53 0-9.43-1.75-18.46-4.97-26.74zM262.99 88.19c.04 4.29-.42 8.53-.87 12.78-.76 6.55-1.77 13.07-2.23 19.65-.26 3.64-12.52 2.75-12.26-.89.5-6.71 1.46-13.38 2.27-20.06.42-3.9.83-7.83.8-11.75-3.35 4.55-6.28 9.38-9.06 14.3-3.62 6.65-6.85 13.48-10.04 20.35-3.26 4.89-2.51 5.57-12.36 1.19-1.05-.46-.55-2.24-.62-3.38-.05-.77.13-1.54.26-2.31.3-1.82 1.05-4.66 1.47-6.36 2.73-10.41 5.35-20.85 7.71-31.35 2.67-12.38 6.39-28.98 8.28-41.51.9-5.89 1.72-11.79 2.69-17.66.79-3.56 12.79-.9 12 2.67-.88 5.62-1.68 11.24-2.54 16.86-1.83 12.15-5.46 28.39-8.03 40.41.78-1.07 1.55-2.15 2.37-3.2 2.68-3.24 6.14-6.72 10.83-6.15 1.53.18 3.06.75 4.31 1.64 1.26.9 1.98 2.37 2.97 3.55.43 1.17.99 2.3 1.3 3.51.62 2.42.73 5.24.75 7.71zM325.38 69.3c-2.03 4.83-3.31 9.94-4.7 14.98-2.67 10.44-4.65 21.03-6.23 31.69-.92 7.1-.52 3.57-1.21 10.6-.36 3.63-12.59 2.41-12.23-1.22.75-7.46.32-3.73 1.28-11.18.33-2.25.7-4.48 1.07-6.72-4.16 3.91-8.77 7.63-13.99 9.7-1.28.51-2.65.76-3.98 1.14-1.21.05-2.41.23-3.62.15-3.99-.28-7.92-2.44-10.14-5.79-.58-.87-.97-1.85-1.46-2.78-.23-.89-.55-1.77-.7-2.68-.83-4.85.79-9.66 2.46-14.14.51-1.15.98-2.32 1.54-3.44 3.25-6.49 7.81-12.25 13.26-17.03 1.13-.9 2.22-1.87 3.4-2.72 4.48-3.19 9.14-4.99 14.66-4.5.79.13 1.59.2 2.38.38 1.98.45 3.81 1.32 5.48 2.44.52-1.47 1.1-2.92 1.74-4.35 1.63-3.29 12.62 2.2 10.99 5.47zm-16.65 12.14c-.34-.21-.61-.49-.73-.86-.31-.65-.8-1.16-1.34-1.62-.96-.95-2.13-1.4-3.46-1.44-3.57-.09-6.12 2.42-8.71 4.57-5.1 4.48-8.64 9.7-11.3 15.89-.66 2.35-2.57 5.89-1.24 8.31l.21-.03c.12.07.21.2.35.2.07 0 .04-.17.1-.18.15-.04.31.04.46.04.62-.01.61-.07 1.22-.29 5.4-2.39 9.72-6.5 13.83-10.63 3.14-3.28 5.75-7.01 7.79-11.06.38-.74 1.26-1 2.35-.95.16-.64.3-1.3.47-1.95zM369.15 77.75l-.9 4.43c-.32 1.6-1.53 2.86-3.1 3.31-13.85 3.97-24.22 22.29-26.72 37.39-.59 3.6-12.68 1.89-12.17-1.72.88-6.15 9.48-50.84 11.43-56.6 1.6-3.28 12.64 2.11 11.04 5.39-1.02 4.38-1.52 7.15-2.36 11.6 3.33-5.47 12.57-8.46 18.14-9.02 2.89-.28 5.22 2.37 4.64 5.22zM408.81 116.11c-2.57 1.78-5.15 3.49-8.01 4.78-7.08 3.19-14.5 5.94-22.38 5.79-3.5-.43-5.09-.33-8.34-1.92-4.02-1.95-7.02-5.41-8.24-9.72-.39-1.39-.39-2.85-.59-4.28.12-1.29.16-2.58.38-3.86.94-5.52 3.35-10.84 6.2-15.75-.04-.51-.08-1.03-.07-1.55 0-1.06 1.01-1.83 2.44-2.3.24-.37.47-.74.71-1.1 1.09-1.41 2.11-2.88 3.26-4.24 4.39-5.2 9.76-9.98 16.04-12.75 1.45-.64 2.98-1.04 4.48-1.56 1.64-.18 3.28-.66 4.92-.54 5.36.38 9.3 3.69 11.09 8.6.35.96.5 1.99.75 2.98.05.93.17 1.85.14 2.78-.16 4.74-2.24 9.07-4.89 12.9-3.55 4.52-7.45 8.19-12.62 10.81-5.05 2.32-9.91 3.86-15.46 2.13-.87-.39-1.79-.71-2.62-1.18-.25-.14-.49-.31-.73-.46-.47 1.41-.83 2.83-1.04 4.26-.09.59-.03 1.2-.05 1.8.13.29.21.61.39.87.84 1.23 3.86 1.12 5.07 1.16 5.56-.29 10.8-2.4 15.8-4.69 2.09-.98 4.01-2.19 5.87-3.55 3.14-2.22 10.65 8.36 7.5 10.59zm-25.06-25.39c-.79.95-1.5 1.96-2.23 2.96.17.52 1.66 2.21 1.73 1.52 1.87-.01 3.68-.95 5.33-1.76 3.17-1.69 5.72-4.13 7.86-6.98 1.28-2.02 2.62-4.27 2.1-6.73-.13-.17-1.04-1.17-.91-.36.03.2.31.41.19.58-.19.28-.59.32-.89.47-5.28 2.09-9.61 5.97-13.18 10.3z'
        className='st0'
      />
      <path
        d='M475.03 40.47c-.03-.04-.06-.08-.1-.13-3.52-1.04-7.29-.67-10.92-.84-6.73.07-13.46.23-20.16.84-.29 3.38-.69 6.75-1.12 10.11-1.36 10.87-3.24 21.66-5.15 32.44-1.72 9.51-3.49 19.01-5.2 28.53-.63 3.43-1.17 6.88-1.65 10.34-.5 3.61-12.67 1.93-12.17-1.69s1.07-7.23 1.72-10.82c1.71-9.51 3.48-19 5.19-28.5 1.87-10.58 3.73-21.18 5.06-31.84.31-2.41.61-4.81.86-7.23-5.2.61-10.39 1.32-15.51 2.38-4.11.85-8.26 1.62-12.15 3.24-3.42 1.28-7.73-10.22-4.31-11.51 4.49-1.84 9.26-2.79 13.98-3.77 8.53-1.77 17.2-2.65 25.85-3.59 8.17-.95 16.41-1.13 24.62-1.22 4.77-.03 9.51.09 14.15 1.23.64.25 1.28.5 1.91.75 3.37 1.48-1.55 12.74-4.9 11.28z'
        className='st0'
      />
      <path
        d='m485.59 77.75-.9 4.43c-.32 1.6-1.53 2.86-3.1 3.31-13.85 3.97-24.22 22.29-26.72 37.39-.59 3.6-12.68 1.89-12.17-1.72.88-6.15 9.48-50.84 11.43-56.6 1.6-3.28 12.64 2.11 11.04 5.39-1.02 4.38-1.52 7.15-2.36 11.6 3.33-5.47 12.57-8.46 18.14-9.02 2.89-.28 5.22 2.37 4.64 5.22zM504.5 68.4c-.37 4.68-1.17 9.32-2.02 13.93-1.3 7.13-2.7 14.25-4.21 21.34-.77 3.91-1.85 7.8-2.01 11.81-.21 3.64-12.48 2.96-12.27-.69.06-.92.08-1.84.18-2.75.39-3.69 1.38-7.29 2.07-10.92 1.49-6.99 2.86-14 4.14-21.03.72-3.88 1.35-7.77 1.82-11.69.01-3.65 12.3-3.65 12.3 0zm6.83-41.05c-.12 4.18-.76 8.34-1.42 12.46-.63 3.97-1.38 7.91-2.12 11.86-.67 3.59-12.75 1.32-12.08-2.27.72-3.84 1.45-7.69 2.06-11.55.56-3.48 1.1-6.99 1.26-10.51.01-3.64 12.3-3.64 12.3.01zM558.16 85.08c-.64 1.28-1.4 2.49-2.1 3.74-5.11 7.98-12.03 13.57-19.74 18.84-5.25 3.11-10.82 6.54-16.79 8.11-.55.15-1.12.26-1.68.36-1.58 10.15-3.09 20.31-4.1 30.53-.38 4.02-.57 8.05-.75 12.08-.16 3.64-12.44 3.11-12.28-.54.19-4.26.4-8.51.8-12.76 1.19-11.91 2.99-23.74 4.86-35.56 2.02-11.65 4.11-23.28 6.32-34.89 1.07-5.45 2.16-10.9 3.66-16.25 1.05-3.5 12.82.04 11.77 3.53-.85 3.06-1.55 6.16-2.2 9.27 1.73-2.98 3.67-5.82 5.94-8.44 3.17-3.1 6.96-5.77 11.37-6.71.93-.2 1.88-.24 2.82-.37 4.87-.1 9.88 1.45 12.78 5.67.75 1.09 1.21 2.35 1.81 3.52.29 1.29.7 2.55.86 3.86.68 5.54-.91 11.11-3.35 16.01zm-8.78-15c.38-1.3-1.08-1.8-2.13-1.81-2.39-.09-4.42 1.47-6.14 2.96-2.88 3.19-4.95 6.94-6.8 10.8-2.48 5.44-4.74 10.97-6.8 16.58.63-.37 1.26-.74 1.89-1.1 6.05-4.1 11.89-8.62 15.99-14.78 2.27-3.9 4.44-7.98 3.99-12.65zM219.76 80.02l-.33-.6c-2.6-4.67-6.31-7.99-11.03-9.86-2.21-1.23-6.87-2.39-21.92-2.33h-.1c-10.94.35-14.03-1.57-14.4-2.47.01-.18.03-.54.09-1.18.66-3.01 2.8-6.76 6.36-11.15 7.19-7.12 10.63-9.7 12.25-10.62l.28-.17c7.75-5.29 14.42-8.8 19.87-10.47l-.01.03c-.67 1.94-3.05 6.04-10.54 14.59-3.72 3.17-5.48 4.86-5.06 7.43.46 2.87 2.68 5.87 7.53 5.65l.92-.12c1.7-.27 3.71-1.34 7.98-5.66l.24-.27c12.85-15.67 13.87-21.6 13.32-25.02l-.34-2.14-.3-.57c-.51-.96-1.33-2.53-2.59-3.58-2.27-3.19-8.06-3.19-11.09-3.2h-.52l-.51.14c-5.62 1.54-9.55 3.04-11.98 4.56-4.78 1.99-11.07 5.82-19.22 11.7l-.21.16c-14.4 11.95-20.73 21.92-19.36 30.49.38 2.39 1.61 4.79 3.64 7.12 2.97 3.53 8.12 5.7 15.73 6.65l.36.03c6.31.19 12.61.24 18.72.17 5.47.34 8.82 1.55 9.98 3.63l.24 1.47c0 .01.07 1.06-1.69 3.88-2.71 3.65-5.49 6.37-8.27 8.08l-7.7 5.37c-8.18 4.86-18.87 9.84-31.74 14.78-7.02 2.58-9.08 4-10.12 5.44l-.94 1.31.57 3.56 1.24.94c1.62 1.23 3.41 1.86 5.24 1.86.43 0 .86-.03 1.29-.1l.94-.15.98-.26c.31.02.62 0 .94-.05l.36-.06 9.27-3.37.13-.05c37.69-15.28 54.29-28.36 52.23-41.17l-.73-4.42z'
        className='st0'
      />
      <path
        d='M573.89 44.79h-4.73V60.6h-2.91V44.79h-4.57v-2.57h12.21v2.57zM592.61 60.6h-2.89V49.02l-3.94 10.21-2.2-.03-4.02-10.35V60.6h-2.89V42.22h2.94l5.04 12.71 5.01-12.71h2.94V60.6z'
        className='st1'
      />
      <path
        d='M627.03 107.63c-3.02.58-4.74 1.07-5.75 1.48-5.54-10.4-8.66-22.25-8.66-34.84-.01-41 33.24-74.27 74.26-74.27 30.14 0 56.06 17.94 67.71 43.7l-1.57.18-44.95-8.3a.852.852 0 0 0-.83.29c-.22.23-.29.54-.2.85l2.37 8.34c.11.4.47.65.87.67l25.71.14-4.7.54c-.02 0-.04.02-.04.02l-22.29 3.67c-14.16 2.93-23.26 4.52-27.1 4.72.36-.58.63-1.1.87-1.61.61-.47 1.39-.98 2.35-1.57 2.88-.71 3.31-2.57 3.31-3.62v-.51c0-.71-.29-1.43-.83-2.12l-.18-.22a.872.872 0 0 0-.71-.34h-.29c-1.03 0-2.13.18-3.47.61-.43.2-.83.4-1.23.6-.83-1.16-2.82-1.92-6.44-2.5a.808.808 0 0 0-.31 0c-4.21.45-7.13 1.07-8.72 1.81-3.51.8-8.57 2.86-15.07 6.13-11.22 6.62-16.66 12.64-16.66 18.42 0 1.5.52 3.13 1.57 4.79 1.54 2.57 4.74 4.54 9.86 6.02 4.49.87 8.99 1.63 13.28 2.26 4.79 1.05 7.45 2.79 7.92 5.14-.05.11-.09.23-.09.38v.6c0 .36-.2 1.43-1.97 3.44-2.5 2.44-4.97 4.2-7.4 5.19l-5.95 2.88c-6.48 2.6-14.8 4.95-24.67 7.03zm129.15-60.09c-.8.65-2.6 1.34-6.53 2.46-.04 0-.16.04-.2.04-2.8.38-5.63.78-8.45 1.21l-27.51 8.01c-2.91 6.35-5.41 12.05-7.42 16.97l-.16.29c-.16.25-.92 1.74-5.1 12.07-1.25 2.59-2.19 4.79-2.86 6.58-.14.42-.69 1.7-3.26 7.53l-4.14 9.61c-.04.05-.07.13-.11.18-1.85 2.42-2.79 2.86-3.53 2.95-.05.02-.14.02-.22.02-.14 0-.29-.02-.38-.05-1.23-.47-1.79-1.1-1.79-1.95 0-2.51 2.04-8.3 6.4-18.22 4.25-10.09 9.21-22.1 14.72-35.73l.09-.18c.36-.65.71-1.36 1.03-2.1-11.23 2.1-17.98 3.27-20.1 3.49l-3.58.51c-.29 0-.54-.04-.74-.11l-1.45.11c-1.54 0-2.71-.27-3.69-.71-1.61 1.68-3.53 3.49-5.81 5.52-3.56 2.62-4.87 2.97-5.68 2.97h-.34c-2.39-.27-3.74-1.63-3.74-3.62 0-.96.54-1.59 3.98-3.67 4.36-3.62 6.8-6.08 8.18-7.72.34-1.41 1.07-2.71 2.17-3.93-.14-.04-.31-.04-.45-.09-4.45.29-10.33 2.13-17.46 5.48-2.04.76-5.55 2.93-10.51 6.46-3.22 2.89-5.34 5.55-6.2 7.89-.18.72-.24 1.01-.25 1.12 0 2.08 4.07 3.84 11.16 4.76 11.18 1.74 13.87 3.13 14.92 4.02 2.84 1.63 4.96 4.23 6.2 7.62l.07.36.02 2.89c0 8.66-13.02 15.7-40.99 22.1l-6.86 1.32c-.05.02-.16.02-.22.02-.2 0-.4-.04-.58-.09l-.63.07h-.11c13.17 20.79 36.36 34.59 62.79 34.59 20.51 0 39.07-8.32 52.53-21.76 13.42-13.44 21.74-32.02 21.74-52.53.03-9.45-1.73-18.48-4.95-26.76zM875.6 88.19c.04 4.29-.42 8.53-.87 12.78-.76 6.55-1.77 13.07-2.23 19.65-.26 3.64-12.52 2.75-12.26-.89.5-6.71 1.46-13.38 2.27-20.06.42-3.9.83-7.83.8-11.75-3.35 4.55-6.28 9.38-9.06 14.3-3.62 6.65-6.85 13.48-10.04 20.35-3.26 4.89-2.51 5.57-12.36 1.19-1.05-.46-.55-2.24-.62-3.38-.05-.77.13-1.54.26-2.31.3-1.82 1.05-4.66 1.47-6.36 2.73-10.41 5.35-20.85 7.71-31.35 2.67-12.38 6.39-28.98 8.28-41.51.9-5.89 1.72-11.79 2.69-17.66.79-3.56 12.79-.9 12 2.67-.88 5.62-1.68 11.24-2.54 16.86-1.83 12.15-5.46 28.39-8.03 40.41.78-1.07 1.55-2.15 2.37-3.2 2.68-3.24 6.14-6.72 10.83-6.15 1.53.18 3.06.75 4.31 1.64 1.26.9 1.98 2.37 2.97 3.55.43 1.17.99 2.3 1.3 3.51.62 2.42.73 5.24.75 7.71zM937.99 69.3c-2.03 4.83-3.31 9.94-4.7 14.98-2.67 10.44-4.65 21.03-6.23 31.69-.92 7.1-.52 3.57-1.21 10.6-.36 3.63-12.59 2.41-12.23-1.22.75-7.46.32-3.73 1.28-11.18.33-2.25.7-4.48 1.07-6.72-4.16 3.91-8.77 7.63-13.99 9.7-1.28.51-2.65.76-3.98 1.14-1.21.05-2.41.23-3.62.15-3.99-.28-7.92-2.44-10.14-5.79-.58-.87-.97-1.85-1.46-2.78-.23-.89-.55-1.77-.7-2.68-.83-4.85.79-9.66 2.46-14.14.51-1.15.98-2.32 1.54-3.44 3.25-6.49 7.81-12.25 13.26-17.03 1.13-.9 2.22-1.87 3.4-2.72 4.48-3.19 9.14-4.99 14.66-4.5.79.13 1.59.2 2.38.38 1.98.45 3.81 1.32 5.48 2.44.52-1.47 1.1-2.92 1.74-4.35 1.63-3.29 12.62 2.2 10.99 5.47zm-16.65 12.14c-.34-.21-.61-.49-.73-.86-.31-.65-.8-1.16-1.34-1.62-.96-.95-2.13-1.4-3.46-1.44-3.57-.09-6.12 2.42-8.71 4.57-5.1 4.48-8.64 9.7-11.3 15.89-.66 2.35-2.57 5.89-1.24 8.31l.21-.03c.12.07.21.2.35.2.07 0 .04-.17.1-.18.15-.04.31.04.46.04.62-.01.61-.07 1.22-.29 5.4-2.39 9.72-6.5 13.83-10.63 3.14-3.28 5.75-7.01 7.79-11.06.38-.74 1.26-1 2.35-.95.16-.64.3-1.3.47-1.95zM981.76 77.75l-.9 4.43c-.32 1.6-1.53 2.86-3.1 3.31-13.85 3.97-24.22 22.29-26.72 37.39-.59 3.6-12.68 1.89-12.17-1.72.88-6.15 9.48-50.84 11.43-56.6 1.6-3.28 12.64 2.11 11.04 5.39-1.02 4.38-1.52 7.15-2.36 11.6 3.33-5.47 12.57-8.46 18.14-9.02 2.89-.28 5.22 2.37 4.64 5.22zM1021.42 116.11c-2.57 1.78-5.15 3.49-8.01 4.78-7.08 3.19-14.5 5.94-22.38 5.79-3.5-.43-5.09-.33-8.34-1.92-4.02-1.95-7.02-5.41-8.24-9.72-.39-1.39-.39-2.85-.59-4.28.12-1.29.16-2.58.38-3.86.94-5.52 3.35-10.84 6.2-15.75-.04-.51-.08-1.03-.07-1.55 0-1.06 1.01-1.83 2.44-2.3.24-.37.47-.74.71-1.1 1.09-1.41 2.11-2.88 3.26-4.24 4.39-5.2 9.76-9.98 16.04-12.75 1.45-.64 2.98-1.04 4.48-1.56 1.64-.18 3.28-.66 4.93-.54 5.36.38 9.3 3.69 11.09 8.6.35.96.5 1.99.75 2.98.05.93.17 1.85.14 2.78-.16 4.74-2.24 9.07-4.89 12.9-3.55 4.52-7.45 8.19-12.62 10.81-5.05 2.32-9.91 3.86-15.46 2.13-.87-.39-1.79-.71-2.62-1.18-.25-.14-.49-.31-.73-.46-.47 1.41-.83 2.83-1.04 4.26-.09.59-.03 1.2-.05 1.8.13.29.21.61.4.87.84 1.23 3.86 1.12 5.07 1.16 5.56-.29 10.8-2.4 15.8-4.69 2.09-.98 4.01-2.19 5.87-3.55 3.12-2.22 10.63 8.36 7.48 10.59zm-25.07-25.39c-.79.95-1.5 1.96-2.23 2.96.17.52 1.66 2.21 1.73 1.52 1.87-.01 3.68-.95 5.33-1.76 3.17-1.69 5.72-4.13 7.86-6.98 1.28-2.02 2.62-4.27 2.1-6.73-.13-.17-1.04-1.17-.91-.36.03.2.31.41.19.58-.19.28-.59.32-.89.47-5.27 2.09-9.6 5.97-13.18 10.3z'
        className='st2'
      />
      <path
        d='M1087.64 40.47c-.03-.04-.06-.08-.1-.13-3.52-1.04-7.29-.67-10.92-.84-6.73.07-13.46.23-20.16.84-.29 3.38-.69 6.75-1.12 10.11-1.35 10.87-3.24 21.66-5.15 32.44-1.72 9.51-3.49 19.01-5.2 28.53-.63 3.43-1.17 6.88-1.65 10.34-.5 3.61-12.67 1.93-12.17-1.69s1.07-7.23 1.72-10.82c1.71-9.51 3.48-19 5.19-28.5 1.87-10.58 3.73-21.18 5.06-31.84.31-2.41.61-4.81.86-7.23-5.2.61-10.39 1.32-15.51 2.38-4.11.85-8.26 1.62-12.15 3.24-3.42 1.28-7.73-10.22-4.31-11.51 4.49-1.84 9.26-2.79 13.98-3.77 8.53-1.77 17.2-2.65 25.85-3.59 8.17-.95 16.41-1.13 24.62-1.22 4.77-.03 9.51.09 14.15 1.23.64.25 1.28.5 1.91.75 3.37 1.48-1.55 12.74-4.9 11.28z'
        className='st2'
      />
      <path
        d='m1098.2 77.75-.9 4.43c-.32 1.6-1.53 2.86-3.1 3.31-13.85 3.97-24.22 22.29-26.72 37.39-.59 3.6-12.68 1.89-12.17-1.72.88-6.15 9.48-50.84 11.43-56.6 1.6-3.28 12.64 2.11 11.04 5.39-1.02 4.38-1.52 7.15-2.36 11.6 3.33-5.47 12.57-8.46 18.14-9.02 2.89-.28 5.22 2.37 4.64 5.22zM1117.11 68.4c-.37 4.68-1.17 9.32-2.02 13.93-1.3 7.13-2.7 14.25-4.21 21.34-.77 3.91-1.85 7.8-2.01 11.81-.21 3.64-12.47 2.96-12.27-.69.06-.92.08-1.84.18-2.75.39-3.69 1.38-7.29 2.07-10.92 1.49-6.99 2.86-14 4.14-21.03.72-3.88 1.35-7.77 1.82-11.69.01-3.65 12.3-3.65 12.3 0zm6.83-41.05c-.12 4.18-.76 8.34-1.42 12.46-.63 3.97-1.38 7.91-2.12 11.86-.67 3.59-12.75 1.32-12.08-2.27.72-3.84 1.45-7.69 2.06-11.55.56-3.48 1.1-6.99 1.26-10.51.01-3.64 12.3-3.64 12.3.01zM1170.77 85.08c-.64 1.28-1.4 2.49-2.1 3.74-5.11 7.98-12.03 13.57-19.74 18.84-5.25 3.11-10.82 6.54-16.79 8.11-.55.15-1.12.26-1.68.36-1.58 10.15-3.09 20.31-4.1 30.53-.38 4.02-.57 8.05-.75 12.08-.16 3.64-12.44 3.11-12.28-.54.19-4.26.4-8.51.8-12.76 1.19-11.91 2.99-23.74 4.86-35.56 2.02-11.65 4.11-23.28 6.32-34.89 1.07-5.45 2.16-10.9 3.66-16.25 1.05-3.5 12.82.04 11.77 3.53-.85 3.06-1.55 6.16-2.2 9.27 1.73-2.98 3.67-5.82 5.94-8.44 3.17-3.1 6.96-5.77 11.37-6.71.93-.2 1.88-.24 2.82-.37 4.87-.1 9.88 1.45 12.78 5.67.75 1.09 1.21 2.35 1.81 3.52.29 1.29.7 2.55.86 3.86.68 5.54-.91 11.11-3.35 16.01zm-8.78-15c.38-1.3-1.08-1.8-2.13-1.81-2.39-.09-4.42 1.47-6.14 2.96-2.88 3.19-4.95 6.94-6.8 10.8-2.48 5.44-4.74 10.97-6.8 16.58.63-.37 1.26-.74 1.89-1.1 6.05-4.1 11.89-8.62 15.99-14.78 2.27-3.9 4.44-7.98 3.99-12.65zM832.37 80.02l-.33-.6c-2.6-4.67-6.31-7.99-11.03-9.86-2.21-1.23-6.87-2.39-21.92-2.33h-.1c-10.94.35-14.03-1.57-14.4-2.47.01-.18.03-.54.09-1.18.66-3.01 2.8-6.76 6.36-11.15 7.19-7.12 10.63-9.7 12.25-10.62l.28-.17c7.75-5.29 14.42-8.8 19.87-10.47l-.01.03c-.67 1.94-3.05 6.04-10.54 14.59-3.72 3.17-5.48 4.86-5.06 7.43.46 2.87 2.68 5.87 7.53 5.65l.92-.12c1.7-.27 3.71-1.34 7.98-5.66l.24-.27c12.85-15.67 13.87-21.6 13.32-25.02l-.34-2.14-.3-.57c-.51-.96-1.33-2.53-2.59-3.58-2.27-3.19-8.06-3.19-11.09-3.2h-.52l-.51.14c-5.62 1.54-9.55 3.04-11.98 4.56-4.78 1.99-11.07 5.82-19.22 11.7l-.21.16c-14.4 11.95-20.73 21.92-19.36 30.49.38 2.39 1.61 4.79 3.64 7.12 2.97 3.53 8.12 5.7 15.73 6.65l.36.03c6.31.19 12.61.24 18.72.17 5.47.34 8.82 1.55 9.98 3.63l.24 1.47c0 .01.07 1.06-1.69 3.88-2.71 3.65-5.49 6.37-8.27 8.08l-7.7 5.37c-8.18 4.86-18.87 9.84-31.74 14.78-7.02 2.58-9.08 4-10.12 5.44l-.94 1.31.57 3.56 1.24.94c1.62 1.23 3.41 1.86 5.24 1.86.43 0 .86-.03 1.29-.1l.93-.15.98-.26c.31.02.62 0 .94-.05l.36-.06 9.27-3.37.13-.05c37.69-15.28 54.29-28.36 52.23-41.17l-.72-4.42zM1186.5 44.79h-4.73V60.6h-2.91V44.79h-4.57v-2.57h12.21v2.57zM1205.22 60.6h-2.89V49.02l-3.94 10.21-2.2-.03-4.02-10.35V60.6h-2.89V42.22h2.94l5.04 12.71 5.01-12.71h2.94V60.6z'
        className='st2'
      />
    </svg>
  );
};

const MobileToggleSvg = () => (
  <svg width={24} height={24} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18Z'
      fill='#9BA6B2'
    />
    <path
      d='M21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12Z'
      fill='#9BA6B2'
    />
    <path
      d='M21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6Z'
      fill='#9BA6B2'
    />
  </svg>
);
