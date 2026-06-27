import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock } from "lucide-react";
import SectionReveal from "@/components/ui/SectionReveal";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/blog";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="px-6 py-28">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="font-mono text-[11px] uppercase tracking-wide text-primary">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-xs text-ink-faint">
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} /> {post.readingTime}
            </span>
          </div>
        </SectionReveal>

        {post.cover && (
          <SectionReveal delay={0.1}>
            <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl2 border border-border bg-bg-elevated">
              <Image src={post.cover} alt={post.title} fill className="object-cover" priority />
            </div>
          </SectionReveal>
        )}

        <SectionReveal delay={0.15}>
          <div
            className="prose-cyber prose prose-invert mt-10 max-w-none"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </SectionReveal>
      </div>
    </article>
  );
}
