'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Product } from '@/lib/catalogData';
import { useCart } from '@/hooks/useCart';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const optionsRef = useRef<{ [key: string]: string }>({});

  const hasOptions = product.options && product.options.length > 0;

  const handleAdd = () => {
    if (!hasOptions) {
      addToCart(product, []);
      return;
    }
    const selectedOptions = product.options!.map(opt => ({
      label: opt.label,
      value: optionsRef.current[opt.id] || opt.choices[0],
    }));
    addToCart(product, selectedOptions);
    setIsOptionsOpen(false);
  };
  
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-gold">
      <Image src={product.image} alt={product.name} width={400} height={300} className="h-48 w-full object-cover" />
      <div className="flex flex-grow flex-col p-4">
        <div>
          <p className="text-xs font-bold uppercase text-gold">{product.brand}</p>
          <h4 className="text-lg font-bold text-white">{product.name}</h4>
        </div>
        <div className="mt-4 flex flex-grow items-end">
          <button onClick={hasOptions ? () => setIsOptionsOpen(!isOptionsOpen) : handleAdd} className="btn-primary w-full rounded-md py-2 px-4 text-sm">
            {hasOptions ? 'Configurar y Añadir' : 'Añadir Directo'}
          </button>
        </div>
      </div>
      {hasOptions && (
        <div className={`grid transition-all duration-500 ease-in-out ${isOptionsOpen ? 'grid-rows-[1fr] p-4' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden space-y-2">
            {product.options!.map(opt => (
              <div key={opt.id}>
                <label className="mb-1 block text-xs font-bold text-white/70">{opt.label}</label>
                <select onChange={(e) => { optionsRef.current[opt.id] = e.target.value; }} className="form-input text-sm">
                  {opt.choices.map(choice => <option key={choice} value={choice}>{choice}</option>)}
                </select>
              </div>
            ))}
            <button onClick={handleAdd} className="mt-4 w-full rounded-md bg-green-600 py-2 text-sm font-bold text-white hover:bg-green-500">
              Confirmar y Añadir
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductCard;