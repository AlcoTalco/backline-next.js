'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image'; // ¡Importante! Usamos Next/Image

// --- Iconos SVG (sin cambios) ---
const CaretLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
  </svg>
);

const CaretRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
  </svg>
);

// Actualizamos las props para recibir objetos con src y alt
interface CarouselImage {
  src: string;
  alt: string;
}

interface SolutionsCarouselProps {
  images: CarouselImage[]; // Ahora es un array de objetos
  autoPlayInterval?: number;
}

export default function SolutionsCarousel({ images, autoPlayInterval = 4000 }: SolutionsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // NUEVO: Estado para saber si el componente está visible

  const carouselRef = useRef<HTMLDivElement>(null); // NUEVO: Ref para el contenedor principal
  const touchStartRef = useRef(0);
  const lastTouchXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  
  // NUEVO: Efecto para el Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          // observer.unobserve(entry.target); // Opcional: si solo quieres que se active una vez
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 } // Se activa cuando el 10% del carrusel es visible
    );

    const currentRef = carouselRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // MEJORADO: Efecto para gestionar el auto-play
  useEffect(() => {
    // Solo activa el timer si el carrusel es visible y no está pausado por el hover
    if (isVisible && !isPaused) {
      timerRef.current = setInterval(goToNext, autoPlayInterval);
    }

    // Limpiamos el timer si deja de ser visible, se pausa, o el componente se desmonta
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isVisible, isPaused, autoPlayInterval, goToNext]);


  // Lógica de Swipe (sin cambios mayores, pero usando la ref correcta)
  const handleTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    touchStartRef.current = e.targetTouches[0].clientX;
    lastTouchXRef.current = e.targetTouches[0].clientX;
    if (slidesContainerRef.current) {
      slidesContainerRef.current.style.transition = 'none';
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || !slidesContainerRef.current) return;
    lastTouchXRef.current = e.targetTouches[0].clientX;
    const diff = touchStartRef.current - lastTouchXRef.current;
    slidesContainerRef.current.style.transform = `translateX(calc(-${currentIndex * 100}% - ${diff}px))`;
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current || !slidesContainerRef.current) return;
    isDraggingRef.current = false;
    const diff = touchStartRef.current - lastTouchXRef.current;
    const swipeThreshold = 50;
    
    slidesContainerRef.current.style.transition = 'transform 0.5s ease-in-out';

    if (diff > swipeThreshold) {
      goToNext();
    } else if (diff < -swipeThreshold) {
      goToPrevious();
    } else {
      slidesContainerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  };

  return (
    <div
      ref={carouselRef} // Asignamos la ref aquí
      className="relative h-[510px] w-full overflow-hidden rounded-lg shadow-lg group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      // ARIA para accesibilidad
      role="region"
      aria-roledescription="carousel"
      aria-label="Galería de soluciones"
    >
      <div
        ref={slidesContainerRef}
        className="flex h-full"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isDraggingRef.current ? 'none' : 'transform 0.5s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div key={image.src} className="h-full w-full flex-shrink-0 relative">
            <Image
              src={image.src}
              alt={image.alt}
              fill // Usa fill para que se ajuste al contenedor padre
              sizes="(max-width: 768px) 100vw, 50vw" // Ayuda a Next.js a elegir el tamaño correcto
              className="object-cover"
              priority={index === 0} // Carga la primera imagen con prioridad
              draggable="false"
            />
          </div>
        ))}
      </div>
      
      <div className="hidden md:block">
        <button onClick={goToPrevious} className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold" aria-label="Imagen anterior">
          <CaretLeftIcon />
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold" aria-label="Siguiente imagen">
          <CaretRightIcon />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-gold' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Ir a la imagen ${index + 1}`}
            aria-current={currentIndex === index} // Accesibilidad para el punto actual
          />
        ))}
      </div>
    </div>
  );
}