'use client';

import { useState } from 'react';
import { useLocale } from '@/contexts/LocaleContext';

const KAKAO_URL = 'https://pf.kakao.com/_kszRX/chat';
const WECHAT_ID = 'mingisa4136';

function LineIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );
}

function WhatsAppIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function KakaoIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.477 3 2 6.589 2 11.006c0 2.73 1.664 5.122 4.197 6.587L5.1 21l4.328-2.185c.837.188 1.703.287 2.572.287 5.523 0 10-3.589 10-8.006S17.523 3 12 3z" />
    </svg>
  );
}

function InstagramIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function WeChatIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.832.403c-.498-.931-.78-1.99-.78-3.104 0-3.546 3.218-6.427 7.187-6.427.294 0 .584.018.87.052C15.246 4.564 12.239 2.188 8.691 2.188zm-2.46 3.809a.983.983 0 1 1 0 1.966.983.983 0 0 1 0-1.966zm4.918 0a.983.983 0 1 1 0 1.966.983.983 0 0 1 0-1.966zM24 13.783c0-3.374-3.218-6.12-7.187-6.12-3.969 0-7.187 2.746-7.187 6.12 0 3.374 3.218 6.12 7.187 6.12.868 0 1.7-.13 2.476-.37a.75.75 0 0 1 .622.085l1.658.972a.285.285 0 0 0 .146.047.257.257 0 0 0 .257-.257c0-.063-.025-.123-.042-.185l-.34-1.29a.515.515 0 0 1 .185-.579C23.016 17.606 24 15.784 24 13.783zm-9.826-1.13a.857.857 0 1 1 0-1.713.857.857 0 0 1 0 1.714zm5.278 0a.857.857 0 1 1 0-1.713.857.857 0 0 1 0 1.714z" />
    </svg>
  );
}

const CHANNELS_TOP = [
  { id: 'kakao' as const, label: 'KakaoTalk', url: KAKAO_URL, bg: '#FFCD00', dark: true },
  { id: 'instagram' as const, label: 'Instagram', url: 'https://instagram.com/mingisa4136', bg: '#E1306C', dark: false },
];

const CHANNELS_BOTTOM = [
  { id: 'line' as const, label: 'LINE', url: 'https://line.me/ti/p/~mingisa4136', bg: '#06C755', dark: false },
  { id: 'whatsapp' as const, label: 'WhatsApp', url: 'https://wa.me/821079701587', bg: '#25D366', dark: false },
  { id: 'wechat' as const, label: 'WeChat', url: null, bg: '#07C160', dark: false },
];

const CHANNELS = [...CHANNELS_TOP, ...CHANNELS_BOTTOM];

const ICONS = { line: LineIcon, whatsapp: WhatsAppIcon, kakao: KakaoIcon, instagram: InstagramIcon, wechat: WeChatIcon };

interface Props {
  size?: 'icon' | 'default';
  className?: string;
}

const WECHAT_MODAL_LABELS = {
  ko: { desc: '위챗 앱에서 친구 검색으로\nID를 검색해 추가해주세요', open: '위챗 앱 열기', close: '닫기' },
  ja: { desc: 'WeChatアプリの友達検索で\nIDを検索して追加してください', open: 'WeChatアプリを開く', close: '閉じる' },
  en: { desc: 'Search for this ID in WeChat\nto add us as a friend', open: 'Open WeChat', close: 'Close' },
  zh: { desc: '在微信App中搜索此ID\n添加好友', open: '打开微信', close: '关闭' },
};

function WeChatModal({ onClose }: { onClose: () => void }) {
  const { locale } = useLocale();
  const labels = WECHAT_MODAL_LABELS[locale] ?? WECHAT_MODAL_LABELS.en;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl px-8 py-7 w-72 text-center flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center gap-2">
          <WeChatIcon size={20} />
          <p className="text-base font-bold text-gray-800">WeChat</p>
        </div>
        <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-gray-700">{WECHAT_ID}</span>
          <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#e8f5e9] text-[#07C160]">
            복사됨!
          </span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
          {labels.desc}
        </p>
        <a
          href="weixin://"
          className="w-full py-2.5 rounded-full font-bold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ backgroundColor: '#07C160' }}
        >
          {labels.open}
        </a>
        <button
          onClick={onClose}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          {labels.close}
        </button>
      </div>
    </div>
  );
}

function WeChatButton({ size, style, className }: { size: 'icon' | 'default'; style: React.CSSProperties; className: string }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(WECHAT_ID);
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        title="WeChat"
        className={size === 'icon'
          ? 'w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95'
          : className}
        style={style}
      >
        <WeChatIcon size={size === 'icon' ? 16 : 17} />
        {size === 'default' && <span className="truncate">WeChat</span>}
      </button>
      {open && <WeChatModal onClose={() => setOpen(false)} />}
    </>
  );
}

export default function ContactButtons({ size = 'default', className = '' }: Props) {
  if (size === 'icon') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        {CHANNELS.map((ch) => {
          if (ch.id === 'wechat') {
            return (
              <WeChatButton
                key="wechat"
                size="icon"
                style={{ backgroundColor: ch.bg, color: 'white' }}
                className=""
              />
            );
          }
          const Icon = ICONS[ch.id];
          return (
            <a
              key={ch.id}
              href={ch.url!}
              target="_blank"
              rel="noopener noreferrer"
              title={ch.label}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
              style={{ backgroundColor: ch.bg, color: ch.dark ? '#1a1a1a' : 'white' }}
            >
              <Icon size={16} />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center gap-2 sm:gap-3 w-full ${className}`}>
      {/* 상단: 카카오·인스타 */}
      <div className="flex justify-center gap-2 sm:gap-3">
        {CHANNELS_TOP.map((ch) => {
          const Icon = ICONS[ch.id];
          return (
            <a
              key={ch.id}
              href={ch.url!}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
              style={{ backgroundColor: ch.bg, color: ch.dark ? '#1a1a1a' : 'white' }}
            >
              <Icon size={17} />
              <span className="truncate">{ch.label}</span>
            </a>
          );
        })}
      </div>
      {/* 하단: LINE·WhatsApp·WeChat */}
      <div className="flex justify-center gap-2 sm:gap-3">
        {CHANNELS_BOTTOM.map((ch) => {
          if (ch.id === 'wechat') {
            return (
              <WeChatButton
                key="wechat"
                size="default"
                style={{ backgroundColor: ch.bg, color: 'white' }}
                className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
              />
            );
          }
          const Icon = ICONS[ch.id];
          return (
            <a
              key={ch.id}
              href={ch.url!}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 sm:px-6 sm:py-3.5 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105 active:scale-95 hover:shadow-lg"
              style={{ backgroundColor: ch.bg, color: 'white' }}
            >
              <Icon size={17} />
              <span className="truncate">{ch.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
