import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer"; // <-- 1. IMPORTA EL DRAWER

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  weight: ['400', '700', '900']
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair-display',
  weight: ['700', '800']
});

export const metadata: Metadata = {
  title: "BACKLINE | Soluciones Profesionales para Eventos",
  description: "Plataforma web para BACKLINE, una empresa de alquiler de instrumentos musicales de alta gama para productores de eventos que valoran la eficiencia y la fiabilidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <CartDrawer /> {/* <-- 2. AÑADE EL DRAWER AQUÍ, FUERA DEL MAIN */}
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}