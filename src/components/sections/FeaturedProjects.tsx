import SectionReveal from "@/components/ui/SectionReveal";
import ProjectAccordion from "@/components/ui/ProjectAccordion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects } from "@/lib/projects";

export default async function FeaturedProjects() {
  const projects = await getFeaturedProjects(3);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionReveal className="flex items-end justify-between">
          <div>
            <p className="section-eyebrow mb-3">// Featured Work</p>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Featured Projects
            </h2>
          </div>
        </SectionReveal>

        <div className="mt-8 space-y-4">
          {projects.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.08}>
              <ProjectAccordion project={project} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.2} className="mt-8 flex justify-center">
          <Button href="/projects" variant="ghost" icon={<ArrowRight size={16} />}>
            View All Projects
          </Button>
        </SectionReveal>
      </div>
    </section>
  );
}
