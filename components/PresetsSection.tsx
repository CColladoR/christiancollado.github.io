
import React from 'react';
import { LiquidCard } from './LiquidCard';
import { Camera, Download, Layers, Smartphone, Monitor, CheckCircle2 } from 'lucide-react';

export const PresetsSection: React.FC = () => {
  return (
    <section className="mt-16 md:mt-32 relative group">
      <div className="reveal-text">
        <div className="flex items-center gap-3 mb-4 px-2">
          <span className="w-8 h-px bg-indigo-600/30 dark:bg-indigo-400/30" aria-hidden="true"></span>
          <h2 id="presets-heading" className="text-[10px] uppercase tracking-[0.5em] text-indigo-700 dark:text-indigo-400 font-black">Recursos Digitales</h2>
        </div>
        <p className="text-3xl md:text-5xl font-black text-black dark:text-white tracking-tighter leading-none mb-10 px-2">
          Edita tus fotos <span className="text-black/50 dark:text-white/50 italic font-light font-serif">como yo</span>
        </p>
      </div>

      <LiquidCard className="p-0 overflow-hidden border-none shadow-2xl bg-white dark:bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[inherit] overflow-hidden">
          <div className="lg:col-span-5 relative bg-zinc-100 dark:bg-black aspect-video lg:aspect-square xl:aspect-auto overflow-hidden group/visual">
            <img 
              src="https://images.unsplash.com/photo-1767022786924-b2b3cdf77999" 
              alt="Vista previa de fotografías editadas con los presets de Christian Collado" 
              className="w-full h-full object-cover opacity-90 transition-transform duration-[3s] group-hover/visual:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" aria-hidden="true"></div>
            
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></span>
                <span className="text-[8px] font-black uppercase tracking-widest text-white/90">Pack Actualizado 2026</span>
              </div>
              <div className="flex items-end gap-3">
                <span className="text-5xl md:text-6xl font-black text-white leading-none">5€</span>
                <span className="text-white/60 text-[9px] uppercase tracking-widest font-bold mb-1.5">Precio único</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 p-6 md:p-10 lg:p-14 flex flex-col justify-center bg-white dark:bg-zinc-950 lg:bg-transparent lg:dark:bg-transparent">
            <h3 className="text-2xl md:text-3xl xl:text-4xl font-black text-black dark:text-white mb-4 tracking-tighter">
              The Essentials Pack
            </h3>
            
            <p className="text-black/70 dark:text-white/70 text-base md:text-lg leading-relaxed font-light mb-8 max-w-xl">
              Mi flujo de trabajo comprimido en 5 ajustes prestablecidos para Adobe Lightroom. El estilo visual que define mis reviews y redes sociales, ahora a tu alcance.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10" aria-label="Características del pack">
              {[
                "Todo tipo de fotografía",
                "Texturas nítidas en gadgets",
                "Compatible con móvil y PC",
                "Instalación sencilla"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" aria-hidden="true" />
                  <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-wider text-black/80 dark:text-white/80">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 mt-auto">
              <a 
                href="https://ccr1o.gumroad.com/l/Lightroompresets" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/buy flex items-center justify-center gap-3 w-full sm:w-auto sm:flex-1 py-5 px-8 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 shadow-xl shadow-indigo-600/20 active:scale-95 text-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50"
              >
                <Download size={18} className="flex-shrink-0" aria-hidden="true" />
                <span>Comprar ahora en Gumroad</span>
              </a>
              
              <div className="flex items-center gap-4 px-2" aria-label="Formatos compatibles">
                <div className="flex flex-col items-center">
                  <Monitor size={16} className="text-black/40 dark:text-white/40 mb-1" aria-hidden="true" />
                  <span className="text-[7px] font-bold uppercase tracking-widest text-black/60 dark:text-white/60">Desktop</span>
                </div>
                <div className="w-px h-6 bg-black/10 dark:bg-white/10" aria-hidden="true"></div>
                <div className="flex flex-col items-center">
                  <Smartphone size={16} className="text-black/40 dark:text-white/40 mb-1" aria-hidden="true" />
                  <span className="text-[7px] font-bold uppercase tracking-widest text-black/60 dark:text-white/60">Mobile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LiquidCard>
    </section>
  );
};
