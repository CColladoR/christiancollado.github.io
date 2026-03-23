
import React from 'react';
import { Twitter, Mail, AtSign, Instagram, Music2, Linkedin } from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const socials = [
    { name: 'Instagram', icon: <Instagram size={18} />, url: 'https://instagram.com/ccollado_r', color: 'hover:bg-pink-50 hover:text-pink-600 dark:hover:bg-pink-500/20 dark:hover:text-pink-300', label: 'Seguir a Christian Collado en Instagram' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/christian-collado/', color: 'hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-500/20 dark:hover:text-blue-300', label: 'Conectar con Christian Collado en LinkedIn' },
    { name: 'TikTok', icon: <Music2 size={18} />, url: 'https://www.tiktok.com/@ccr1o', color: 'hover:bg-slate-100 hover:text-black dark:hover:bg-white/20 dark:hover:text-white', label: 'Seguir a Christian Collado en TikTok' },
    { name: 'X', icon: <Twitter size={18} />, url: 'https://x.com/ccollado_r', color: 'hover:bg-gray-100 hover:text-black dark:hover:bg-white/20 dark:hover:text-white', label: 'Seguir a Christian Collado en X (Twitter)' },
    { name: 'Threads', icon: <AtSign size={18} />, url: 'https://www.threads.com/@ccollado_r', color: 'hover:bg-purple-50 hover:text-purple-600 dark:hover:bg-purple-500/20 dark:hover:text-purple-300', label: 'Seguir a Christian Collado en Threads' },
    { name: 'Email', icon: <Mail size={18} />, url: 'mailto:christian@difoosion.com', color: 'hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/20 dark:hover:text-red-300', label: 'Enviar un correo electrónico a Christian Collado' },
  ];

  return (
    <div className="mt-8 relative">
      <div className="relative p-4 md:p-6 bg-white dark:bg-white/[0.02] backdrop-blur-2xl rounded-[2.5rem] border border-black/[0.03] dark:border-white/[0.08] shadow-xl shadow-black/[0.02] overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-2xl rounded-full -mr-16 -mt-16 pointer-events-none" aria-hidden="true"></div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`flex items-center gap-3 px-3 md:px-5 py-3 rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-black/40 shadow-sm transition-all duration-500 ${social.color} hover:scale-[1.02] active:scale-95 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500`}
            >
              <span className="opacity-60 group-hover/btn:opacity-100 transition-opacity flex-shrink-0" aria-hidden="true">
                {social.icon}
              </span>
              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] truncate">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
