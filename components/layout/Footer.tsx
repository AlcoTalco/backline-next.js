'use client';

import Image from 'next/image';
import Link from 'next/link';
import { InstagramLogo, FacebookLogo, WhatsappLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-zinc-800 bg-black py-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 text-center md:grid-cols-3 md:text-left items-center">
        <div className="flex flex-col items-center md:items-start">
          <Image src="/images/logo.jpg" alt="Backline Logo" width={250} height={67} className="h-auto w-full max-w-[250px] mb-2" />
          <p className="text-white/60">El sonido de los artistas top.</p>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold text-gold">Navegación</h3>
          <ul>
            <li><Link href="/#soluciones" className="text-white/60 hover:text-white">Soluciones</Link></li>
            <li><Link href="/#artists" className="text-white/60 hover:text-white">Artistas</Link></li>
            <li><Link href="/carrito" className="text-white/60 hover:text-white">Cotizador</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-lg font-bold text-gold">Contacto Directo</h3>
          <p className="text-xl font-bold text-white/80">+57 312 849 8955</p>
          <div className="mt-2 flex justify-center space-x-4 text-2xl md:justify-start">
            <a href="https://www.instagram.com/backline.com.co" target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors hover:text-gold"><InstagramLogo /></a>
            <a href="https://www.facebook.com/share/1YcLvJAzVa/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors hover:text-gold"><FacebookLogo /></a>
            <a href="https://wa.me/573128498955" target="_blank" rel="noopener noreferrer" className="text-white/60 transition-colors hover:text-gold"><WhatsappLogo /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-12 border-t border-zinc-800 pt-8 text-center text-white/50 text-sm">
        &copy; {new Date().getFullYear()} Backline.com.co | Todos los derechos reservados.
      </div>
    </footer>
  );
};

// ASEGÚRATE DE QUE ESTA LÍNEA TAMBIÉN ESTÉ AQUÍ:
export default Footer;