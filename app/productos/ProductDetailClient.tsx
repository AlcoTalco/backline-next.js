'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import type { Product } from '@/lib/catalogData';

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: string}>({});

  const handleOptionChange = (optionId: string, value: string) => {
    setSelectedOptions(prev => ({ ...prev, [optionId]: value }));
  };

  const handleAddToCart = () => {
    const optionsAsArray = product.options 
      ? product.options.map(opt => ({
          label: opt.label,
          value: selectedOptions[opt.id] || opt.choices[0]
        }))
      : [];
    
    // Aquí podrías añadir lógica para añadir 'quantity' items, pero por ahora añadimos uno.
    addToCart(product, optionsAsArray);
  };
  
  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 pt-32">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Columna de Imagen */}
        <div>
          <Image src={product.image} alt={product.name} width={600} height={600} className="w-full rounded-lg object-cover" />
        </div>
        {/* Columna de Detalles */}
        <div className="flex flex-col">
          <h1 className="font-headline text-4xl font-bold">{product.name}</h1>
          {product.description && <p className="mt-4 text-lg text-white/70">{product.description}</p>}
          
          {/* Opciones del Producto */}
          {product.options && (
            <div className="mt-8 space-y-4">
              {product.options.map(opt => (
                <div key={opt.id}>
                  <label className="mb-2 block font-bold text-white/90">{opt.label}</label>
                  <select onChange={(e) => handleOptionChange(opt.id, e.target.value)} className="form-input text-base">
                    {opt.choices.map(choice => <option key={choice} value={choice}>{choice}</option>)}
                  </select>
                </div>
              ))}
            </div>
          )}

          <div className="mt-auto pt-8">
            <button onClick={handleAddToCart} className="btn-primary w-full text-center block rounded-md py-4 text-lg">
              Añadir a Cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}