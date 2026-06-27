import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import { profile, socialLinks } from "@/data/site";

const links = [
  { label: "GitHub", href: socialLinks.github, icon: Github },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
  { label: "Instagram", href: socialLinks.instagram, icon: Instagram },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <SectionReveal>
          <p className="section-eyebrow mb-3">{"// Let&apos;s Connect"}</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Have a project, an internship, or just want to talk security?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink-muted">
            I&apos;m always open to conversations about networking, cybersecurity, and IoT —
            reach out and I&apos;ll get back to you.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={socialLinks.email} icon={<Mail size={16} />}>
            {profile.email}
          </Button>
        </SectionReveal>

        <SectionReveal delay={0.18} className="mt-10 flex justify-center gap-6">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass flex h-12 w-12 items-center justify-center rounded-full text-ink-muted transition-colors hover:border-primary hover:text-primary"
              aria-label={label}
            >
              <Icon size={18} />
            </a>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}
