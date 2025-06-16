'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/useCart';
import { X, ShoppingCart } from '@phosphor-icons/react';

export default function CartDrawer() {
  const { isCartOpen, closeCart, cart, removeFromCart } = useCart();

  return (
    <>
      {/* Fondo Oscuro */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ease-in-out ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Panel del Carrito */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md transform bg-zinc-900 shadow-xl transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex h-full flex-col">
          {/* Header del Panel */}
          <div className="flex items-center justify-between border-b border-zinc-700 p-6">
            <h2 className="text-xl font-bold">Mi Cotización</h2>
            <button onClick={closeCart} className="text-white/70 hover:text-white">
              <X size={24} />
            </button>
          </div>

          {/* Contenido del Carrito */}
          <div className="flex-grow overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-white/50">
                <ShoppingCart size={48} className="mb-4" />
                <p>Tu cotización está vacía.</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {cart.map(item => (
                  <li key={item.instanceId} className="flex items-start gap-4">
                    <Image src={item.image} alt={item.name} width={64} height={64} className="h-16 w-16 rounded-md object-cover" />
                    <div className="flex-grow">
                      <p className="font-bold">{item.name}</p>
                      {item.selectedOptions.map(opt => (
                         <p key={opt.label} className="text-sm text-white/60">{opt.label}: {opt.value}</p>
                      ))}
                    </div>
                    <button onClick={() => removeFromCart(item.instanceId)} className="text-red-500 hover:text-red-400 text-lg">
                       &times;
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* Footer del Panel */}
          {cart.length > 0 && (
            <div className="border-t border-zinc-700 p-6">
              <Link 
                href="/cotizacion" 
                onClick={closeCart}
                className="btn-primary w-full text-center block rounded-md py-3"
              >
                Finalizar Cotización
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}