'use client';

import { useLocale } from '@/contexts/LocaleContext';
import ContactButtons from './ContactButtons';

export default function CtaSection() {
  const { t } = useLocale();

  return (
    <section className="bg-navy-900 py-24 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Green accent line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-gold-500" />
          <div className="w-3 h-3 rounded-full bg-gold-500" />
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-gold-500" />
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
          {t.ctaSection.title}
        </h2>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          {t.ctaSection.subtitle}
        </p>

        <ContactButtons size="icon" className="mb-6 justify-center" />

        <p className="text-gray-500 text-sm font-medium">{t.ctaSection.kakaoNote}</p>
      </div>
    </section>
  );
}
