import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

/**
 * Converts a markdown string into sanitized-enough HTML with:
 * - GitHub-flavored markdown (tables, strikethrough, task lists)
 * - heading slugs + anchor links (for internal links / deep linking)
 * - syntax highlighting for fenced code blocks
 *
 * Used by both the blog and the project content pipelines, since both
 * are simple frontmatter + markdown-body files under /content.
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

/**
 * Very small, dependency-free reading time estimate.
 * Average adult silent reading speed ~200 words per minute.
 */
export function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
