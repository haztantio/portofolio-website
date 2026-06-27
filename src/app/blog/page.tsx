import type { Metadata } from "next";
import SectionReveal from "@/components/ui/SectionReveal";
import BlogListClient from "@/components/blog/BlogListClient";
import { getAllBlogPosts, getAllBlogTags } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "CTF writeups, Linux notes, and networking deep-dives by Hastantio Ridhwandi Adam.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const tags = getAllBlogTags();

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <p className="section-eyebrow mb-3">// Writeups & Notes</p>
          <h1 className="font-display text-4xl font-bold text-ink sm:text-5xl">Blog</h1>
          <p className="mt-4 max-w-xl text-sm text-ink-muted">
            Notes from CTFs, Linux, and networking — written so future-me (and maybe
            you) can come back to them later.
          </p>
        </SectionReveal>

        <div className="mt-10">
          <BlogListClient posts={posts} tags={tags} />
        </div>
      </div>
    </section>
  );
}
