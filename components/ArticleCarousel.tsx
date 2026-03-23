
import React, { useEffect, useState, useRef } from 'react';
import { fetchLatestArticles } from '../services/rssService';
import { Article } from '../types';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export const ArticleCarousel: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchLatestArticles(5);
      setArticles(data);
      setLoading(false);
    };
    load();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="w-full h-96 flex items-center justify-center" aria-live="polite">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-2 border-indigo-600/10 border-t-indigo-600 rounded-full animate-spin"></div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/40 dark:text-white/40">Cargando artículos</span>
        </div>
      </div>
    );
  }

  if (articles.length === 0) return null;

  return (
    <div className="relative group/carousel">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 px-2 gap-8">
        <div className="reveal-text">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-indigo-600/30 dark:bg-indigo-400/30" aria-hidden="true"></span>
            <h2 id="articles-heading" className="text-[10px] uppercase tracking-[0.5em] text-indigo-700 dark:text-indigo-400 font-black">Actualidad</h2>
          </div>
          <p className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter leading-none">
            Últimas firmas <span className="text-black/50 dark:text-white/50 italic font-light font-serif">en Andro4all</span>
          </p>
        </div>
        
        <div className="flex gap-4 self-end reveal-text" style={{ animationDelay: '0.2s' }}>
          <button 
            onClick={() => scroll('left')}
            aria-label="Deslizar carrusel hacia la izquierda"
            className="group/btn p-5 rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-black shadow-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 transition-all duration-500 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <ChevronLeft size={20} className="group-hover/btn:-translate-x-1 transition-transform" aria-hidden="true" />
          </button>
          <button 
            onClick={() => scroll('right')}
            aria-label="Deslizar carrusel hacia la derecha"
            className="group/btn p-5 rounded-2xl border border-black/5 dark:border-white/5 bg-white dark:bg-black shadow-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:scale-105 transition-all duration-500 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <ChevronRight size={20} className="group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 md:gap-8 overflow-x-auto hide-scrollbar px-2 pb-16 snap-x snap-mandatory scroll-px-2"
        tabIndex={0}
        aria-label="Carrusel de noticias recientes"
      >
        {articles.map((article) => (
          <article 
            key={article.guid}
            className="flex-shrink-0 w-[85vw] md:w-[480px] snap-center md:snap-start"
          >
            <a 
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group/card relative focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/50 rounded-[2.5rem] overflow-hidden"
              aria-label={`Leer noticia: ${article.title}`}
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-zinc-900 shadow-2xl shadow-black/5 border border-black/[0.03] dark:border-white/[0.03]">
                <img 
                  src={article.thumbnail} 
                  alt="" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-[1.5s] group-hover/card:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg border border-black/5 dark:border-white/5">
                  <span className="text-[10px] font-black tracking-widest text-black dark:text-white uppercase">
                    {new Date(article.pubDate).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}
                  </span>
                </div>
              </div>

              <div className="mt-8 px-2">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-400">Christian Collado</span>
                  <span className="w-1 h-1 bg-black/20 dark:bg-white/20 rounded-full" aria-hidden="true"></span>
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/50 dark:text-white/50">Editorial</span>
                </div>
                <h3 className="text-2xl font-extrabold text-black dark:text-white leading-[1.4] mb-6 group-hover/card:text-indigo-600 dark:group-hover/card:text-indigo-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-black/40 dark:text-white/40 group-hover/card:text-black dark:group-hover/card:text-white transition-colors duration-500">
                  <div className="w-8 h-[2px] bg-indigo-600/20 dark:bg-indigo-400/20 group-hover/card:w-12 group-hover/card:bg-indigo-600 transition-all duration-500" aria-hidden="true"></div>
                  <span>Ver noticia completa</span>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};
