import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  icon?: ReactNode;
}

export default function Button({ href, children, variant = "primary", external, icon }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variantClasses =
    variant === "primary"
      ? "bg-primary text-bg shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5"
      : "border border-border text-ink hover:border-primary hover:text-primary";

  const className = `${baseClasses} ${variantClasses}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
      {icon}
    </Link>
  );
}
