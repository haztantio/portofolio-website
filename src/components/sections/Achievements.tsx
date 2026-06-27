import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/site";

export default function Achievements() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <p className="section-eyebrow mb-3">// Recognition</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Achievements</h2>
        </SectionReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <SectionReveal
              key={item.title}
              delay={i * 0.1}
              className="group overflow-hidden rounded-xl2 border border-border bg-bg-surface/60 transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-elevated">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-accent-amber">
                  <Trophy size={16} />
                  <h3 className="font-display text-sm font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.caption}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
