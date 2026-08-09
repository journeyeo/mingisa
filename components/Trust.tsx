'use client';

import { useLocale } from '@/contexts/LocaleContext';

const icons = [
  <svg key="exp" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3M3 12h3m12 0h3" />
    <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10V7m0 10v-3m-2-2H7m10 0h-3" />
  </svg>,
  <svg key="safety" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  <svg key="clean" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
  </svg>,
];

const VEHICLES = ['BMW i7', 'Genesis G90', '카니발 하이리무진', 'Toyota Alphard'];

const VEHICLE_LABEL: Record<string, string> = {
  ja: 'ご用意できる車種',
  ko: '이용 가능 차량',
  en: 'Available Vehicles',
};

export default function Trust() {
  const { t, locale } = useLocale();

  return (
    <section className="bg-[#EEF5F1] py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold uppercase tracking-widest mb-4">
            <div className="w-8 h-px bg-gold-500" />
            Driver
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy-900 mb-4 tracking-tight">
            {t.trust.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.trust.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.trust.points.map((point, i) => (
            <div
              key={i}
              className="
                bg-white border border-gold-500/20
                rounded-2xl p-8 flex flex-col gap-5
                hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/10
                transition-all duration-300
              "
            >
              <div className="w-14 h-14 rounded-xl bg-gold-500/15 text-gold-600 flex items-center justify-center">
                {icons[i]}
              </div>
              <div>
                <h3 className="text-navy-900 font-bold text-lg mb-2">{point.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vehicle options */}
        <div className="mt-12 text-center">
          <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-5">
            {VEHICLE_LABEL[locale]}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {VEHICLES.map((car) => (
              <span
                key={car}
                className="inline-flex items-center gap-2 bg-white border border-gold-500/30 text-navy-800 text-sm font-semibold px-4 py-2 rounded-full shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                {car}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
