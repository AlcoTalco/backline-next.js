// /components/category/CategoryPageClient.tsx

'use client';

import type { CatalogItem } from '@/lib/catalogData';
import Link from 'next/link';
import { CaretLeft } from '@phosphor-icons/react';
import TabView from './TabView';
import GroupedView from './GroupedView';

interface CategoryConfig {
  id: string;
  name: string;
  layout?: 'tabs' | 'grouped';
  tabConfig?: {
    primaryTabs: string[];
    secondaryActionLabel?: string;
  };
}

interface CategoryPageClientProps {
  category: CategoryConfig;
  products: CatalogItem[];
}

export default function CategoryPageClient({ category, products }: CategoryPageClientProps) {
  return (
    <div className="container mx-auto px-4 py-16 pt-32">
      <div className="mb-12">
        <Link href="/carrito" className="inline-flex items-center gap-2 text-sm text-gold hover:underline mb-4">
          <CaretLeft />
          Volver al Catálogo Principal
        </Link>
        <div className="text-center">
            <h1 className="font-headline text-5xl font-bold uppercase text-white md:text-7xl">
                {category.name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
                Explora las diferentes secciones. Haz clic en un producto para ver detalles y configurarlo a tu medida.
            </p>
        </div>
      </div>

      {/* EL DIRECTOR DECIDE QUÉ VISTA RENDERIZAR BASADO EN LOS DATOS */}
      {category.layout === 'tabs' && category.tabConfig 
        ? <TabView products={products} tabConfig={category.tabConfig} /> 
        : <GroupedView products={products} />
      }
    </div>
  );
}