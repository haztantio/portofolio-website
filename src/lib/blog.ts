import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { markdownToHtml, estimateReadingTime } from "./markdown";
import type { BlogPost, BlogPostSummary } from "@/types/content";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Adding a new article only requires dropping one .md file into
 * /content/blog — nothing here needs to change.
 */
function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllBlogSlugs(): string[] {
  return getBlogSlugs();
}

/**
 * Returns every blog post's metadata (no HTML rendering), sorted by
 * date descending — newest first. Used for list pages and the
 * homepage's "Latest Blogs" section.
 */
export function getAllBlogPosts(): BlogPostSummary[] {
  const slugs = getBlogSlugs();

  const posts = slugs.map((slug) => {
    const fullPath = path.join(BLOG_DIR, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug ?? slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
      tags: data.tags ?? [],
      cover: data.cover ?? "",
      readingTime: estimateReadingTime(content),
    } as BlogPostSummary;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getLatestBlogPosts(count: number): BlogPostSummary[] {
  return getAllBlogPosts().slice(0, count);
}

export function getAllBlogTags(): string[] {
  const posts = getAllBlogPosts();
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}

/**
 * Returns one fully-rendered article (markdown -> HTML) by slug.
 * Used by the [slug] article route.
 */
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = await markdownToHtml(content);

  return {
    slug: data.slug ?? slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    tags: data.tags ?? [],
    cover: data.cover ?? "",
    readingTime: estimateReadingTime(content),
    contentHtml,
  };
}
