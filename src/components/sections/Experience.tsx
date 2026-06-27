import SectionReveal from "@/components/ui/SectionReveal";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/site";

export default function Experience() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <p className="section-eyebrow mb-3">// Organizational Experience</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Experience</h2>
        </SectionReveal>

        <div className="relative mt-10 space-y-6 border-l border-border pl-8">
          {experiences.map((exp, i) => (
            <SectionReveal key={exp.role + exp.period} delay={i * 0.08} className="relative">
              <span className="absolute -left-[2.55rem] flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-bg-surface text-primary">
                <Briefcase size={13} />
              </span>
              <div className="glass rounded-xl2 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-ink">{exp.role}</h3>
                  <span className="font-mono text-xs text-primary">{exp.period}</span>
                </div>
                <p className="mt-1 text-sm text-ink-muted">{exp.organization}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
