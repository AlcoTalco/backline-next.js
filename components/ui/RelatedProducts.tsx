// /components/ui/RelatedProducts.tsx

'use client';

import { catalog } from '@/lib/catalogData';
import type { BaseProduct } from '@/lib/catalogData';
import { useCart } from '@/hooks/useCart';
import ProductCarouselCard from '../ProductCarouselCard';

interface RelatedProductsProps {
  currentItemId: string;
}

export default function RelatedProducts({ currentItemId }: RelatedProductsProps) {
  const { cart } = useCart();
  const currentItem = catalog.find(item => item.id === currentItemId);

  if (!currentItem || currentItem.type !== 'BaseProduct' || !currentItem.relatedProductIds) {
    return null;
  }

  const relatedProducts = currentItem.relatedProductIds
    .map(relatedId => catalog.find(item => item.id === relatedId && item.type === 'BaseProduct'))
    .filter(Boolean) as BaseProduct[];

  const cartProductIds = new Set(cart.map(item => item.id));
  const productsToSuggest = relatedProducts.filter(p => !cartProductIds.has(p.id));

  if (productsToSuggest.length === 0) {
    return null;
  }

  return (
    <div className="bg-zinc-950 border-y border-zinc-800">
        <div className="container mx-auto px-4 py-16">
            <h3 className="font-headline text-3xl font-bold mb-8 text-center text-white">Completa Tu Setup</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
                {productsToSuggest.map(product => (
                  <ProductCarouselCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </div>
  );
}