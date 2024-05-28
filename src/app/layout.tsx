import type { Metadata } from 'next';
import { Murecho } from 'next/font/google';
import '@/assets/scss/tailwind.scss';
import Navbar from '@/components/Navbar.Component';

const murecho = Murecho({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'ShareTrip: Book Air Tickets, Hotels, Packages Online',
  description:
    "Bangladesh's leading online travel agency. Book air tickets, hotels, tour packages & more without any hassle at the most affordable rates with ShareTrip.",
  icons: {
    icon: 'https://cdn.sharetrip.net/sharetrip_net/production/public/images/favicon-32x32.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${murecho.className} bg-[#ebf0f5]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
