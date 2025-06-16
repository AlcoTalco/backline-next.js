'use client';

import { useRef, useState, useEffect, ReactNode } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface HorizontalCarouselProps {
  children: ReactNode;
}

export default function HorizontalCarousel({ children }: HorizontalCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Revisa el estado del scroll para mostrar/ocultar las flechas
  const checkArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 5); // Pequeño umbral para que no aparezca al instante
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  // Función para desplazar el carrusel
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    // Se asegura de que las flechas tengan el estado correcto al cargar
    checkArrows(); 
    const currentRef = scrollRef.current;
    currentRef?.addEventListener('scroll', checkArrows);
    // Un observador de redimensión para recalcular si cambia el tamaño de la ventana
    const resizeObserver = new ResizeObserver(checkArrows);
    if (currentRef) resizeObserver.observe(currentRef);

    return () => {
      currentRef?.removeEventListener('scroll', checkArrows);
      if (currentRef) resizeObserver.unobserve(currentRef);
    };
  }, [children]);

  return (
    // 'group' permite que los hijos (las flechas) reaccionen al hover sobre el padre
    <div className="relative group">
      {/* Botón Izquierdo */}
      <button
        onClick={() => scroll('left')}
        className={`absolute top-1/2 -left-4 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-zinc-800/80 text-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed`}
        disabled={!showLeftArrow}
      >
        <CaretLeft size={24} className="mx-auto" />
      </button>

      {/* Contenedor Deslizable - VOLVEMOS A FLEXBOX */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
      >
        {children}
      </div>

      {/* Botón Derecho */}
      <button
        onClick={() => scroll('right')}
        className={`absolute top-1/2 -right-4 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-zinc-800/80 text-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed`}
        disabled={!showRightArrow}
      >
        <CaretRight size={24} className="mx-auto" />
      </button>
    </div>
  );
}