'use client';

import { useLocale } from '@/contexts/LocaleContext';

const LABELS: Record<string, { title: string; subtitle: string }> = {
  ko: {
    title: 'MINGISA를 경험하세요',
    subtitle: '특별한 여정, 지금 영상으로 만나보세요',
  },
  en: {
    title: 'Experience MINGISA',
    subtitle: 'See what makes every journey special',
  },
  ja: {
    title: 'MINGISAを体験する',
    subtitle: '特別な旅を映像でご覧ください',
  },
  zh: {
    title: '体验 MINGISA',
    subtitle: '用影片感受每一段特别的旅程',
  },
};

export default function PromoVideo() {
  const { locale } = useLocale();
  const labels = LABELS[locale] ?? LABELS.en;

  return (
    <section id="promo-video" className="bg-navy-900 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-gold-400 text-sm font-bold uppercase tracking-widest mb-4">
            <div className="w-8 h-px bg-gold-500" />
            MINGISA Film
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            {labels.title}
          </h2>
          <p className="text-gray-400 text-lg">{labels.subtitle}</p>
        </div>

        {/* Video — centered, 9:16 portrait */}
        <div className="flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-gold-500/20">
              <video
                src="/video/first_mingisa_260901_2.mp4"
                className="absolute inset-0 w-full h-full object-cover"
                playsInline
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
