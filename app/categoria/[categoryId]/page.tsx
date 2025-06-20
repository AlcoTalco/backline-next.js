'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { catalog, categories, Product } from '@/lib/catalogData';
import ProductCarouselCard from '@/components/cart/ProductCarouselCard';
import { CaretRight } from '@phosphor-icons/react';

// Objeto para definir el orden de las subcategorías. Puedes ajustarlo.
const subCategoryOrder: { [key: string]: number } = {
  'Kits de Batería': 1,
  'Redoblantes': 2,
  'Platillos': 3,
  'Pedales de Batería': 1,
  'Herrajes y Soportes': 2,
  'Soportes de Instrumento': 3,
  'Soportes de Teclado': 4,
  'Accesorios Adicionales': 5,
};

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const category = categories.find(c => c.id === params.categoryId);
  const productsInCategory = catalog.filter(p => p.category === params.categoryId);

  if (!category) {
    notFound();
  }

  // <-- INICIO DE LA NUEVA LÓGICA DE AGRUPACIÓN -->
  const groupedProducts = productsInCategory.reduce((acc, product) => {
    // Si no hay subcategoría, se agrupa en 'General'.
    const key = product.subCategory || 'General';
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(product);
    return acc;
  }, {} as Record<string, Product[]>);

  const sortedSubCategories = Object.keys(groupedProducts).sort((a, b) => {
    const orderA = subCategoryOrder[a] || 99; // Si no está en el objeto de orden, va al final
    const orderB = subCategoryOrder[b] || 99;
    return orderA - orderB;
  });
  // <-- FIN DE LA NUEVA LÓGICA DE AGRUPACIÓN -->

  return (
    <div className="container mx-auto px-4 py-16 pt-32 min-h-screen">
      {/* Breadcrumbs de Navegación */}
      <nav className="mb-8 flex items-center gap-2 text-white/70">
        <Link href="/carrito" className="hover:text-gold">Catálogo</Link>
        <CaretRight size={16} />
        <span>{category.name}</span>
      </nav>

      <h1 className="font-headline text-5xl font-bold mb-12">{category.name}</h1>
      
      {/* <-- INICIO DEL NUEVO RENDERIZADO POR GRUPOS --> */}
      {sortedSubCategories.map(subCategory => (
        <section key={subCategory} className="mb-16">
          {/* Solo mostramos el título de la subcategoría si hay más de un grupo */}
          {sortedSubCategories.length > 1 && subCategory !== 'General' && (
             <h2 className="font-headline text-3xl font-semibold mb-8 border-b border-white/10 pb-4">{subCategory}</h2>
          )}
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {groupedProducts[subCategory].map(product => (
              <ProductCarouselCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
      {/* <-- FIN DEL NUEVO RENDERIZADO POR GRUPOS --> */}
    </div>
  );
}