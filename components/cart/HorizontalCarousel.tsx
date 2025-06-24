// /components/HorizontalCarousel.tsx

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

  const checkArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

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
    checkArrows(); 
    const currentRef = scrollRef.current;
    currentRef?.addEventListener('scroll', checkArrows);
    const resizeObserver = new ResizeObserver(checkArrows);
    if (currentRef) resizeObserver.observe(currentRef);

    return () => {
      currentRef?.removeEventListener('scroll', checkArrows);
      if (currentRef) resizeObserver.unobserve(currentRef);
    };
  }, [children]);

  return (
    <div className="relative group">
      <button
        onClick={() => scroll('left')}
        className={`absolute top-1/2 -left-4 z-10 -translate-y-1/2 h-10 w-10 rounded-full bg-zinc-800/80 text-white shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 disabled:opacity-0 disabled:cursor-not-allowed`}
        disabled={!showLeftArrow}
      >
        <CaretLeft size={24} className="mx-auto" />
      </button>

      {/* CAMBIO CLAVE: Añadimos 'items-start'.
        Esto evita que las tarjetas más cortas se estiren para igualar la altura de las más altas.
        Cada tarjeta mantendrá su propia altura definida, y como ahora todas son iguales gracias
        a la tarjeta blindada, se alinearán perfectamente en la parte superior.
      */}
      <div
        ref={scrollRef}
        className="flex items-start gap-4 overflow-x-auto pb-4 scrollbar-hide"
      >
        {children}
      </div>

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