'use client';

import { useLocale } from '@/contexts/LocaleContext';
import { useEffect, useRef, useState } from 'react';

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

const MAIN_VEHICLE = {
  name: 'Genesis G90', nameKo: '제네시스 G90',
  image: '/vehicles/genesis-g90.png', fit: 'cover' as const, seats: 4,
};

const ALT_SEDAN = [
  { name: 'Mercedes-Maybach', nameKo: '벤츠 마이바흐', image: '/vehicles/maybach-s580.png', premium: true, fit: 'contain' as const, seats: 4 },
  { name: 'BMW i7', nameKo: 'BMW i7', image: '/vehicles/bmw-i7.jpeg', premium: false, fit: 'cover' as const, seats: 4 },
];

const ALT_SUV = [
  { name: 'Mercedes-Maybach EQS', nameKo: '벤츠 EQS 마이바흐', image: '/vehicles/maybach-eqs.jpeg', premium: true, fit: 'cover' as const, seats: 4 },
  { name: 'Carnival Hi-Limousine', nameKo: '카니발 하이리무진', image: '/vehicles/carnival.jpg', premium: false, fit: 'cover' as const, seats: 5 },
  { name: 'Toyota Alphard', nameKo: '도요타 알파드', image: '/vehicles/alphard.jpeg', premium: false, fit: 'cover' as const, seats: 5 },
];

const LABELS: Record<string, {
  title: string; mainLabel: string; altLabel: string;
  sedan: string; suv: string; seatsUnit: string;
  notice2: string; notice3: string;
}> = {
  ko: {
    title: '차량',
    mainLabel: '차량',
    altLabel: '대체 가능 차량',
    sedan: '승용',
    suv: 'SUV',
    seatsUnit: '인승',
    notice2: '대표 차량이 예약 중일 시, 다른 차종으로 대체 가능합니다',
    notice3: '운영 시간 09:00~21:00 / 이외 시간은 확인되는 대로 답변드리겠습니다',
  },
  ja: {
    title: 'ご用意できる車種',
    mainLabel: '代表車両',
    altLabel: '代替車両',
    sedan: 'セダン',
    suv: 'SUV',
    seatsUnit: '人乗り',
    notice2: '代表車両がご予約中の場合、ご希望により別の車両への変更が可能です',
    notice3: '営業時間 09:00~21:00 / 時間外はご確認次第ご返答いたします',
  },
  en: {
    title: 'Available Vehicles',
    mainLabel: 'Featured Vehicle',
    altLabel: 'Alternative Vehicles',
    sedan: 'Sedan',
    suv: 'SUV',
    seatsUnit: ' seats',
    notice2: 'If our representative vehicle is booked, we can arrange an alternative vehicle upon request',
    notice3: "Operating hours: 9AM–9PM KST / Outside hours, we'll reply as soon as we see your message",
  },
  zh: {
    title: '可用车型',
    mainLabel: '代表车型',
    altLabel: '备选车型',
    sedan: '轿车',
    suv: 'SUV',
    seatsUnit: '座',
    notice2: '如代表车型已被预订，可根据您的需求安排其他车型',
    notice3: '服务时间：09:00~21:00 / 非工作时间将在看到消息后尽快回复',
  },
};

type Car = { name: string; nameKo: string; image: string; premium: boolean; fit: 'cover' | 'contain'; seats: number };

function CarPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      <svg className="w-14 h-8 text-gray-300" viewBox="0 0 80 40" fill="currentColor">
        <path d="M10 28 L14 18 Q16 14 20 14 L30 12 Q36 8 44 8 L58 8 Q64 8 68 14 L72 18 L74 20 Q76 22 76 25 L76 28 Q76 30 74 30 L70 30 Q70 34 66 34 Q62 34 62 30 L26 30 Q26 34 22 34 Q18 34 18 30 L10 30 Q8 30 8 28 Z" />
        <circle cx="22" cy="30" r="4" fill="white" />
        <circle cx="64" cy="30" r="4" fill="white" />
      </svg>
    </div>
  );
}

function ImageSlider({ cars, locale }: { cars: Car[]; locale: string }) {
  const total = cars.length;
  // Clone first slide at the end so right-scroll loops seamlessly
  const slides = total > 1 ? [...cars, cars[0]] : cars;
  const [index, setIndex] = useState(0);
  const [animated, setAnimated] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex(prev => prev + 1), 3000);
  };

  useEffect(() => {
    if (total <= 1) return;
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  // After landing on the clone, instantly jump back to real index 0
  const handleTransitionEnd = () => {
    if (index >= total) {
      setAnimated(false);
      setIndex(0);
    }
  };

  // Re-enable animation after the instant jump has been painted
  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const go = (idx: number) => { startTimer(); setAnimated(true); setIndex(idx); };
  const prev = () => { startTimer(); setAnimated(true); setIndex(i => (i <= 0 ? total - 1 : i - 1)); };
  const next = () => { startTimer(); setAnimated(true); setIndex(i => i >= total ? total : i + 1); };

  const current = index >= total ? 0 : index;

  return (
    <div>
      <div className="relative overflow-hidden rounded-xl bg-white border border-gold-500/20 shadow-sm">
        {/* Sliding strip */}
        <div
          className={`flex ${animated ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((car, i) => {
            const displayName = locale === 'ko' ? car.nameKo : car.name;
            return (
              <div key={i} className="shrink-0 w-full">
                <div className="relative aspect-[4/3]">
                  <CarPlaceholder />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={car.image}
                    alt={car.name}
                    className={`absolute inset-0 w-full h-full z-10 ${car.fit === 'contain' ? 'object-contain p-2' : 'object-cover'}`}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  {car.premium && (
                    <span className="absolute top-1.5 right-1.5 z-20 text-[8px] font-bold bg-gold-500 text-white px-1.5 py-0.5 rounded-full leading-none">
                      {{ ko: '최고급', en: 'Exclusive', ja: '最高級', zh: '顶级' }[locale] ?? 'Exclusive'}
                    </span>
                  )}
                </div>
                {/* Name bar */}
                <div className="px-3 py-2 flex items-center gap-1.5 border-t border-gold-500/10">
                  <p className="text-navy-800 text-[11px] font-semibold leading-tight flex-1">{displayName}</p>
                  <span className="flex items-center gap-0.5 text-gray-400 shrink-0">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                    </svg>
                    <span className="text-[10px] font-semibold">{car.seats}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Arrows + Dots */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-3 mt-2">
          <button
            onClick={prev}
            aria-label="Previous"
            className="text-gray-400 hover:text-navy-800 text-xl leading-none transition-colors px-1"
          >
            ‹
          </button>
          <div className="flex gap-1.5">
            {cars.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`h-1 rounded-full transition-all duration-300 ${i === current ? 'w-4 bg-gold-500' : 'w-1 bg-gray-300'}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next"
            className="text-gray-400 hover:text-navy-800 text-xl leading-none transition-colors px-1"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

function VehicleList({ cars, locale, seatsUnit }: { cars: Car[]; locale: string; seatsUnit: string }) {
  return (
    <ul className="mt-3 flex flex-col gap-1.5">
      {cars.map(car => (
        <li key={car.name} className="flex items-center gap-1.5 text-navy-700">
          <span className="text-gold-500 font-bold text-xs shrink-0">*</span>
          <span className="text-xs font-medium flex-1 leading-tight">
            {locale === 'ko' ? car.nameKo : car.name}
          </span>
          <span className="text-[10px] text-gray-400 font-semibold shrink-0 whitespace-nowrap">
            {car.seats}{seatsUnit}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Trust() {
  const { t, locale } = useLocale();
  const labels = LABELS[locale] ?? LABELS.en;

  return (
    <section id="driver" className="bg-[#EEF5F1] py-24 px-4">
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
          <div className="flex justify-center mb-8">
            <span className="bg-gold-500/10 border border-gold-500/40 text-gold-700 text-base font-bold px-5 py-1.5 rounded-full">
              {labels.title}
            </span>
          </div>
          <div className="bg-white border border-gold-500/20 rounded-2xl overflow-hidden shadow-sm">
            {/* Image */}
            <div className="relative w-full aspect-[16/8] overflow-hidden">
              <CarPlaceholder />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={MAIN_VEHICLE.image}
                alt={MAIN_VEHICLE.name}
                className="absolute inset-0 w-full h-full z-10"
                style={{ objectFit: 'cover', objectPosition: '70% 70%', transform: 'scale(1.4)', transformOrigin: '70% 70%' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            {/* Name */}
            <div className="px-5 py-4 flex items-center gap-3 border-b border-gold-500/10">
              <p className="text-navy-800 text-lg font-bold flex-1">
                {locale === 'ko' ? MAIN_VEHICLE.nameKo : MAIN_VEHICLE.name}
              </p>
              <span className="flex items-center gap-1 text-gray-400 shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
                <span className="text-sm font-semibold">{MAIN_VEHICLE.seats}{labels.seatsUnit}</span>
              </span>
            </div>
            {/* Notices */}
            <div className="px-5 py-4 flex flex-col gap-2">
              {[labels.notice2, labels.notice3].map((notice, i) => (
                <p key={i} className="text-sm text-gray-500 flex items-start gap-2">
                  <span className="text-gold-500 font-bold shrink-0">※</span>
                  {notice}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
