import Image from "next/image";
import Link from "next/link";
import FadeInSection from "@/components/ui/FadeInSection";
import FaqSection from "@/components/ui/FaqSection";

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
            <Link href="/#cotizador" className="btn-primary rounded-md py-3 px-8 text-base">INICIA TU CONFIGURACIÓN</Link>
          </div>
        </div>
      </section>
      
      <FadeInSection className="bg-black py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/80 md:text-2xl">
            Somos una empresa con más de 5 años de <span className="font-bold text-gold">experiencia verificada</span> en el servicio de backline para los eventos más exigentes del país.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection id="soluciones" className="bg-zinc-900 py-32">
        <div className="container mx-auto space-y-24 px-4 md:space-y-32">
          <div className="text-center">
            <h2 className="font-headline text-5xl font-bold md:text-6xl">Tu Evento, <span className="text-gold">Resuelto.</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">Entendemos la presión de una producción. Prestamos un servicio de backline de alta gama para resolver tus mayores desafíos.</p>
          </div>
          <div className="grid items-center gap-8 md:grid-cols-5 md:gap-12">
            <div className="md:col-span-2"><Image src="/images/rider.jpeg" alt="Rider Técnico" width={500} height={510} className="h-[510px] w-full rounded-lg object-cover shadow-lg" /></div>
            <div className="text-left md:col-span-3">
              <h3 className="font-headline mb-4 text-4xl font-bold">Riders Técnicos Sin Complicaciones</h3>
              <p className="text-lg leading-relaxed text-white/70">Entendemos que los riders no son una sugerencia, son una exigencia. Disponemos del inventario y las marcas que los profesionales demandan.</p>
            </div>
          </div>
          <div className="grid items-center gap-8 md:grid-cols-5 md:gap-12">
            <div className="text-left md:col-span-3">
              <h3 className="font-headline mb-4 text-4xl font-bold">Fiabilidad a Toda Prueba</h3>
              <p className="text-lg leading-relaxed text-white/70">Cada equipo es rigurosamente revisado y recibe mantenimiento constante para garantizar cero fallos y cero retrasos en tu evento.</p>
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
              <div className="mt-24 text-center">
                <h3 className="font-headline text-4xl text-white/90 mb-8">
                  Productoras y Clientes Corporativos
                </h3>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                  {/* Reemplaza estas imágenes con los logos reales */}
                  <div className="flex justify-center">
                    <img src="/images/equipo1.jpeg" alt="Logo Placeholder 1" className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" />
                  </div>
                  <div className="flex justify-center">
                    <img src="/images/equipo2.jpeg" alt="Logo Placeholder 2" className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" />
                  </div>
                  <div className="flex justify-center">
                    <img src="/images/equipo3.jpeg" alt="Logo Placeholder 3" className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" />
                  </div>
                  <div className="flex justify-center">
                    <img src="/images/rider.jpeg" alt="Logo Placeholder 4" className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out" />
                  </div>
                </div>
              </div>
              
          </div>
      </FadeInSection>

      <FadeInSection id="cotizador" className="bg-zinc-900 py-32">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-5xl font-bold md:text-6xl">Tu Backline Ideal, <span className="text-gold">a un Clic.</span></h2>
            <p className="mx-auto mt-4 mb-16 max-w-3xl text-lg text-white/70">Navega por nuestro inventario premium, selecciona el equipo exacto que necesitas y obtén tu cotización de forma inmediata.</p>
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                    <Image src="/images/equipo2.jpeg" alt="Batería" width={400} height={300} className="mb-4 aspect-[4/3] rounded-md object-cover"/>
                    <h4 className="text-xl font-bold">Baterías y Percusión</h4><p className="text-white/60">DW, Tama, Yamaha, LP, Meinl</p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                    <Image src="/images/equipo1.jpeg" alt="Amplificador" width={400} height={300} className="mb-4 aspect-[4/3] rounded-md object-cover"/>
                    <h4 className="text-xl font-bold">Amplificadores</h4><p className="text-white/60">Fender, Marshall, Ampeg, Vox</p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                    <Image src="/images/equipo3.jpeg" alt="Teclado" width={400} height={300} className="mb-4 aspect-[4/3] rounded-md object-cover"/>
                    <h4 className="text-xl font-bold">Teclados y Pianos</h4><p className="text-white/60">Nord, Korg, Roland, Yamaha</p>
                </div>
            </div>
            <Link href="/carrito" className="btn-primary inline-block rounded-md py-4 px-10 text-lg">IR AL CATÁLOGO Y COTIZADOR</Link>
        </div>
      </FadeInSection>
      
      <FaqSection />
    </>
  );
}