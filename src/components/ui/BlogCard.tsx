import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPostSummary } from "@/types/content";

function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogCard({ post }: { post: BlogPostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-border bg-bg-surface/60 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-bg-elevated">
        {post.cover && (
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="font-mono text-[11px] uppercase tracking-wide text-primary">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-lg font-semibold text-ink transition-colors group-hover:text-primary">
          {post.title}
        </h3>

        <p className="line-clamp-2 text-sm text-ink-muted">{post.description}</p>

        <div className="mt-auto flex items-center justify-between pt-3 text-xs text-ink-faint">
          <span>{formatDate(post.date)}</span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {post.readingTime}
          </span>
        </div>

        <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Read More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
