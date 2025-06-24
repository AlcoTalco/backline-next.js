'use client';

import { useRef, useState } from 'react';
import type { Product } from '@/lib/catalogData';
import ProductCarouselCard from '../ProductCarouselCard';

interface CategoryCarouselProps {
  title: string;
  products: Product[];
}

export default function CategoryCarousel({ title, products }: CategoryCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // El arrastre es más sensible
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="space-y-4 overflow-hidden"> {/* Añadimos overflow-hidden al contenedor de la sección */}
      <div className="flex items-baseline justify-between px-4 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl font-bold">{title}</h2>
      </div>
      
      {/* Contenedor del Carrusel con "sangrado" */}
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide cursor-grab active:cursor-grabbing px-4 sm:px-6 lg:px-8"
      >
        {products.map(product => (
          <ProductCarouselCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}