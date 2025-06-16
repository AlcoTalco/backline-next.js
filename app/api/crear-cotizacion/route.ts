import { NextResponse } from 'next/server';
import type { CartItem } from '@/context/CartProvider';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, eventDate, cart } = body as { name: string, email: string, phone: string, eventDate: string, cart: CartItem[] };

        if (!name || !email || !phone || !eventDate || !cart || cart.length === 0) {
            return NextResponse.json({ error: 'Faltan datos en la solicitud' }, { status: 400 });
        }

        let message = `*¡Hola BACKLINE!* 👋\n\nQuisiera solicitar una cotización con los siguientes datos:\n\n`;
        message += `*Nombre:* ${name}\n`;
        message += `*Email:* ${email}\n`;
        message += `*Teléfono:* ${phone}\n`;
        message += `*Fecha del Evento:* ${eventDate}\n\n`;
        message += `*EQUIPO REQUERIDO:*\n\n`;

        cart.forEach((item) => {
            message += `• *${item.name}*`;
            if (item.selectedOptions && item.selectedOptions.length > 0) {
                item.selectedOptions.forEach(opt => {
                    message += `\n  - _${opt.label}: ${opt.value}_`;
                });
            }
            message += `\n`;
        });
        message += `\n¡Gracias! Quedo atento a su contacto.`;
        
        const targetPhone = '573128498955';
        const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(message)}`;

        return NextResponse.json({ whatsappUrl });
    } catch (error) {
        console.error('Error en /api/crear-cotizacion:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}