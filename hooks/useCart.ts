'use client';

import { useContext } from 'react';
import { CartContext } from '@/context/CartProvider';

export const useCart = () => {
  const context = useContext(CartContext);

  // Esta verificación es crucial. Si intentas usar este hook en un componente
  // que no está envuelto por CartProvider, lanzará un error claro.
  if (context === undefined) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }

  return context;
};