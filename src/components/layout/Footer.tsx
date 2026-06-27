import Link from "next/link";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { profile, socialLinks } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-ink">
              HRA<span className="text-primary">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-ink-muted">{profile.tagline}</p>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <span className="section-eyebrow mb-1">Navigate</span>
            <Link href="/" className="text-ink-muted transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/projects" className="text-ink-muted transition-colors hover:text-primary">
              Projects
            </Link>
            <Link href="/blog" className="text-ink-muted transition-colors hover:text-primary">
              Blog
            </Link>
            <Link href="/resume" className="text-ink-muted transition-colors hover:text-primary">
              Resume
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="section-eyebrow mb-1">Connect</span>
            <div className="flex items-center gap-4">
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
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ink-muted transition-colors hover:text-primary"
              >
                <Instagram size={18} />
              </a>
              <a
                href={socialLinks.email}
                aria-label="Email"
                className="text-ink-muted transition-colors hover:text-primary"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-ink-faint">
          © {year} {profile.name}. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
