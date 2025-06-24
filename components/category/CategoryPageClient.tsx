// /components/category/CategoryPageClient.tsx

'use client';

import { useMemo } from 'react';
import type { CatalogItem } from '@/lib/catalogData';
import ProductCarouselCard from '../ProductCarouselCard';

interface CategoryPageClientProps {
  categoryName: string;
  products: CatalogItem[];
}

export default function CategoryPageClient({ categoryName, products }: CategoryPageClientProps) {
  
  const groupedProducts = useMemo(() => {
    const groups = products.reduce((acc, product) => {
      const key = product.subCategory || 'Otros';
      if (!acc[key]) acc[key] = [];
      acc[key].push(product);
      return acc;
    }, {} as Record<string, CatalogItem[]>);

    // =======================================================================
    // == LÓGICA DE ORDENAMIENTO DE SUBCATEGORÍAS                           ==
    // =======================================================================
    // Define el orden deseado para las subcategorías.
    const subCategoryOrder = [
      'Baterías Completas', // ¡Primero!
      'Redoblantes',
      'Platillos',
      'Platillos Individuales',
      'Componentes de Batería', // Al final.
      // Añade otras subcategorías aquí en el orden que desees.
    ];

    // Ordenamos las entradas del objeto agrupado según nuestro array de orden.
    return Object.entries(groups).sort(([a], [b]) => {
      const indexA = subCategoryOrder.indexOf(a);
      const indexB = subCategoryOrder.indexOf(b);
      // Si ambos están en la lista de orden, los comparamos por su índice.
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      // Si solo 'a' está en la lista, va primero.
      if (indexA !== -1) return -1;
      // Si solo 'b' está en la lista, va primero.
      if (indexB !== -1) return 1;
      // Si ninguno está en la lista, los ordenamos alfabéticamente.
      return a.localeCompare(b);
    });

  }, [products]);

  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      <div className="mb-16 text-center">
        <h1 className="font-headline text-5xl font-bold uppercase text-white md:text-7xl">
          {categoryName}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Explora las diferentes secciones. Haz clic en un producto para ver detalles y configurarlo a tu medida.
        </p>
      </div>

      <div className="space-y-16">
        {groupedProducts.map(([subCategoryName, items]) => (
          <section key={subCategoryName}>
            <h2 className="font-headline text-3xl font-bold border-b-2 border-gold/20 pb-4 mb-8">
              {subCategoryName}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
              {items.map(product => (
                <ProductCarouselCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}