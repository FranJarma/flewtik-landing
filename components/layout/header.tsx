"use client";
import Link from "next/link";
import { Button, Sheet, SheetContent, SheetTrigger } from "@/components/ui/";
import { Menu } from "lucide-react";

export function Header() {
  const navigation = [
    { name: "Servicios", href: "#servicios" },
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Industrias", href: "#industrias" },
    { name: "Precios", href: "#precios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="bg-flewtik-primary glow-purple flex size-10 items-center justify-center rounded-xl">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span className="text-2xl font-bold text-white">Flewtik</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 lg:flex">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-flewtik-primary font-medium text-gray-300 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center space-x-4 lg:flex">
            <Button className="bg-flewtik-primary hover:bg-flewtik-primary/90 animate-glow px-6 font-semibold text-white">
              Empezar ahora
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="text-whites lg:hidden">
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="border-zinc-800 bg-zinc-900">
              <div className="mt-8 flex flex-col space-y-6">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-flewtik-primary py-2 font-medium text-gray-300 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-zinc-800 pt-4">
                  <Button className="bg-flewtik-primary hover:bg-flewtik-primary/90 w-full font-semibold text-white">
                    Empezar ahora
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
