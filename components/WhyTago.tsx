'use client';

import { useLocale } from '@/contexts/LocaleContext';

const icons = [
  // Smile / comfortable service
  <svg key="smile" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>,
  // Car / premium vehicles
  <svg key="car" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
  </svg>,
  // Price tag / payment
  <svg key="price" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>,
  // Chat bubble / easy inquiry
  <svg key="chat" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
  </svg>,
];

export default function WhyTago() {
  const { t } = useLocale();

  return (
    <section id="why" className="bg-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-gold-600 text-sm font-bold uppercase tracking-widest mb-4">
            <div className="w-8 h-px bg-gold-500" />
            {t.nav.why}
            <div className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-navy-900 mb-4 tracking-tight">
            {t.why.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.why.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.why.items.map((item, i) => (
            <div
              key={i}
              className="
                group relative p-8 rounded-2xl border border-gray-100
                hover:border-gold-400/50 hover:shadow-xl hover:shadow-gold-500/5
                transition-all duration-300 bg-white
              "
            >
              {/* Gold accent corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-2xl">
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[64px] border-l-transparent border-t-[64px] border-t-gold-500/5 group-hover:border-t-gold-500/15 transition-colors" />
              </div>

              {/* Icon */}
              <div className="
                w-14 h-14 rounded-xl bg-navy-900 text-gold-400
                flex items-center justify-center mb-6
                group-hover:bg-gold-500 group-hover:text-navy-900
                transition-all duration-300
              ">
                {icons[i]}
              </div>

              <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
