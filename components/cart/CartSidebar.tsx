'use client';

import { useCart } from '@/hooks/useCart';
import { ShoppingCartSimple, X } from '@phosphor-icons/react';
import { useState } from 'react';

const CartSidebar = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', eventDate: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return alert("Tu carrito está vacío.");
    setIsLoading(true);

    try {
      const response = await fetch('/api/crear-cotizacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, cart }),
      });
      if (!response.ok) throw new Error('Falló la creación de la cotización');
      const { whatsappUrl } = await response.json();
      window.open(whatsappUrl, '_blank');
      clearCart();
      setFormData({ name: '', email: '', phone: '', eventDate: '' });
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("Hubo un error al enviar tu cotización. Por favor, intenta de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside className="mt-12 lg:col-span-3 lg:mt-0">
      <div className="sticky top-24 h-fit rounded-lg border border-zinc-800 bg-zinc-900 p-6">
        <h2 className="mb-4 flex items-center text-2xl font-bold">
          <ShoppingCartSimple className="mr-3 text-gold" size={28} /> Tu Cotización
        </h2>
        <div className="mb-6 min-h-[100px] max-h-[40vh] space-y-4 overflow-y-auto pr-2">
          {cart.length === 0 ? <p className="text-white/50">Tu carrito está vacío.</p> :
            cart.map((item) => (
              <div key={item.instanceId} className="border-b border-zinc-800 pb-3">
                <div className="flex items-start justify-between">
                  <p className="pr-2 text-sm font-bold">{item.name}</p>
                  <button onClick={() => removeFromCart(item.instanceId)} className="text-lg leading-none text-red-500 hover:text-red-400"><X weight="bold" /></button>
                </div>
                {item.selectedOptions.length > 0 && (
                  <ul className="mt-1 space-y-1 pl-1 text-xs text-white/60">
                    {item.selectedOptions.map(opt => <li key={opt.label}><span className="font-semibold">{opt.label}:</span> {opt.value}</li>)}
                  </ul>
                )}
              </div>
            ))}
        </div>
        {cart.length > 0 && (
          <div id="quote-form-container">
            <hr className="my-6 border-zinc-700" />
            <h3 className="mb-4 text-xl font-bold">Completa tus Datos</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" id="name" placeholder="Nombre Completo" required className="form-input" value={formData.name} onChange={handleInputChange}/>
              <input type="email" id="email" placeholder="Email de Contacto" required className="form-input" value={formData.email} onChange={handleInputChange}/>
              <input type="tel" id="phone" placeholder="Teléfono / WhatsApp" required className="form-input" value={formData.phone} onChange={handleInputChange}/>
              <input type="text" id="eventDate" onFocus={(e) => e.target.type = 'date'} onBlur={(e) => e.target.type = 'text'} placeholder="Fecha del Evento" required className="form-input" value={formData.eventDate} onChange={handleInputChange}/>
              <button type="submit" disabled={isLoading} className="btn-primary w-full rounded-md py-3 px-5 text-base disabled:opacity-50">
                {isLoading ? 'Enviando...' : 'Solicitar Cotización por WhatsApp'}
              </button>
            </form>
          </div>
        )}
      </div>
    </aside>
  );
};
export default CartSidebar;