import SectionReveal from "@/components/ui/SectionReveal";
import SkillBadge from "@/components/ui/SkillBadge";
import ProgressBar from "@/components/ui/ProgressBar";
import { currentlyLearning } from "@/data/site";

export default function WhatImLearning() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <p className="section-eyebrow mb-3">{"// In Progress"}</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            What I&apos;m Learning
          </h2>
          <p className="mt-3 max-w-lg text-sm text-ink-muted">
            A live snapshot of where my time is going right now — not a finished
            skill list, but a work in progress.
          </p>
        </SectionReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {currentlyLearning.map((item, i) => (
            <SectionReveal
              key={item.label}
              delay={i * 0.06}
              className="glass flex items-center gap-4 rounded-xl2 p-5"
            >
              <SkillBadge badge={item.badge} />
              <div className="flex-1">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-ink">{item.label}</span>
                  <span className="font-mono text-xs text-primary">{item.progress}%</span>
                </div>
                <div className="mt-2">
                  <ProgressBar value={item.progress} label={item.label} />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
