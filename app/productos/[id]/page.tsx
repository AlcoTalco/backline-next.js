import { notFound } from 'next/navigation';
import { catalog } from '@/lib/catalogData';
import ProductDetailClient from '@/components/product/ProductDetailClient';

// Esta función busca el producto por su ID
async function getProduct(id: string) {
  const product = catalog.find(p => p.id === id);
  return product;
}

// Esta es la página del servidor
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound(); // Muestra un 404 si el producto no existe
  }

  // Pasa el producto encontrado al componente cliente
  return <ProductDetailClient product={product} />;
}