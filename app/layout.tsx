import type { Metadata } from 'next';
import { Noto_Sans_JP, Inter, Archivo_Black } from 'next/font/google';
import { LocaleProvider } from '@/contexts/LocaleContext';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas-neue',
  display: 'swap',
});

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'MINGISA — Premium Taxi Service in Korea',
  description:
    'Premium private taxi for international travelers in Korea. Safe, comfortable rides from airport to any destination. Book via LINE, WhatsApp, KakaoTalk, or Instagram.',
  keywords: ['Korea taxi', 'Korea travel', 'airport transfer', 'Seoul tour', 'premium taxi', 'private driver'],
  openGraph: {
    title: 'MINGISA — Premium Taxi Service in Korea',
    description: 'Safe Choice, Smooth Ride. Premium private taxi for international travelers in Korea.',
    type: 'website',
    locale: 'en_US',
    url: 'https://mingisa.com',
    siteName: 'MINGISA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSansJP.variable} ${inter.variable} ${archivoBlack.variable}`}>
      <body className="font-sans antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
