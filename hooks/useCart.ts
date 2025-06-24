// /hooks/useCart.ts

import { create } from 'zustand';
import type { BaseProduct, CatalogItem, ProductOption } from '@/lib/catalogData';
import { catalog } from '@/lib/catalogData';

// El carrito ahora solo contiene productos base, pero con un ID de instancia único
export interface CartItem extends BaseProduct {
  instanceId: string; // Para diferenciar ítems idénticos (ej. 2 toms de 10")
  sourceKitId?: string; // Opcional: para saber si vino de un kit
  selectedOptions: ProductOption[];
}

interface CartState {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: CatalogItem, options: ProductOption[]) => void;
  removeFromCart: (instanceId: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
  cart: [],
  isCartOpen: false,

  addToCart: (item, selectedOptions) => {
    const { cart } = get();
    const instanceId = `inst_${Date.now()}_${Math.random()}`;

    if (item.type === 'BaseProduct') {
      const newItem: CartItem = {
        ...item,
        instanceId,
        selectedOptions,
      };
      set({ cart: [...cart, newItem] });
    } else if (item.type === 'ProductKit') {
      // Si es un kit, lo "desempacamos" en sus componentes base
      const itemsFromKit: CartItem[] = [];

      item.components.forEach(comp => {
        if (comp.isDefault) { // Añadimos solo los componentes por defecto del kit
          const productData = catalog.find(p => p.id === comp.productId) as BaseProduct;
          if (productData) {
            itemsFromKit.push({
              ...productData,
              instanceId: `inst_${Date.now()}_${Math.random()}`,
              sourceKitId: item.id, // Guardamos referencia al kit de origen
              selectedOptions: [], // Las opciones se manejarían a nivel de kit si fuera necesario
            });
          }
        }
      });
      set({ cart: [...cart, ...itemsFromKit] });
    }
  },

  removeFromCart: (instanceId) => {
    set(state => ({
      cart: state.cart.filter(item => item.instanceId !== instanceId),
    }));
  },

  clearCart: () => set({ cart: [] }),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
}));