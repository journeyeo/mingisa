'use client';

import { useState, useEffect } from 'react';
import { useLocale } from '@/contexts/LocaleContext';

const SECTIONS = [
  { id: 'why', labelKey: 'why' as const },
  { id: 'pricing', labelKey: 'pricing' as const },
  { id: 'how-it-works', labelKey: 'howItWorks' as const },
  { id: 'driver', labelKey: 'driver' as const },
];

export default function FloatingNav() {
  const { t } = useLocale();
  const [active, setActive] = useState<string>('');
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > 300);

      let current = '';
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = section.id;
        }
      }
      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <>
      {/* Mobile: horizontal dots, bottom center */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex flex-row items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={t.nav[section.labelKey]}
              className="flex items-center justify-center"
            >
              <span
                className={`block rounded-full transition-all duration-200 ${
                  isActive ? 'w-2.5 h-2.5 bg-gold-500' : 'w-2 h-2 bg-gray-300'
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Desktop: vertical dots, right center */}
      <div
        className="hidden md:flex fixed right-5 top-1/2 -translate-y-1/2 z-40 flex-col items-end gap-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {SECTIONS.map((section) => {
          const isActive = active === section.id;
          const label = t.nav[section.labelKey];
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center gap-2 group"
              aria-label={label}
            >
              <span
                className={`
                  text-xs font-medium whitespace-nowrap transition-all duration-200
                  ${hovered || isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'}
                  ${isActive ? 'text-navy-900' : 'text-gray-400 group-hover:text-navy-900'}
                `}
              >
                {label}
              </span>
              <span
                className={`block rounded-full transition-all duration-200 ${
                  isActive ? 'w-2.5 h-2.5 bg-gold-500' : 'w-2 h-2 bg-gray-300 group-hover:bg-gray-500'
                }`}
              />
            </a>
          );
        })}
      </div>
    </>
  );
}
