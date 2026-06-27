import type { Metadata } from "next";
import { Download, Mail } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import { profile, experiences, skillGroups } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and CV of Hastantio Ridhwandi Adam.",
};

export default function ResumePage() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionReveal className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="section-eyebrow mb-3">{"// Resume"}</p>
            <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-sm text-ink-muted">
              {profile.role} · {profile.university}
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.08} className="mt-8 flex flex-wrap gap-4">
          <Button href="/resume.pdf" external icon={<Download size={16} />}>
            Download CV
          </Button>
          <Button href={`mailto:${profile.email}`} variant="ghost" icon={<Mail size={16} />}>
            Email Me
          </Button>
        </SectionReveal>

        <p className="mt-3 text-xs text-ink-faint">
          (Replace <code className="font-mono text-primary">/public/resume.pdf</code> with your
          actual CV file — it&apos;s a placeholder path for now.)
        </p>

        <SectionReveal delay={0.12} className="glass mt-10 rounded-xl2 p-8">
          <h2 className="font-display text-lg font-semibold text-ink">Summary</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            {profile.aboutParagraphs[0]} {profile.aboutParagraphs[1]}
          </p>
        </SectionReveal>

        <SectionReveal delay={0.16} className="mt-10">
          <h2 className="font-display text-lg font-semibold text-ink">Experience</h2>
          <div className="mt-4 space-y-3">
            {experiences.map((exp) => (
              <div key={exp.role} className="glass rounded-xl2 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-ink">{exp.role}</h3>
                  <span className="font-mono text-xs text-primary">{exp.period}</span>
                </div>
                <p className="mt-1 text-xs text-ink-muted">{exp.organization}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2} className="mt-10">
          <h2 className="font-display text-lg font-semibold text-ink">Skills</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="glass rounded-xl2 p-5">
                <h3 className="font-mono text-xs uppercase tracking-wide text-primary">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
