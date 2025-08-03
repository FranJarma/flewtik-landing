"use client";

import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  size?: number;
  iconSize?: number;
  className?: string;
  label?: string;
  labelClassName?: string;
};

export function SocialMedia({ size = 10, iconSize = 5, className, label, labelClassName }: Props) {
  const socialLinks = [
    { href: "#", icon: Linkedin },
    { href: "#", icon: Instagram },
  ];

  return (
    <div className={cn("flex flex-col space-y-3", className)}>
      {label && (
        <span className={cn("text-sm font-medium text-gray-400", labelClassName)}>{label}</span>
      )}

      <div className="flex space-x-4">
        {socialLinks.map(({ href, icon: Icon }, i) => (
          <Link
            key={i}
            href={href}
            className={cn(
              `hover:bg-flewtik-primary flex size-${size} items-center justify-center rounded-lg bg-zinc-800 transition-colors duration-300`,
            )}
          >
            <Icon className={`size-${iconSize} text-gray-400 hover:text-white`} />
          </Link>
        ))}
      </div>
    </div>
  );
}
