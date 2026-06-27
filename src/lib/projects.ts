import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdown";
import type { Project } from "@/types/content";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

/**
 * Returns every project, fully rendered, sorted by the `order` field
 * declared in its frontmatter. New projects only require a new .md
 * file under /content/projects — no code changes needed.
 */
export async function getAllProjects(): Promise<Project[]> {
  const slugs = getProjectSlugs();

  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const fullPath = path.join(PROJECTS_DIR, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const contentHtml = await markdownToHtml(content);

      return {
        slug: data.slug ?? slug,
        title: data.title ?? slug,
        category: data.category ?? "",
        status: data.status ?? "In Progress",
        description: data.description ?? "",
        technology: data.technology ?? [],
        images: data.images ?? [],
        github: data.github ?? "",
        githubLabel: data.githubLabel ?? "View on GitHub",
        demo: data.demo ?? "",
        documents: data.documents ?? "",
        documentsLabel: data.documentsLabel ?? "View Documents",
        collaborators: data.collaborators ?? "",
        featured: data.featured ?? false,
        order: data.order ?? 999,
        comingSoon: data.comingSoon ?? false,
        comingSoonYear: data.comingSoonYear ?? "",
        contentHtml,
      } as Project;
    })
  );

  return projects.sort((a, b) => a.order - b.order);
}

export async function getFeaturedProjects(count: number): Promise<Project[]> {
  const all = await getAllProjects();
  return all.filter((p) => p.featured).slice(0, count);
}
