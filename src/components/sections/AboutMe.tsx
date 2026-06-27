import SectionReveal from "@/components/ui/SectionReveal";
import { profile } from "@/data/site";

export default function AboutMe() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <p className="section-eyebrow mb-3">{"// About Me"}</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Who I&apos;m becoming
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="glass mt-8 rounded-xl2 p-8 sm:p-10">
          <div className="space-y-4 text-base leading-relaxed text-ink-muted">
            {profile.aboutParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-8 border-l-2 border-primary pl-5">
            <p className="font-display text-lg italic text-ink">&ldquo;{profile.motto}&rdquo;</p>
            <p className="mt-2 text-sm text-ink-muted">{profile.mottoFollowUp}</p>
          </blockquote>
        </SectionReveal>
      </div>
    </section>
  );
}
