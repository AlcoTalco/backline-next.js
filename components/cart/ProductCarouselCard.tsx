'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import type { Product } from '@/lib/catalogData';
import { Plus } from '@phosphor-icons/react';

export default function ProductCarouselCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    // Detiene la navegación del Link para que solo se añada al carrito
    e.preventDefault();
    e.stopPropagation();
    
    // Solo permite añadir rápido si no hay opciones obligatorias
    if (product.options && product.options.length > 0) {
      // Si hay opciones, podrías optar por navegar a la página de detalle
      // o abrir un mini-modal en el futuro. Por ahora, lo dejamos así.
      alert(`Este producto tiene opciones. Por favor, ve a la página de detalle para configurarlo.`);
      return;
    }
    addToCart(product, []);
  };

  return (
    <Link href={`/productos/${product.id}`} className="group block w-48 flex-shrink-0 space-y-2 md:w-56">
      <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-zinc-800">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Botón de Añadir Rápido */}
        <button
          onClick={handleQuickAdd}
          className="absolute top-2 right-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gold/80 text-black backdrop-blur-sm transition-all duration-300 hover:bg-gold hover:scale-110"
        >
          <Plus size={20} weight="bold" />
        </button>
      </div>
      <h4 className="font-bold text-white truncate">{product.name}</h4>
    </Link>
  );
}