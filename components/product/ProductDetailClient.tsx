'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import type { Product } from '@/lib/catalogData';
import Link from 'next/link';
import { ArrowLeft } from '@phosphor-icons/react';

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedOptions, setSelectedOptions] = useState<{[key: string]: string}>({});

  // Inicializa las opciones seleccionadas con el primer valor por defecto
  useState(() => {
    const defaultOptions: {[key: string]: string} = {};
    if (product.options) {
      product.options.forEach(opt => {
        defaultOptions[opt.id] = opt.choices[0];
      });
    }
    setSelectedOptions(defaultOptions);
  });

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
    
    addToCart(product, optionsAsArray);
  };
  
  return (
    <div className="container mx-auto max-w-5xl px-4 py-16 pt-32">
       <Link href="/carrito" className="mb-8 inline-flex items-center gap-2 text-gold hover:text-light-gold transition-colors">
            <ArrowLeft size={20} />
            Volver al Catálogo
        </Link>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Columna de Imagen */}
        <div>
          <div className="aspect-square relative w-full rounded-lg overflow-hidden border border-zinc-800">
             <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
        </div>
        {/* Columna de Detalles */}
        <div className="flex flex-col">
          <h1 className="font-headline text-4xl lg:text-5xl font-bold">{product.name}</h1>
          {product.description && <p className="mt-4 text-lg text-white/70">{product.description}</p>}
          
          {/* Opciones del Producto */}
          {product.options && (
            <div className="my-8 space-y-4 border-t border-b border-zinc-800 py-8">
              {product.options.map(opt => (
                <div key={opt.id}>
                  <label htmlFor={opt.id} className="mb-2 block font-bold text-white/90">{opt.label}</label>
                  <select id={opt.id} onChange={(e) => handleOptionChange(opt.id, e.target.value)} className="form-input text-base">
                    {opt.choices.map(choice => <option key={choice} value={choice}>{choice}</option>)}
                  </select>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8">
            <button onClick={handleAddToCart} className="btn-primary w-full text-center block rounded-md py-4 text-lg">
              Añadir a Cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}