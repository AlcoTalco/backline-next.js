'use client';

import { useState } from 'react';
import Link from 'next/link'; // Importa Link
import Image from 'next/image';
import { catalog, categories } from '@/lib/catalogData';
import CartSidebar from './CartSidebar';
import { ArrowLeft } from '@phosphor-icons/react';

const CartPageClient = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredItems = selectedCategory ? catalog.filter(item => item.category === selectedCategory) : [];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold uppercase text-white md:text-7xl">Catálogo de Equipos</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
          {selectedCategory ? 'Explora los equipos disponibles' : 'Selecciona una categoría para empezar'}
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-10 lg:gap-12">
        <div className="lg:col-span-7">
          {selectedCategory ? (
            <div>
              <button onClick={() => setSelectedCategory(null)} className="mb-8 flex items-center gap-2 text-gold hover:text-light-gold transition-colors">
                <ArrowLeft size={20} /> Volver a Categorías
              </button>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredItems.map(item => (
                  // --- AHORA CADA TARJETA ES UN ENLACE ---
                  <Link href={`/productos/${item.id}`} key={item.id} className="group block overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:border-gold hover:-translate-y-1">
                    <div className="relative aspect-[4/3]">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-white truncate">{item.name}</h4>
                      <p className="text-sm text-gold mt-1">Ver detalles</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {categories.map((category) => (
                <div key={category.id} onClick={() => setSelectedCategory(category.id)} className="group relative cursor-pointer overflow-hidden rounded-lg border border-zinc-800 aspect-[4/3]">
                  <Image src={category.image} alt={category.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <h3 className="absolute bottom-0 left-0 p-4 font-headline text-2xl font-bold text-white">{category.name}</h3>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="lg:col-span-3">
          <CartSidebar />
        </div>
      </div>
    </div>
  );
};
export default CartPageClient;