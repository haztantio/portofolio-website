import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center px-6">
      <div className="mx-auto max-w-md text-center">
        <p className="font-mono text-sm text-primary">404 — Not Found</p>
        <h1 className="mt-3 font-display text-3xl font-bold text-ink">
          This route doesn&apos;t exist.
        </h1>
        <p className="mt-3 text-sm text-ink-muted">
          The page you&apos;re looking for may have been moved, renamed, or never
          existed in the first place.
        </p>
        <div className="mt-8 flex justify-center">
          <Button href="/" icon={<ArrowLeft size={16} />}>
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}
