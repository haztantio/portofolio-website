import SectionReveal from "@/components/ui/SectionReveal";
import BlogCard from "@/components/ui/BlogCard";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { getLatestBlogPosts } from "@/lib/blog";

export default function LatestBlogs() {
  const posts = getLatestBlogPosts(3);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <p className="section-eyebrow mb-3">{"// Writeups & Notes"}</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Latest Blogs</h2>
        </SectionReveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <SectionReveal key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} />
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.2} className="mt-10 flex justify-center">
          <Button href="/blog" variant="ghost" icon={<ArrowRight size={16} />}>
            View All Articles
          </Button>
        </SectionReveal>
      </div>
    </section>
  );
}
