'use client';

import { useState, useEffect } from 'react';

interface StatItemProps {
  endValue: number;
  label: string;
  startAnimation: boolean; // Una propiedad para saber cuándo empezar a contar
}

export default function StatItem({ endValue, label, startAnimation }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Solo ejecuta la animación si startAnimation es true
    if (startAnimation) {
      let currentCount = 0;
      const duration = 2000; // La animación durará 2 segundos
      const stepTime = 20; // Se actualizará cada 20ms
      const totalSteps = duration / stepTime;
      const increment = endValue / totalSteps;

      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= endValue) {
          setCount(endValue);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(currentCount));
        }
      }, stepTime);

      // Limpia el intervalo si el componente se desmonta
      return () => clearInterval(timer);
    }
  }, [startAnimation, endValue]);

  return (
    <div className="text-center">
      <p className="font-headline text-5xl md:text-6xl font-bold text-gold">
        {count.toLocaleString('es-CO')}
      </p>
      <p className="text-white/80 uppercase tracking-widest mt-2">{label}</p>
    </div>
  );
}