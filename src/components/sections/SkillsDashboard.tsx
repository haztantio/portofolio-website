import SectionReveal from "@/components/ui/SectionReveal";
import { skillGroups } from "@/data/site";

export default function SkillsDashboard() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <p className="section-eyebrow mb-3">{"// Toolbox"}</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Skills</h2>
        </SectionReveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <SectionReveal
              key={group.title}
              delay={i * 0.08}
              className="glass rounded-xl2 p-6 transition-transform hover:-translate-y-1"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-muted">
                    <span className="h-1 w-1 rounded-full bg-accent-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
