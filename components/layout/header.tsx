"use client";
import Link from "next/link";
import { Button, Sheet, SheetContent, SheetTrigger } from "@/components/ui/";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navigation = [
    { name: "Servicios", href: "#services" },
    { name: "Cómo funciona", href: "#how-it-works" },
    { name: "Industrias", href: "#industries" },
    { name: "Contacto", href: "#contact" },
  ];

  const logoWidth = isMobile ? 150 : 250;
  const logoHeight = isMobile ? 150 : 250;

  // Cerrar el diálogo cuando cambia de móvil a desktop
  useEffect(() => {
    if (!isMobile && isSheetOpen) {
      setIsSheetOpen(false);
    }
  }, [isMobile, isSheetOpen]);

  return (
    <header className="bg-flewtik-primary-950 fixed top-0 z-50 w-full border-b border-white/10 backdrop-blur-md">
      <div className="container mx-auto px-2 lg:px-8">
        <div className="flex h-20 items-center justify-between md:justify-center">
          {/* Logo */}
          <Link
            href="/"
            className="mx-auto ml-28 flex items-center justify-center md:mx-0 md:mr-auto"
          >
            <Image
              alt="Flewtik logo"
              className="block w-auto object-contain md:block md:h-auto"
              src="/imagotype.webp"
              width={logoWidth}
              height={logoHeight}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center justify-center space-x-8 lg:flex">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-flewtik-primary text-md font-medium text-gray-300 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white lg:hidden">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>

            {/* Asegurate que tu SheetContent tenga p-0 y botón X absoluto dentro */}
            <SheetContent side="right" className="border-zinc-800 bg-zinc-900 p-0">
              {/* Botón X ya lo tenés en SheetContent; no hace falta duplicar aquí */}
              <MobileNav
                navigation={navigation}
                onNavigate={() => setIsSheetOpen(false)}
                // activeHash={typeof window !== "undefined" ? window.location.hash : undefined}
              />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
