'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ja from '@/messages/ja.json';
import en from '@/messages/en.json';
import ko from '@/messages/ko.json';
import zh from '@/messages/zh.json';

export type Locale = 'ja' | 'en' | 'ko' | 'zh';

const messages: Record<Locale, typeof ja> = { ja, en, ko, zh };

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof ja;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'ja',
  setLocale: () => {},
  t: ja,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ja');

  useEffect(() => {
    const saved = localStorage.getItem('mingisa-locale') as Locale;
    if (saved === 'ja' || saved === 'en' || saved === 'ko' || saved === 'zh') {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    localStorage.setItem('mingisa-locale', next);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: messages[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export const useLocale = () => useContext(LocaleContext);
