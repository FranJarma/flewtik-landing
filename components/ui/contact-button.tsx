import Link from "next/link";
import { ReactNode } from "react";

type ContactButtonProps = {
  text: string;
  className?: string;
  children?: ReactNode;
};

export function ContactButton({ text, className = "", children }: ContactButtonProps) {
  return (
    <Link
      href="#contact"
      className={`bg-flewtik-primary animate-glow inline-flex items-center justify-center rounded-md px-8 text-xl font-semibold text-white ${className}`}
    >
      {text}
      {children}
    </Link>
  );
}
