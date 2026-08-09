'use client';

import { useLocale } from '@/contexts/LocaleContext';
import ContactButtons from './ContactButtons';

export default function HowItWorks() {
  const { t } = useLocale();

  return (
    <section id="how-it-works" className="bg-white py-24 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold uppercase tracking-widest mb-4">
            <div className="w-8 h-px bg-gold-500" />
            Steps
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy-900 mb-4 tracking-tight">
            {t.howItWorks.title}
          </h2>
          <p className="text-gray-500 text-lg">{t.howItWorks.subtitle}</p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-px bg-gradient-to-r from-gold-500/30 via-gold-500/60 to-gold-500/30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {t.howItWorks.steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                {/* Step number circle */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-navy-900 flex flex-col items-center justify-center relative z-10 shadow-lg shadow-navy-900/30">
                    <span className="text-gold-400 text-xs font-bold tracking-widest">STEP</span>
                    <span className="text-white text-3xl font-black leading-none">{step.step}</span>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-xl scale-150 -z-10" />
                </div>

                <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base whitespace-pre-line">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact hint */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-gray-400 text-sm font-medium">@mingisa4136</p>
          <ContactButtons size="icon" />
        </div>
      </div>
    </section>
  );
}
