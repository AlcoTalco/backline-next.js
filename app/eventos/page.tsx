import Image from 'next/image';
import FadeInSection from '@/components/ui/FadeInSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Últimos Eventos | BACKLINE.COM.CO',
  description: 'Un vistazo a nuestro trabajo más reciente en los escenarios más exigentes del país.',
};

const events = [
    { name: "Yeison Jimenez", desc: "Giras Nacionales", image: "/images/equipo1.jpeg" },
    { name: "Grupo Niche", desc: "Conciertos en Cali", image: "/images/equipo2.jpeg" },
    { name: "Aterciopelados", desc: "Festivales de Rock", image: "/images/equipo3.jpeg" },
    { name: "Living Conciertos", desc: "Producción de Eventos Masivos", image: "/images/rider.jpeg" },
    { name: "Jorge Celedón", desc: "Festivales Vallenatos", image: "/images/mantenimiento-equipo.jpg" },
    { name: "Sarmiento Entretenimiento", desc: "Producción de Conciertos", image: "/images/equipo1.png" },
    { name: "Victor Manuelle", desc: "Conciertos de Salsa", image: "/images/equipo2.jpeg" },
    { name: "Hotel Intercontinental", desc: "Eventos Corporativos y Sociales", image: "/images/equipo3.jpeg" },
    { name: "Tito Nieves", desc: "Ferias y Fiestas Nacionales", image: "/images/rider.jpeg" },
];

export default function EventsPage() {
    return (
        <>
            <section className="bg-black pt-32 pb-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="font-headline text-5xl font-bold text-white md:text-7xl">Nuestros <span className="text-gold">Últimos Eventos</span></h1>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80 md:text-xl">Un vistazo a nuestro trabajo más reciente en los escenarios más exigentes del país.</p>
                </div>
            </section>
            <FadeInSection className="bg-black py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {events.map((event, index) => (
                            <div key={index} className="group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900">
                                <div className="aspect-[4/3] overflow-hidden bg-black">
                                    <Image src={event.image} alt={`Evento con ${event.name}`} width={600} height={450} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold">{event.name}</h3>
                                    <p className="text-white/60">{event.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInSection>
        </>
    );
}