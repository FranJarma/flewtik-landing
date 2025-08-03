"use client";

import Link from "next/link";
import Image from "next/image";
import { SheetClose } from "@/components/ui";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SocialMedia } from "../ui/social-media";

type NavItem = { name: string; href: string };
type Props = {
  navigation: NavItem[];
  onNavigate?: () => void;
};

export function MobileNav({ navigation, onNavigate }: Props) {
  return (
    <div className="flex h-full flex-col bg-zinc-900">
      {/* Logo */}
      <div className="sticky top-0 z-10 flex items-center justify-center px-4 py-3 backdrop-blur">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/isotype.webp" alt="Flewtik" width={150} height={150} priority />
        </Link>
      </div>

      {/* Navegación */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="space-y-4">
          {navigation.map(item => (
            <li key={item.name}>
              <SheetClose asChild>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  className={cn(
                    "group flex items-center justify-between rounded-2xl px-4 py-3.5",
                    "bg-[flewtik-950] ring-1 ring-[#ffffff1a]",
                    "hover:ring-flewtik-primary transition",
                    "text-gray-100",
                  )}
                >
                  <span className="text-base font-medium">{item.name}</span>
                  <ChevronRight className="group-hover:text-flewtik-primary size-5 text-white/60 transition group-hover:translate-x-0.5" />
                </Link>
              </SheetClose>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto border-t border-white/10 px-4 py-4">
        <SocialMedia className="justify-start" label="Síguenos en nuestras redes sociales" />
      </div>
    </div>
  );
}
