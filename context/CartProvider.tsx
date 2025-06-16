'use client';

import React, { createContext, useState, ReactNode } from 'react';
import type { Product } from '@/lib/catalogData';

export interface CartItem extends Product {
  instanceId: number;
  selectedOptions: { label: string; value: string }[];
}

// --- Interfaz del Contexto Actualizada ---
interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean; // <-- NUEVO: para saber si el panel está abierto
  addToCart: (product: Product, selectedOptions: { label: string; value: string }[]) => void;
  removeFromCart: (instanceId: number) => void;
  clearCart: () => void;
  openCart: () => void; // <-- NUEVO: función para abrir el panel
  closeCart: () => void; // <-- NUEVO: función para cerrar el panel
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // <-- NUEVO ESTADO

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: Product, selectedOptions: { label: string; value: string }[]) => {
    const newItem: CartItem = {
      ...product,
      instanceId: Date.now(),
      selectedOptions
    };
    setCart(prevCart => [...prevCart, newItem]);
    openCart(); // <-- Abrimos el carrito automáticamente al añadir un item
  };

  const removeFromCart = (instanceId: number) => {
    setCart(prevCart => prevCart.filter(item => item.instanceId !== instanceId));
  };

  const clearCart = () => {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, isCartOpen, addToCart, removeFromCart, clearCart, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
};