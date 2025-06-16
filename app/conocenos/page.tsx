import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '@/components/ui/FadeInSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quiénes Somos | BACKLINE.COM.CO',
  description: 'Conoce la historia y la filosofía detrás de la empresa en la que confían los profesionales.',
};

const artistList = ["Yeison Jimenez", "Jessi Uribe", "Grupo Niche", "Guayacan", "Aterciopelados", "Santiago Cruz", "Herencia de Timbiquí", "Planchando el Despecho"];
const brandList = ["YAMAHA", "FENDER", "ROLAND", "AMPEG", "DW", "TAMA", "ZILDJIAN", "LATIN PERCUSSION", "HERCULES"];

export default function AboutUsPage() {
    return (
      <>
        <section className="relative flex h-[60vh] items-center justify-center overflow-hidden bg-zinc-900 pt-16 text-center">
            <Image src="/images/mantenimiento-equipo.jpg" alt="Técnico afinando consola" fill objectFit="cover" className="absolute top-0 left-0 opacity-20" />
            <div className="relative z-10 container mx-auto px-4">
                <h1 className="font-headline text-5xl font-bold uppercase tracking-tight text-white md:text-7xl lg:text-8xl">Pasión por un <span className="text-gold">Sonido Impecable</span></h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg font-bold tracking-wider text-white/80 md:text-xl">Conoce la historia y la filosofía detrás de la empresa en la que confían los profesionales.</p>
            </div>
        </section>

        <FadeInSection className="bg-black py-24">
            <div className="container mx-auto px-4 text-center">
              <h2 className="font-headline mb-6 text-5xl font-bold md:text-6xl">Nuestra <span className="text-gold">Historia</span></h2>
              <p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/80 md:text-2xl">
                Backline.com.co nace en Cali en 2020. En medio de una pandemia mundial, surgió esta idea de negocio innovadora, y desde entonces nos hemos caracterizado por ser una empresa <span className="font-bold text-gold">responsable y con un alto nivel de calidad</span>.
              </p>
            </div>
        </FadeInSection>
        
        <FadeInSection className="bg-zinc-900 py-24">
            <div className="container mx-auto px-4">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="text-left">
                        <h2 className="font-headline mb-6 text-5xl font-bold md:text-6xl">"No Dejamos <br/><span className="text-gold">Nada al Azar"</span></h2>
                        <p className="mb-4 text-lg leading-relaxed text-white/70">Esa es nuestra promesa. Brindamos un servicio especializado basado en experiencia y calidad, utilizando solo los mejores equipos e instrumentos de gama alta.</p>
                        <p className="text-lg leading-relaxed text-white/70">Implementamos un riguroso programa de <strong>Mantenimiento Preventivo</strong> para asegurar un rendimiento perfecto en cada evento.</p>
                    </div>
                    <div><Image src="/images/mantenimiento-equipo.jpg" alt="Equipo de sonido" width={600} height={700} className="h-full w-full rounded-lg object-cover shadow-lg" /></div>
                </div>
            </div>
        </FadeInSection>
        
        <FadeInSection className="bg-black py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-5xl font-bold md:text-6xl">Calidad <span className="text-gold">Garantizada</span></h2>
                <p className="mx-auto mt-4 mb-12 max-w-3xl text-lg text-white/70">Trabajamos exclusivamente con las marcas que los profesionales exigen en sus riders técnicos.</p>
                <div className="mb-16">
                    <h3 className="mb-6 text-2xl font-bold uppercase tracking-widest text-gold">Marcas con las que trabajamos</h3>
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xl font-bold text-white/60">
                        {brandList.map(brand => <span key={brand}>{brand}</span>)}
                    </div>
                </div>
                <div>
                    <h3 className="mb-6 text-2xl font-bold uppercase tracking-widest text-gold">Artistas y Productoras Aliadas</h3>
                    <div className="grid grid-cols-2 gap-4 text-white/80 md:grid-cols-4">
                        {artistList.map(artist => <div key={artist} className="rounded-lg bg-zinc-900 p-4 text-center">{artist}</div>)}
                    </div>
                </div>
            </div>
        </FadeInSection>
      </>
    );
}