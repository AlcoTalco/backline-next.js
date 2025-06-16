'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { catalog, categories } from '@/lib/catalogData';
import ProductCarouselCard from '@/components/cart/ProductCarouselCard'; // Reutilizamos la tarjeta!
import { CaretRight } from '@phosphor-icons/react';

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const category = categories.find(c => c.id === params.categoryId);
  const products = catalog.filter(p => p.category === params.categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      {/* Breadcrumbs de Navegación */}
      <nav className="mb-8 flex items-center gap-2 text-white/70">
        <Link href="/carrito" className="hover:text-gold">Catálogo</Link>
        <CaretRight size={16} />
        <span>{category.name}</span>
      </nav>

      <h1 className="font-headline text-5xl font-bold mb-12">{category.name}</h1>
      
      {/* Cuadrícula de todos los productos de la categoría */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map(product => (
          <ProductCarouselCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}