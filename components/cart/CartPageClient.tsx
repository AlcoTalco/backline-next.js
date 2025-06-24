// /components/CartPageClient.tsx

'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { catalog, categories } from '@/lib/catalogData';
import HorizontalCarousel from './HorizontalCarousel';
import ProductCarouselCard from '../ProductCarouselCard';
import BackToTopButton from '../ui/BackToTopButton';
import { MagnifyingGlass } from '@phosphor-icons/react';

const CartPageClient = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Lista de subcategorías que no queremos mostrar en la vista principal.
  const hiddenSubCategories = [
    'Componentes de Batería', 
    'Componentes de Amplificador',
    'Platillos Individuales',
    'Soportes de Percusión',
  ];
  
  const filteredCategories = useMemo(() => {
    if (!searchTerm) {
      // Si no hay búsqueda, mostramos las categorías con sus productos filtrados
      return categories.map(category => {
        const products = catalog.filter(product => 
          product.category === category.id &&
          !hiddenSubCategories.includes(product.subCategory)
        );
        return { ...category, products };
      }).filter(category => category.products.length > 0);
    }
    
    // Si hay búsqueda, mostramos una única categoría "Resultados de Búsqueda"
    const searchResults = catalog.filter(product => 
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       product.brand?.toLowerCase().includes(searchTerm.toLowerCase())) &&
      !hiddenSubCategories.includes(product.subCategory)
    );

    if (searchResults.length === 0) return [];
    
    return [{
      id: 'search',
      name: 'Resultados de Búsqueda',
      products: searchResults
    }];
    
  }, [searchTerm]);

  return (
    <>
      <div className="container mx-auto px-4 py-16 pt-32">
        <div className="mb-16 text-center">
          <h1 className="font-headline text-5xl font-bold uppercase text-white md:text-7xl">
            Catálogo 
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            Explora por categoría o busca un instrumento específico. Haz clic para configurar o usa el botón (+) para añadirlo a tu cotización.
          </p>
          <div className="relative mx-auto mt-8 max-w-lg">
            <input
              type="text"
              placeholder="Buscar por instrumento o marca..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input w-full pl-10"
            />
            <MagnifyingGlass
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
            />
          </div>
        </div>

        <div className="space-y-16">
          {filteredCategories.length > 0 ? filteredCategories.map(category => (
            <section key={category.id} id={category.id} className="scroll-mt-24">
              <div className="mb-4 flex items-baseline justify-between">
                <h2 className="font-headline text-3xl font-bold">{category.name}</h2>
                {/* No mostramos "Ver más" para los resultados de búsqueda */}
                {category.id !== 'search' && (
                  <Link href={`/categoria/${category.id}`} className="text-sm font-bold text-gold hover:underline">
                    Ver más
                  </Link>
                )}
              </div>
              <HorizontalCarousel>
                {category.products.map(product => (
                  <ProductCarouselCard key={product.id} product={product} />
                ))}
              </HorizontalCarousel>
            </section>
          )) : (
            <p className="text-center text-white/50">No se encontraron productos que coincidan con tu búsqueda.</p>
          )}
        </div>
      </div>
      <BackToTopButton />
    </>
  );
};

export default CartPageClient;