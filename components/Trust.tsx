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

const SEDAN = [
  { name: 'Mercedes-Maybach S580', nameKo: '벤츠 마이바흐 S580', image: '/vehicles/maybach-s580.png', premium: true, fit: 'contain' as const, seats: 4 },
  { name: 'BMW i7', nameKo: 'BMW i7', image: '/vehicles/bmw-i7.jpeg', premium: false, fit: 'cover' as const, seats: 4 },
  { name: 'Genesis G90', nameKo: '제네시스 G90', image: '/vehicles/genesis-g90.jpeg', premium: false, fit: 'cover' as const, seats: 4 },
];
const SUV = [
  { name: 'Mercedes-Maybach EQS', nameKo: '벤츠 EQS 마이바흐', image: '/vehicles/maybach-eqs.jpeg', premium: true, fit: 'cover' as const, seats: 4 },
  { name: 'Carnival Hi-Limousine', nameKo: '카니발 하이리무진', image: '/vehicles/carnival.jpg', premium: false, fit: 'cover' as const, seats: 5 },
  { name: 'Toyota Alphard', nameKo: '도요타 알파드', image: '/vehicles/alphard.jpeg', premium: false, fit: 'cover' as const, seats: 5 },
];

const LABELS: Record<string, { title: string; sedan: string; van: string; notice1: string; notice2: string }> = {
  ko: {
    title: '이용 가능 차량',
    sedan: '승용',
    van: 'SUV',
    notice1: '차량 종류에 따라 요금이 다를 수 있습니다',
    notice2: '원하시는 차량이 예약 중일 경우 다른 차량으로 배정 제안이 될 수 있습니다',
  },
  ja: {
    title: 'ご用意できる車種',
    sedan: 'セダン',
    van: 'SUV',
    notice1: '車種によって料金が異なる場合があります',
    notice2: 'ご希望の車種が予約中の場合、別の車種をご提案する場合があります',
  },
  en: {
    title: 'Available Vehicles',
    sedan: 'Sedan',
    van: 'SUV',
    notice1: 'Pricing may vary depending on the vehicle',
    notice2: 'If your preferred vehicle is unavailable, an alternative may be offered',
  },
  zh: {
    title: '可用车型',
    sedan: '轿车',
    van: 'SUV',
    notice1: '车型不同，费用可能有所不同',
    notice2: '如您选择的车型已被预订，可能会为您推荐其他车型',
  },
};

function CarPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      <svg className="w-20 h-12 text-gray-300" viewBox="0 0 80 40" fill="currentColor">
        <path d="M10 28 L14 18 Q16 14 20 14 L30 12 Q36 8 44 8 L58 8 Q64 8 68 14 L72 18 L74 20 Q76 22 76 25 L76 28 Q76 30 74 30 L70 30 Q70 34 66 34 Q62 34 62 30 L26 30 Q26 34 22 34 Q18 34 18 30 L10 30 Q8 30 8 28 Z" />
        <circle cx="22" cy="30" r="4" fill="white" />
        <circle cx="64" cy="30" r="4" fill="white" />
      </svg>
    </div>
  );
}

function VehicleCard({ car, locale }: { car: { name: string; nameKo: string; image: string; premium: boolean; fit: 'cover' | 'contain'; seats: number }; locale: string }) {
  const displayName = locale === 'ko' ? car.nameKo : car.name;
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gold-500/20 shadow-sm hover:shadow-md hover:border-gold-500/40 transition-all duration-300">
      <div className="relative w-full aspect-[16/8.5] overflow-hidden">
        <CarPlaceholder />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={car.image}
          alt={car.name}
          className={`absolute inset-0 w-full h-full z-10 ${car.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <div className="px-3 py-2.5 flex items-center gap-1.5">
        <p className="text-navy-800 text-xs font-semibold leading-tight flex-1">{displayName}</p>
        {car.premium && (
          <span className="text-[9px] font-bold bg-gold-500 text-white px-1.5 py-0.5 rounded-full leading-none shrink-0">
            {{ ko: '최고급', en: 'Exclusive', ja: '最高級', zh: '顶级' }[locale] ?? 'Exclusive'}
          </span>
        )}
        <span className="flex items-center gap-0.5 text-gray-400 shrink-0">
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
          <span className="text-[10px] font-semibold">{car.seats}</span>
        </span>
      </div>
    </div>
  );
}

export default function Trust() {
  const { t, locale } = useLocale();
  const labels = LABELS[locale] ?? LABELS.en;

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
        <div className="mt-16">
          <p className="text-xs font-bold text-gold-600 uppercase tracking-widest mb-8 text-center">
            {labels.title}
          </p>

          {/* Sedan */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gold-500/20" />
            <span className="text-sm font-bold text-navy-800 tracking-wide">{labels.sedan}</span>
            <div className="flex-1 h-px bg-gold-500/20" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {SEDAN.map((car) => <VehicleCard key={car.name} car={car} locale={locale} />)}
          </div>

          {/* SUV */}
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gold-500/20" />
            <span className="text-sm font-bold text-navy-800 tracking-wide">{labels.van}</span>
            <div className="flex-1 h-px bg-gold-500/20" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {SUV.map((car) => <VehicleCard key={car.name} car={car} locale={locale} />)}
          </div>

          {/* Notices */}
          <div className="bg-white border border-gold-500/20 rounded-xl px-5 py-4 flex flex-col gap-2">
            {[labels.notice1, labels.notice2].map((notice, i) => (
              <p key={i} className="text-sm text-gray-600 font-medium flex items-start gap-2">
                <span className="text-gold-500 font-bold shrink-0">※</span>
                {notice}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
