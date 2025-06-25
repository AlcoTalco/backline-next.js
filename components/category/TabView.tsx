// /components/category/TabView.tsx

'use client';

import { useState, useMemo } from 'react';
import type { CatalogItem } from '@/lib/catalogData';
import ProductCarouselCard from '../ProductCarouselCard';

interface TabViewProps {
  products: CatalogItem[];
  tabConfig: {
    primaryTabs: string[];
    secondaryActionLabel?: string;
  };
}

const ProductGrid = ({ items }: { items: CatalogItem[] }) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 animate-fade-in">
      {items.map(product => (
        <ProductCarouselCard key={product.id} product={product} />
      ))}
    </div>
  );

export default function TabView({ products, tabConfig }: TabViewProps) {
  const [activeTab, setActiveTab] = useState(tabConfig.primaryTabs[0]);

  const content = useMemo(() => {
    // Si la pestaña activa es una de las principales, filtramos por esa subcategoría
    if (tabConfig.primaryTabs.includes(activeTab)) {
      const items = products.filter(p => p.subCategory === activeTab);
      return <ProductGrid items={items} />;
    }
    
    // Si no, es la acción secundaria, y mostramos el resto de productos agrupados
    const primarySubs = new Set(tabConfig.primaryTabs);
    const otherProducts = products.filter(p => !primarySubs.has(p.subCategory));

    const grouped = otherProducts.reduce((acc, product) => {
        const key = product.subCategory || 'Otros';
        if (!acc[key]) acc[key] = [];
        acc[key].push(product);
        return acc;
    }, {} as Record<string, CatalogItem[]>);
    
    return (
        <div className="space-y-16 animate-fade-in">
        {Object.entries(grouped).map(([subCategoryName, items]) => (
            <section key={subCategoryName}>
            <h2 className="font-headline text-3xl font-bold border-b-2 border-gold/20 pb-4 mb-8">
                {subCategoryName}
            </h2>
            <ProductGrid items={items} />
            </section>
        ))}
        </div>
    );
  }, [activeTab, products, tabConfig]);

  const primaryTabStyle = "rounded-md px-6 py-3 font-bold transition-colors duration-200";
  const activeTabStyle = "bg-gold text-black";
  const inactiveTabStyle = "bg-zinc-800 text-white/70 hover:bg-zinc-700";
  const secondaryButtonStyle = "text-sm text-zinc-400 hover:text-gold transition-colors duration-200";

  return (
    <>
      <div className="mb-12 flex flex-wrap items-center justify-center gap-4 border-b border-zinc-800 pb-8">
        {tabConfig.primaryTabs.map(tabName => (
          <button 
            key={tabName}
            onClick={() => setActiveTab(tabName)}
            className={`${primaryTabStyle} ${activeTab === tabName ? activeTabStyle : inactiveTabStyle}`}
          >
            {tabName}
          </button>
        ))}
        {tabConfig.secondaryActionLabel && (
          <button 
            onClick={() => setActiveTab(tabConfig.secondaryActionLabel!)}
            className={`${secondaryButtonStyle} ${activeTab === tabConfig.secondaryActionLabel ? 'text-gold' : ''}`}
          >
            {tabConfig.secondaryActionLabel} →
          </button>
        )}
      </div>
      <div>{content}</div>
    </>
  );
}