// /app/categoria/[categoryId]/page.tsx

import { catalog, categories } from '@/lib/catalogData';
import CategoryPageClient from '@/components/category/CategoryPageClient';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { categoryId: string } }) {
  const category = categories.find(c => c.id === params.categoryId);
  if (!category) return { title: 'Categoría no encontrada' };

  return {
    title: `Catálogo de ${category.name} | Backline.com.co`,
    description: `Explora todo nuestro inventario de ${category.name}. Kits completos, componentes y accesorios.`,
  };
}

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  const { categoryId } = params;
  const category = categories.find(c => c.id === categoryId);

  if (!category) notFound();

  const productsInCategory = catalog.filter(item => item.category === categoryId);

  return (
    // Pasamos el objeto de categoría completo
    <CategoryPageClient 
      category={category} 
      products={productsInCategory} 
    />
  );
}

export async function generateStaticParams() {
  return categories.map(category => ({
    categoryId: category.id,
  }));
}