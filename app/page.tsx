
import { categories } from '@/lib/catalogData';
import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import FaqSection from "@/components/ui/FaqSection";
import AnimatedStats from "@/components/ui/AnimatedStats";

export default function HomePage() {
  return (
    <>
      <section id="hero" className="relative h-screen overflow-hidden pt-16">
        <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover">
          <source src="/videos/video_logo.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex h-full w-full items-center justify-center bg-black/60 text-center">
          <div className="container mx-auto px-4">
            <h1 className="font-headline text-5xl font-bold uppercase tracking-tight text-white md:text-7xl lg:text-8xl">Backline de Alta Gama</h1>
            <h2 className="auto-shine-text font-headline mb-6 text-4xl font-bold md:text-6xl lg:text-7xl">Para Eventos Exclusivos.</h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg font-bold tracking-wider text-white/90 md:text-xl">LA BASE SÓLIDA PARA UN SHOW IMPECABLE.</p>
            <Link href="/#cotizador" className="btn-primary rounded-md py-3 px-8 text-base">Ver Catálogo</Link>
          </div>
        </div>
      </section>

      <FadeInSection className="bg-black border-y border-zinc-800">
        <div className="container mx-auto px-4 py-20 text-center">
          {/* 1. Primero, los contadores animados */}
          <AnimatedStats />
          
          {/* 2. Luego, el texto de experiencia, con un margen superior */}
          <p className="mx-auto mt-16 max-w-4xl text-xl leading-relaxed text-white/80 md:text-2xl">
            Somos una empresa con más de 5 años de <span className="font-bold text-gold">experiencia verificada</span> en el servicio de backline para los eventos más exigentes del país.
          </p>

          
        </div>
      </FadeInSection>


      <FadeInSection id="soluciones" className="bg-black py-32">
        <div className="container mx-auto space-y-24 px-4 md:space-y-32">
          <div className="text-center">
            <h2 className="font-headline text-5xl font-bold md:text-6xl">El Éxito de Tu Evento es Nuestro <span className="text-gold">Objetivo.</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">Sabemos que la presión de una producción es inmensa. Por eso, nuestro servicio de backline de alta gama está diseñado para resolver tus mayores desafíos.</p>
          </div>
          <div className="grid items-center gap-8 md:grid-cols-5 md:gap-12">
            <div className="md:col-span-2"><Image src="/images/rider.jpeg" alt="Rider Técnico" width={500} height={510} className="h-[510px] w-full rounded-lg object-cover shadow-lg" /></div>
            <div className="text-left md:col-span-3">
              <h3 className="font-headline mb-4 text-4xl font-bold">El Backline Que Tu Evento Exige.</h3>
              <p className="text-lg leading-relaxed text-white/70">Entendemos que un rider técnico no es una sugerencia, es una exigencia. Por eso, nuestro inventario incluye las marcas que los artistas demandan. Lo que seleccionas en nuestro catálogo es exactamente lo que recibes.</p>
            </div>
          </div>
          <div className="grid items-center gap-8 md:grid-cols-5 md:gap-12">
            <div className="text-left md:col-span-3">
              <h3 className="font-headline mb-4 text-4xl font-bold">Nuestra Garantía en Tu Escenario</h3>
              <p className="text-lg leading-relaxed text-white/70">Garantizamos el perfecto funcionamiento de cada equipo. El día del evento, nuestro personal se encarga del montaje completo del backline, dejándolo listo y a tu disposición para la producción.</p>
            </div>
            <div className="order-first md:col-span-2 md:order-none"><Image src="/images/mantenimiento-equipo.jpg" alt="Técnico revisando equipo" width={500} height={510} className="h-[510px] w-full rounded-lg object-cover shadow-lg" /></div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="artists" className="bg-black py-20">
          <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                  <h2 className="font-headline text-5xl md:text-6xl font-bold">Han <span className="text-gold">Confiado en Nosotros</span></h2>
              </div>
              
              {/* Contenedor del video */}
              <div className="max-w-xl mx-auto bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden h-[750px]">
                  <video autoPlay loop muted playsInline className="w-full h-full object-cover" poster="/images/poster-video-artistas.jpg">
                      <source src="/videos/artistas.mp4" type="video/mp4"/>
                      Tu navegador no soporta videos.
                  </video>
              </div>
              
          </div>
      </FadeInSection>

      <FadeInSection id="cotizador" className="bg-black py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-5xl font-bold md:text-6xl">Tu Backline Ideal, <span className="text-gold">a un Clic.</span></h2>
          <p className="mx-auto mt-4 mb-16 max-w-3xl text-lg text-white/70">
            Haz clic en una categoría para explorar nuestro inventario premium y empezar a construir tu cotización.
          </p>
          
          <div className="mb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mapeamos sobre una lista personalizada para este layout específico */}
            {[
              { id: 'drums', name: 'Baterías', image: '/images/5 (6).jpeg', description: 'DW, Tama, Yamaha.' },
              { id: 'bass_amps', name: 'Amplificadores de Bajo', image: '/images/ampeg.jpeg', description: 'Ampeg, Hartke, Aguilar, Bugera.' },
              { id: 'keys', name: 'Teclados y Pianos', image: '/images/equipo3.jpeg', description: 'Nord, Korg, Roland, Yamaha.' },
              { id: 'percussion', name: 'Percusión', image: '/images/percusion_placeholder.jpg', description: 'LP, Meinl, Remo.' },
              { id: 'guitar_amps', name: 'Amplificadores de Guitarra', image: '/images/equipo1.jpeg', description: 'Fender, Marshall, Orange, Vox.' },
              { id: 'stands', name: 'Accesorios y Soportes', image: '/images/stand_placeholder.jpg', description: 'Gibraltar, Hercules, LP.' },
            ].map((category) => (
              <Link 
                href={`/carrito#${category.id}`} 
                key={category.id}
                className="group block rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-left transition-all duration-300 hover:border-gold hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md mb-4">
                    <Image 
                      src={category.image} 
                      alt={category.name} 
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
                <h4 className="text-xl font-bold">{category.name}</h4>
                {/* AÑADIMOS LA DESCRIPCIÓN CON LAS MARCAS */}
                <p className="text-white/60 mt-1">{category.description}</p>
              </Link>
            ))}
          </div>

          <Link href="/carrito" className="btn-primary inline-block rounded-md py-4 px-10 text-lg">
            IR AL CATÁLOGO COMPLETO
          </Link>
        </div>
      </FadeInSection>
      
      <FaqSection />
    </>
  );
}