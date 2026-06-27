import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import ProjectAccordion from "@/components/ui/ProjectAccordion";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Hastantio Ridhwandi Adam spanning IoT, Linux, networking, and software — completed, in progress, and upcoming.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <p className="section-eyebrow mb-3">{"// Portfolio"}</p>
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">
            My / Upcoming Projects
          </h1>
          <p className="mt-4 max-w-xl text-sm text-ink-muted">
            Click any project to expand its description, tech stack, and links. New
            projects are added simply by dropping a markdown file into{" "}
            <code className="font-mono text-primary">/content/projects</code>.
          </p>
        </SectionReveal>

        <div className="mt-12 space-y-4">
          {projects.map((project, i) => (
            <SectionReveal key={project.slug} delay={i * 0.06}>
              <ProjectAccordion project={project} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
