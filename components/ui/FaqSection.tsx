'use client';

import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import FadeInSection from './FadeInSection';

const faqData = [
    {
        question: '¿Prestan servicio de backline fuera de Cali, en otras ciudades de Colombia?',
        answer: 'Sí. Aunque nuestra base de operaciones está en Cali, tenemos la capacidad logística para cubrir eventos en todo el territorio nacional. Hemos trabajado en el Eje Cafetero, Chocó, Putumayo, Caldas y más. Contáctanos para coordinar la logística de tu evento, sin importar dónde sea.'
    },
    {
        question: '¿El servicio incluye un técnico de backline para el evento?',
        answer: '¡Absolutamente! Entendemos que la perfección está en los detalles. Ofrecemos el servicio de técnicos de backline profesionales para el montaje, afinación, microfoneo y asistencia durante todo el evento. Nuestro respaldo es 24/7 para garantizar que todo funcione a la perfección.'
    },
    {
        question: '¿Qué pasa si no tienen el modelo exacto que especifica mi rider técnico?',
        answer: 'Nuestra prioridad es cumplir al 100% con los requerimientos del artista. Contamos con un amplio inventario de las marcas más solicitadas. En el caso excepcional de no tener un modelo específico, nos comunicamos proactivamente contigo para ofrecerte alternativas de la misma gama y calidad, que deben ser aprobadas previamente por el artista. Nuestro lema es: "No dejamos nada al azar".'
    },
    {
        question: '¿Cuáles son las políticas de pago y cancelación?',
        answer: 'Para confirmar la reserva del equipo, generalmente solicitamos un anticipo del 50%. El 50% restante se abona el día del montaje. Entendemos la dinámica de las producciones y podemos ser flexibles con los términos para proyectos de gran envergadura. Las políticas de cancelación dependen de la antelación con la que se notifique.'
    },
    {
        question: 'Además del backline, ¿qué otros servicios musicales ofrecen?',
        answer: 'A partir de 2025, hemos expandido nuestro portafolio para ser una solución integral. Además del alquiler de equipos, ahora ofrecemos orquestas y bandas en vivo en diversos formatos. Este servicio nace de la necesidad de nuestros clientes de tener un único proveedor de confianza para todo el componente musical.'
    }
];

const FaqItem = ({ item, isOpen, onClick }: { item: typeof faqData[0], isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="rounded-lg border border-zinc-800 bg-zinc-900">
            <button onClick={onClick} className="flex w-full items-center justify-between p-6 text-left">
                <span className="text-xl font-bold">{item.question}</span>
                <div className="text-2xl transition-transform duration-300">
                    {isOpen ? <Minus weight="bold" /> : <Plus weight="bold" />}
                </div>
            </button>
            <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                    <p className="p-6 pt-0 leading-relaxed text-white/80">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <FadeInSection id="faq" className="bg-black py-32">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h2 className="font-headline text-5xl font-bold md:text-6xl">Preguntas <span className="text-gold">Frecuentes</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">Respuestas rápidas a las dudas más comunes de nuestros clientes.</p>
            </div>
            <div className="mx-auto max-w-4xl space-y-4">
              {faqData.map((item, index) => (
                <FaqItem key={index} item={item} isOpen={openIndex === index} onClick={() => handleClick(index)} />
              ))}
            </div>
          </div>
        </FadeInSection>
    );
};

export default FaqSection;