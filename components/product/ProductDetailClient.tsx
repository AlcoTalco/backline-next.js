// /components/product/ProductDetailClient.tsx

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import type { CatalogItem, BaseProduct } from '@/lib/catalogData';
import { catalog } from '@/lib/catalogData';
import { CheckCircle, Plus } from '@phosphor-icons/react';

export default function ProductDetailClient({ product }: { product: CatalogItem }) {
  const { addToCart } = useCart();
  
  const [selectedComponents, setSelectedComponents] = useState<Set<string>>(
    new Set(
      product.type === 'ProductKit' 
        ? product.components.filter(c => c.isDefault).map(c => c.productId) 
        : []
    )
  );
  
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [addedMessage, setAddedMessage] = useState<string | null>(null);

  const handleComponentToggle = (productId: string) => {
    setSelectedComponents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) newSet.delete(productId);
      else newSet.add(productId);
      return newSet;
    });
  };
  
  const handleOptionChange = (label: string, productId: string) => {
    setSelectedOptions(prev => ({ ...prev, [label]: productId }));
  };

  const handleAddToCart = () => {
    let itemsAddedCount = 0;
    if (product.type === 'BaseProduct') {
      addToCart(product, []);
      itemsAddedCount = 1;
    } else if (product.type === 'ProductKit') {
      const componentsToAdd = Array.from(selectedComponents);
      const optionsToAdd = Object.values(selectedOptions);
      const allItemIds = [...componentsToAdd, ...optionsToAdd];
      
      const items = allItemIds
        .map(id => catalog.find(item => item.id === id) as BaseProduct)
        .filter(Boolean);

      items.forEach(item => addToCart(item, []));
      itemsAddedCount = items.length;
    }
    
    setAddedMessage(`${itemsAddedCount} item(s) añadidos a la cotización.`);
    setTimeout(() => setAddedMessage(null), 3000);
  };

  const isKit = product.type === 'ProductKit';

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div className="relative aspect-square w-full h-full min-h-[400px] rounded-lg overflow-hidden border border-zinc-800 shadow-lg">
          <Image src={product.image} alt={product.name} fill className="object-cover" priority />
        </div>
        
        <div className="flex flex-col">
          <p className="font-bold uppercase text-gold tracking-widest">{product.subCategory}</p>
          <h1 className="font-headline text-4xl lg:text-5xl font-bold text-white mb-4">{product.name}</h1>
          <p className="text-lg text-white/70 mb-8">{product.description}</p>
          
          {isKit && (
            <div className="space-y-8 mb-8 border-t border-zinc-800 pt-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Componentes del Kit</h3>
                <div className="space-y-2">
                  {product.components.map(comp => {
                    const compData = catalog.find(p => p.id === comp.productId);
                    if (!compData) return null;
                    return (
                      <label key={comp.productId} className={`flex items-center gap-3 p-3 rounded-md transition-colors duration-200 ${comp.isOptional ? 'cursor-pointer hover:bg-zinc-800' : 'opacity-70'}`}>
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded bg-zinc-700 border-zinc-600 text-gold focus:ring-gold focus:ring-offset-zinc-900"
                          checked={selectedComponents.has(comp.productId)}
                          onChange={() => handleComponentToggle(comp.productId)}
                          disabled={!comp.isOptional}
                        />
                        <span>{compData.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {product.configurableOptions?.map(opt => (
                <div key={opt.label}>
                  <h3 className="font-bold text-xl mb-4">{opt.label}</h3>
                  <div className="space-y-2">
                    {opt.optionIds.map(optId => {
                      const optData = catalog.find(p => p.id === optId);
                      if (!optData) return null;
                      return (
                        <label key={optId} className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-zinc-800">
                          <input
                            type="radio"
                            name={opt.label}
                            value={optId}
                            onChange={(e) => handleOptionChange(opt.label, e.target.value)}
                            className="h-5 w-5 bg-zinc-700 border-zinc-600 text-gold focus:ring-gold focus:ring-offset-zinc-900"
                          />
                          <span>{optData.name}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="mt-auto">
            <button onClick={handleAddToCart} className="btn-primary w-full py-4 text-lg font-bold flex items-center justify-center gap-2">
              <Plus size={20} weight="bold" /> Añadir a la Cotización
            </button>
            {addedMessage && (
              <p className="text-center text-green-400 mt-4 flex items-center justify-center gap-2">
                <CheckCircle size={20} weight="bold" /> {addedMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}