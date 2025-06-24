// /components/ProductCarouselCard.tsx

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import type { CatalogItem, BaseProduct } from '@/lib/catalogData';
import { Plus, Wrench } from '@phosphor-icons/react';
import { useState } from 'react';

export default function ProductCarouselCard({ product }: { product: CatalogItem }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const isKit = product.type === 'ProductKit';

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isKit) {
      document.getElementById(`link-${product.id}`)?.click();
      return;
    }
    
    addToCart(product as BaseProduct, []);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    // CAMBIO ESTRUCTURAL 1: El Link ahora es un flex-col.
    // Esto significa que la tarjeta entera se rige por un layout de columna flexible.
    // 'h-full' asegura que ocupe toda la altura que le asigne su contenedor (el carrusel).
    <Link 
      id={`link-${product.id}`}
      href={`/productos/${product.id}`} 
      className="group h-full w-56 flex-shrink-0 flex flex-col space-y-3"
    >
      {/* La imagen no cambia, sigue siendo consistente */}
      <div className="relative aspect-square w-full flex-shrink-0 overflow-hidden rounded-lg border border-zinc-800 group-hover:border-gold transition-colors duration-300">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div 
          onClick={handleQuickAdd}
          aria-label={isKit ? "Configurar producto" : "Añadir a cotización"}
          className={`absolute top-2 right-2 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black backdrop-blur-sm transition-all duration-300 hover:scale-110 ${isAdded ? 'bg-green-500' : 'bg-gold/80 hover:bg-gold'}`}
        >
          {isKit ? <Wrench size={20} weight="bold" /> : <Plus size={20} weight="bold" />}
        </div>
      </div>
      
      {/* CAMBIO ESTRUCTURAL 2: Este div ahora crece para llenar el espacio disponible. */}
      <div className="flex flex-grow flex-col">
        <p className="text-xs font-bold uppercase text-gold tracking-widest">{product.subCategory}</p>
        
        {/* La clase line-clamp-2 ahora funcionará gracias al plugin. */}
        <h4 
          className="font-bold text-white line-clamp-2" 
          title={product.name}
        >
          {product.name}
        </h4>
      </div>
    </Link>
  );
}