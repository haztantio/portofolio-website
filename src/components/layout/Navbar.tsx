"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { socialLinks } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-ink"
          aria-label="HRA — back to home"
        >
          HRA<span className="text-primary">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-ink-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-muted transition-colors hover:text-primary"
          >
            <Github size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-muted transition-colors hover:text-primary"
          >
            <Linkedin size={18} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-primary hover:text-primary"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        <button
          className="text-ink md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="glass-strong border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${
                  pathname === link.href ? "text-primary" : "text-ink-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-ink-muted">
                <Github size={18} />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-ink-muted">
                <Linkedin size={18} />
              </a>
              <button onClick={toggleTheme} aria-label="Toggle dark mode" className="text-ink-muted">
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
