"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import BlogCard from "@/components/ui/BlogCard";
import SectionReveal from "@/components/ui/SectionReveal";
import type { BlogPostSummary } from "@/types/content";

interface BlogListClientProps {
  posts: BlogPostSummary[];
  tags: string[];
}

export default function BlogListClient({ posts, tags }: BlogListClientProps) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesTag = activeTag === "All" || post.tags.includes(activeTag);
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.description.toLowerCase().includes(query.toLowerCase());
      return matchesTag && matchesQuery;
    });
  }, [posts, query, activeTag]);

  return (
    <>
      <SectionReveal className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-full border border-border bg-bg-surface/60 py-2.5 pl-10 pr-4 text-sm text-ink outline-none placeholder:text-ink-faint focus:border-primary"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {["All", ...tags].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                activeTag === tag
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-ink-muted hover:border-primary/40 hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </SectionReveal>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-ink-faint">
          No articles match &ldquo;{query}&rdquo; yet.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post, i) => (
            <SectionReveal key={post.slug} delay={Math.min(i * 0.05, 0.3)}>
              <BlogCard post={post} />
            </SectionReveal>
          ))}
        </div>
      )}
    </>
  );
}
