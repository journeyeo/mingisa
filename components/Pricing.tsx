'use client';

import { useLocale } from '@/contexts/LocaleContext';
import ContactButtons from './ContactButtons';

const icons = [
  <svg key="airport" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
  </svg>,
  <svg key="region" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
  </svg>,
  <svg key="time" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

const paymentPoints = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    ja: 'カード・現金どちらもOK',
    ko: '카드·현금 모두 결제 가능',
    zh: '支持刷卡·现金付款',
    en: 'Card & cash accepted',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    ja: '現地でドライバーに直接お支払い',
    ko: '드라이버에게 현장에서 직접 결제',
    zh: '与司机现场直接结算',
    en: 'Pay the driver on-site',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    ja: '事前にお気軽に料金相談OK',
    ko: '사전에 편하게 요금 문의 가능',
    zh: '可提前随时询价',
    en: 'Ask for a quote anytime',
  },
];

export default function Pricing() {
  const { t, locale } = useLocale();

  return (
    <section id="pricing" className="bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold uppercase tracking-widest mb-4">
            <div className="w-8 h-px bg-gold-500" />
            Routes
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy-900 mb-4 tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left — course list */}
          <div className="bg-[#FAF8F5] rounded-2xl p-8 flex flex-col">
            <div className="mb-4">
              <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">Routes</p>
              <h3 className="text-xl font-black text-navy-900 leading-snug">
                {t.pricing.title}
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {t.pricing.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4 py-4 group">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-100 text-navy-700 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-navy-900 transition-all duration-300">
                    {icons[i]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — payment info card */}
          <div className="bg-[#FAF8F5] rounded-2xl p-8 flex flex-col justify-between gap-6">
            <div>
              <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-2">Payment</p>
              <h3 className="text-xl font-black text-navy-900 leading-snug">
                {locale === 'ja' && '料金・お支払いについて'}
                {locale === 'ko' && '요금 및 결제 안내'}
                {locale === 'zh' && '费用与结算'}
                {locale === 'en' && 'Pricing & Payment'}
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              {paymentPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-lg bg-white border border-gray-100 text-navy-700 flex items-center justify-center">
                    {point.icon}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed pt-1">
                    {point[locale as 'ja' | 'ko' | 'zh' | 'en']}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <ContactButtons size="icon" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
