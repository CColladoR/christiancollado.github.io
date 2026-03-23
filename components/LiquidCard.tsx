
import React, { useRef, useEffect, useState } from 'react';

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
}

export const LiquidCard: React.FC<LiquidCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`liquid-glass relative overflow-hidden rounded-[2.5rem] p-8 transition-all duration-500 group ${className}`}
      style={{ 
        contain: 'paint',
        transform: isHovering ? 'translate3d(0, -4px, 0)' : 'translate3d(0, 0, 0)'
      }}
    >
      {/* Interactive Spotlight Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(99, 102, 241, 0.08), transparent 40%)`
        }}
      ></div>

      {/* Floating Animated Background Blobs */}
      <div 
        className="liquid-element-pulse absolute -top-24 -left-24 w-72 h-72 bg-indigo-600/5 dark:bg-indigo-400/5 rounded-full blur-3xl pointer-events-none opacity-60 will-change-transform transform-gpu"
        style={{ 
          transform: `translate3d(0, calc(var(--scroll-y) * 0.03), 0)`,
          animationDelay: '0s'
        }}
      ></div>
      <div 
        className="liquid-element-pulse absolute -bottom-24 -right-24 w-80 h-80 bg-blue-600/5 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none opacity-40 will-change-transform transform-gpu"
        style={{ 
          transform: `translate3d(0, calc(var(--scroll-y) * -0.02), 0)`,
          animationDelay: '-4s'
        }}
      ></div>
      
      {/* Inner Content with subtle parallax */}
      <div 
        className="relative z-10 transition-transform duration-500 ease-out"
        style={{
          transform: isHovering 
            ? `translate3d(${(mousePos.x - 50) * 0.05}px, ${(mousePos.y - 50) * 0.05}px, 0)` 
            : 'translate3d(0, 0, 0)'
        }}
      >
        {children}
      </div>
    </div>
  );
};
