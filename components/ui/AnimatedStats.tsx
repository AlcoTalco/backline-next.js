'use client';

import { useState, useRef, useEffect } from 'react';
import StatItem from './StatItem';

const stats = [
  { value: 198, label: 'Eventos Realizados' },
  { value: 147, label: 'Artistas Nacionales' },
  { value: 19, label: 'Artistas Internacionales' },
  { value: 97, label: 'Ciudades Cubiertas' },
];

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 } // La animación empieza cuando el 50% es visible
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => { if (currentRef) observer.unobserve(currentRef); };
  }, []);

  // Ahora es un grid de 2x2 para ser más compacto
  return (
    <div ref={ref} className="grid grid-cols-2 gap-x-8 gap-y-10">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          endValue={stat.value}
          label={stat.label}
          startAnimation={isVisible}
        />
      ))}
    </div>
  );
}