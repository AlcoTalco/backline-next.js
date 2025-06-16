import CartPageClient from "@/components/cart/CartPageClient";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catálogo y Cotización | BACKLINE',
  description: 'Encuentra, configura y solicita el equipo exacto para tu evento en nuestro catálogo interactivo.',
};

// Aquí está la exportación por defecto que faltaba.
// Es una función que retorna el componente cliente del carrito.
export default function CartPage() {
  return <CartPageClient />;
}