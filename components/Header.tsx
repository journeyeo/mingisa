'use client';

import { useState, useEffect } from 'react';
import { useLocale, type Locale } from '@/contexts/LocaleContext';
import ContactButtons from './ContactButtons';
import ShareButton from './ShareButton';

export default function Header() {
  const { locale, setLocale, t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#why', label: t.nav.why },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#how-it-works', label: t.nav.howItWorks },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm shadow-black/5'
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center shrink-0">
              <svg viewBox="0 0 28 28" width="26" height="26">
                <path d="M 3,22 L 3,6 L 14,15 L 25,6 L 25,22" fill="none" stroke="white" strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 3,22 L 3,6 L 14,15 L 25,6 L 25,22" fill="none" stroke="black" strokeWidth="1.5" strokeDasharray="3,2.5" strokeLinecap="round" />
              </svg>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-navy-900 text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center bg-black/5 rounded-full p-0.5">
              {(['ja', 'ko', 'zh', 'en'] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLocale(lang)}
                  className={`
                    px-3 py-1 rounded-full text-xs font-bold uppercase transition-all duration-200
                    ${locale === lang
                      ? 'bg-gold-500 text-navy-900'
                      : 'text-gray-400 hover:text-navy-900'
                    }
                  `}
                >
                  {lang}
                </button>
              ))}
            </div>

            {/* Contact icons - desktop only */}
            <div className="hidden md:flex items-center gap-2">
              <ShareButton />
              <ContactButtons size="icon" />
            </div>

            {/* Hamburger - mobile only */}
            <button
              className="md:hidden text-navy-800 p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border border-black/5 shadow-lg rounded-2xl mb-4 p-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-600 hover:text-navy-900 py-2 text-base font-medium border-b border-black/5 last:border-0"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
