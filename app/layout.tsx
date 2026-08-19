import type { Metadata, Viewport } from 'next';
import { Noto_Sans_JP, Inter, Archivo_Black } from 'next/font/google';
import { LocaleProvider } from '@/contexts/LocaleContext';
import PwaRegister from '@/components/PwaRegister';
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

export const viewport: Viewport = {
  themeColor: '#0a1628',
};

export const metadata: Metadata = {
  manifest: '/manifest.json',
  icons: {
    icon: '/icon-512.png',
    apple: '/m_logo_512_smaller_margin.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: '민기사',
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
    images: [
      {
        url: 'https://mingisa.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MINGISA — Premium Taxi Service in Korea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MINGISA — Premium Taxi Service in Korea',
    description: 'Safe Choice, Smooth Ride. Premium private taxi for international travelers in Korea.',
    images: ['https://mingisa.com/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${notoSansJP.variable} ${inter.variable} ${archivoBlack.variable}`}>
      <body className="font-sans antialiased">
        <LocaleProvider>{children}</LocaleProvider>
        <PwaRegister />
      </body>
    </html>
  );
}
