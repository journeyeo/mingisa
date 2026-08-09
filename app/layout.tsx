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
  title: 'MINGISA — 韓国プレミアムタクシーサービス',
  description:
    '外国人旅行者のための韓国プレミアムタクシーサービス。日本語対応ドライバーが空港から観光地まで安全・快適にご案内します。LINE・WhatsApp・カカオ・Instagramで簡単予約。',
  keywords: ['韓国タクシー', '韓国旅行', '空港送迎', 'ソウル観光', 'プレミアムタクシー', 'Japan'],
  openGraph: {
    title: 'MINGISA — 韓国プレミアムタクシーサービス',
    description: '日本語対応ドライバーが韓国旅行をもっと快適に。LINE・WhatsApp・カカオ・Instagramで簡単予約。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${inter.variable} ${archivoBlack.variable}`}>
      <body className="font-sans antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
