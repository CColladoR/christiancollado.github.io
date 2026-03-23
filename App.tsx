
import React, { useState } from 'react';
import { LiquidCard } from './components/LiquidCard';
import { SocialLinks } from './components/SocialLinks';
import { ArticleCarousel } from './components/ArticleCarousel';
import { PresetsSection } from './components/PresetsSection';
import { Sun, Moon, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  const profileImageUrl = "https://raw.githubusercontent.com/CColladoR/profilepic/main/christian.jpg";
  
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto px-6 py-8 md:py-20 transition-colors duration-500">
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:bg-indigo-600 focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:ring-4 focus:ring-indigo-300 transition-all"
      >
        Saltar al contenido principal
      </a>

      <div className="liquid-aura top-20 -left-40 opacity-50 transform-gpu" aria-hidden="true"></div>
      <div className="liquid-aura bottom-0 -right-40 opacity-30 transform-gpu" style={{ animationDelay: '-5s' }} aria-hidden="true"></div>

      <nav className="flex justify-between items-center mb-12 md:mb-32 relative z-50" aria-label="Navegación principal">
        <div className="flex items-center">
          <span className="text-2xl font-black tracking-tighter text-black dark:text-white" aria-hidden="true">CC.</span>
          <span className="sr-only">Christian Collado</span>
        </div>
        <div className="hidden md:flex gap-12 text-[10px] uppercase tracking-[0.3em] font-bold text-black/60 dark:text-white/60">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-300">Inicio</a>
          <a href="#articles" className="hover:text-black dark:hover:text-white transition-colors duration-300">Artículos</a>
          <a href="#presets" className="hover:text-black dark:hover:text-white transition-colors duration-300">Presets</a>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-3 rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-black/40 text-black dark:text-white hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
          >
            {theme === 'light' ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
          </button>
          <a 
            href="mailto:christian@difoosion.com" 
            className="px-5 py-3 md:px-8 md:py-3 rounded-full bg-black text-white dark:bg-white dark:text-black text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all"
          >
            Contactar
          </a>
        </div>
      </nav>

      <main id="main-content" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <section className="lg:col-span-7 relative">
          <div className="reveal-text">
            <header className="mb-10 md:mb-16">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="text-indigo-600 dark:text-indigo-400 font-black text-xs uppercase tracking-[0.4em]">¡Hola! 👋</span>
                <div className="h-px w-24 bg-indigo-600/20 dark:bg-indigo-400/20" aria-hidden="true"></div>
              </div>
              
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-black dark:text-white leading-none mb-10">
                Soy<br />
                <div className="flex items-center gap-4 md:inline-flex">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-black/80 to-black/60 dark:from-white dark:via-white/80 dark:to-white/60">Christian</span>
                  {/* Avatar compacto solo para móviles */}
                  <div className="md:hidden w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-indigo-600/10 shadow-lg rotate-3 transform-gpu shrink-0">
                    <img src={profileImageUrl} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </h1>
            </header>
            
            <div className="space-y-10">
              <p className="text-xl md:text-3xl font-light text-black/80 dark:text-white/80 leading-[1.4]">
                Director de <span className="text-black dark:text-white font-bold relative inline-block">Andro4all</span>, medio líder sobre tecnología integrado en <span className="font-semibold text-black dark:text-white">La Vanguardia</span> (2023-2025) y actualmente vertical de tecnología de <span className="font-semibold text-black dark:text-white">La Razón</span>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-700 dark:text-indigo-400">Formación</h3>
                  <p className="text-base text-black/70 dark:text-white/70">Técnico superior en desarrollo de aplicaciones multiplataforma.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-700 dark:text-indigo-400">Experiencia</h3>
                  <p className="text-base text-black/70 dark:text-white/70">Más de 10 años y 12.000 artículos analizando el mundo tecnológico desde dentro.</p>
                </div>
              </div>
              
              <div id="contact" className="pt-8 border-t border-black/10 dark:border-white/10 scroll-mt-20">
                <SocialLinks />
              </div>
            </div>
          </div>
        </section>

        <aside className="lg:col-span-5 flex flex-col gap-8 reveal-text" style={{ animationDelay: '0.1s' }}>
          {/* Tarjeta de imagen grande solo visible en tablets/escritorio */}
          <div className="hidden md:block relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 aspect-[4/5] transform-gpu shadow-xl shadow-black/[0.02]">
            <img 
              src={profileImageUrl} 
              alt="Retrato de Christian Collado" 
              className="w-full h-full object-cover image-soft-mask"
              loading="eager"
            />
          </div>

          <LiquidCard className="flex flex-col items-center justify-center py-12 text-center">
            <div className="text-7xl md:text-9xl font-black text-black dark:text-white tracking-tighter mb-2" aria-label="Más de doce mil artículos publicados">+12k</div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-black/60 dark:text-white/60">Artículos Publicados</h3>
          </LiquidCard>

          <LiquidCard className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase size={16} className="text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-black dark:text-white">Trayectoria</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-px before:bg-black/10 dark:before:bg-white/10" role="list">
              {[
                { date: '2025 - PRESENTE', title: 'Director de Andro4all', place: 'La Razón' },
                { date: '2023 - 2025', title: 'Director de Andro4all', place: 'La Vanguardia' },
                { date: '2016 - 2023', title: 'Editor y Coordinador', place: 'Andro4all / Difoosion' }
              ].map((item, i) => (
                <div key={i} className="pl-8 relative group/item" role="listitem">
                  <div className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full bg-white dark:bg-black border-2 border-indigo-600 dark:border-indigo-400 z-10 transition-transform group-hover/item:scale-125" aria-hidden="true"></div>
                  <time className="text-[8px] font-black tracking-widest text-indigo-700 dark:text-indigo-400 block mb-1 uppercase">{item.date}</time>
                  <h4 className="text-sm font-black text-black dark:text-white leading-tight">{item.title}</h4>
                  <p className="text-xs text-black/50 dark:text-white/40 font-bold uppercase tracking-wider mt-1">{item.place}</p>
                </div>
              ))}
            </div>
          </LiquidCard>
        </aside>
      </main>

      <section id="articles" className="mt-20 md:mt-40 scroll-mt-20" aria-labelledby="articles-heading">
        <ArticleCarousel />
      </section>

      <section id="presets" className="scroll-mt-20" aria-labelledby="presets-heading">
        <PresetsSection />
      </section>

      <footer className="mt-16 md:mt-32 pt-12 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
        <div className="flex items-center gap-4">
          <span className="text-lg font-black tracking-tighter" aria-hidden="true">CC.</span>
          <p className="text-[9px] text-black/50 dark:text-white/50 uppercase tracking-[0.3em] font-bold">
            &copy; {new Date().getFullYear()} — CColladoR.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
