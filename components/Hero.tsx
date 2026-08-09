'use client';

import { useLocale } from '@/contexts/LocaleContext';
import ContactButtons from './ContactButtons';

export default function Hero() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen bg-navy-900 flex items-center justify-center overflow-hidden">
      {/* Green glow blobs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-gold-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-gold-500/20 border border-gold-500/50 text-gold-300 text-sm font-semibold px-5 py-2 rounded-full mb-10">
          <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse-slow" />
          {t.hero.badge}
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight whitespace-pre-line tracking-tight">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-400 mb-12 whitespace-pre-line leading-relaxed font-medium">
          {t.hero.subtitle}
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-6 mb-6">
          <ContactButtons />
          <a
            href="#why"
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-full
              border border-white/20 text-white/80 font-semibold text-base
              hover:bg-white/5 hover:border-white/40
              transition-all duration-300
            "
          >
            {t.nav.why}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        <p className="text-gray-500 text-sm font-medium">{t.hero.ctaSub}</p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#why"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors z-20"
      >
        <div className="w-px h-10 bg-gradient-to-b from-gray-400 to-transparent" />
      </a>
    </section>
  );
}
