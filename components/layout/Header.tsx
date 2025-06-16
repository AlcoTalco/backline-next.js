'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InstagramLogo, FacebookLogo, List, X, ShoppingCart } from '@phosphor-icons/react';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { useCart } from '@/hooks/useCart'; // <-- 1. Importa el hook del carrito

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { cart, openCart } = useCart(); // <-- 2. Obtén los datos y la función del carrito

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: '/conocenos', label: 'Quiénes Somos' },
    { href: '/carrito', label: 'Catálogo' },
    { href: '/eventos', label: 'Últimos Eventos' },
  ];

  const headerClasses = twMerge(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isScrolled || isMenuOpen ? 'bg-black/90 backdrop-blur-sm' : 'bg-black/80'
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex h-[40px] items-center">
            <Image src="/images/logo.jpg" alt="Backline Logo" width={150} height={40} className="h-full w-auto" />
          </Link>
        </div>

        {/* Navegación para Desktop */}
        <nav className="hidden md:flex flex-grow justify-center items-center space-x-8">
          {navLinks.map(link => (
             <Link key={link.href} href={link.href} className="transition-colors hover:text-gold">{link.label}</Link>
          ))}
        </nav>

        {/* Acciones Derecha (Carrito y Menú Móvil) */}
        <div className="flex items-center justify-end gap-5 flex-shrink-0">
          {/* --- ÍCONO DEL CARRITO ACTUALIZADO --- */}
          <button onClick={openCart} className="relative text-white/80 hover:text-white transition-colors">
            <ShoppingCart size={28} />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-black">
                {cart.length}
              </span>
            )}
          </button>

          {/* --- BOTÓN DE MENÚ MÓVIL --- */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
              {isMenuOpen ? <X size={28} /> : <List size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 border-t border-zinc-800">
           <nav className="flex flex-col items-center space-y-2 pt-4">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block w-full text-center py-2 rounded-md hover:bg-white/10">{link.label}</Link>
            ))}
            <div className="flex justify-center items-center space-x-6 pt-4">
              <a href="https://www.instagram.com/backline.com.co" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold"><InstagramLogo size={28} /></a>
              <a href="https://www.facebook.com/share/1YcLvJAzVa/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-gold"><FacebookLogo size={28} /></a>
            </div>
           </nav>
        </div>
      )}
    </header>
  );
};

export default Header;