'use client';

import { useState } from 'react';
import Link from 'next/link';
import { catalog, categories } from '@/lib/catalogData';
import HorizontalCarousel from './HorizontalCarousel';
import ProductCarouselCard from './ProductCarouselCard';
import BackToTopButton from '../ui/BackToTopButton';
import { MagnifyingGlass } from '@phosphor-icons/react';

const CartPageClient = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="mb-16 text-center">
          <h1 className="font-headline text-5xl font-bold uppercase text-white md:text-7xl">
            Catálogo 
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Explora por categoría, haz clic en un producto para ver detalles o usa el botón + para añadirlo rápidamente a tu cotización.
          </p>
          <div className="relative mx-auto mt-8 max-w-lg">
            <input
              type="text"
              placeholder="Buscar un instrumento o marca..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input w-full pl-10"
            />
            <MagnifyingGlass
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
            />
          </div>
        </div>

        {/* Contenedor de todos los carruseles */}
        <div className="space-y-16">
          {categories.map(category => {
            // 1. Filtramos todos los productos que coinciden
            const filteredProducts = catalog.filter(product => 
              product.category === category.id && 
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            
            if (filteredProducts.length === 0) return null;

            return (
              // 2. CAMBIO CLAVE: Se añade la clase scroll-mt-24 para el margen del scroll
              <section key={category.id} id={category.id} className="scroll-mt-24">
                <div className="mb-4 flex items-baseline justify-between">
                  <h2 className="font-headline text-3xl font-bold">{category.name}</h2>
                  <Link href={`/categoria/${category.id}`} className="text-sm font-bold text-gold hover:underline">
                    Ver más
                  </Link>
                </div>
                {/* 3. CAMBIO CLAVE: Pasamos la lista COMPLETA de productos, sin el .slice() */}
                <HorizontalCarousel>
                  {filteredProducts.map(product => (
                    <ProductCarouselCard key={product.id} product={product} />
                  ))}
                </HorizontalCarousel>
              </section>
            );
          })}
        </div>
      </div>
      <BackToTopButton />
    </>
  );
};

export default CartPageClient;