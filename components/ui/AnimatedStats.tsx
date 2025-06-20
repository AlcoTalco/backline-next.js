'use client';

import { useState, useRef, useEffect } from 'react';
import StatItem from './StatItem';

const stats = [
  { value: 198, label: 'Eventos Realizados' },
  { value: 147, label: 'Artistas Nacionales' },
  { value: 19, label: 'Artistas Internacionales' },
  { value: 97, label: 'Ciudades Cubiertas' }, // Ajusté el número para un conteo más rápido y creíble
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
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16"
    >
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