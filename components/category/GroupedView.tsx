// /components/category/GroupedView.tsx

'use client';

import { useMemo } from 'react';
import type { CatalogItem } from '@/lib/catalogData';
import ProductCarouselCard from '../ProductCarouselCard';

export default function GroupedView({ products }: { products: CatalogItem[] }) {
  const groupedProducts = useMemo(() => {
    return products.reduce((acc, product) => {
      const key = product.subCategory || 'Otros';
      if (!acc[key]) acc[key] = [];
      acc[key].push(product);
      return acc;
    }, {} as Record<string, CatalogItem[]>);
  }, [products]);

  return (
    <div className="space-y-16 animate-fade-in">
      {Object.entries(groupedProducts).map(([subCategoryName, items]) => (
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
  );
}