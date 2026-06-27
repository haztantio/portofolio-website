"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Github, FileText, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/types/content";

const CATEGORY_ICON: Record<string, string> = {
  IoT: "🌱",
  "Linux / Networking": "🗄️",
  Networking: "🌐",
  Programming: "🐍",
};

const STATUS_STYLE: Record<string, string> = {
  "In Progress": "bg-primary/10 text-primary border-primary/30",
  Completed: "bg-accent-green/10 text-accent-green border-accent-green/30",
  "Coming Soon": "bg-ink-faint/10 text-ink-faint border-border",
};

export default function ProjectAccordion({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const icon = CATEGORY_ICON[project.category] ?? "💼";

  return (
    <div className="overflow-hidden rounded-xl2 border border-border bg-bg-surface/60 transition-colors hover:border-primary/30">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl2 bg-bg-elevated text-xl">
            {icon}
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-base font-semibold text-ink md:text-lg">
                {project.title}
              </h3>
              {project.comingSoon && <Sparkles size={14} className="text-accent-amber" />}
            </div>
            <p className="text-xs text-ink-muted">{project.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`hidden rounded-full border px-3 py-1 text-xs font-medium sm:inline-block ${
              STATUS_STYLE[project.status] ?? STATUS_STYLE["In Progress"]
            }`}
          >
            {project.status}
          </span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown size={18} className="text-ink-muted" />
          </motion.span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="border-t border-border px-6 py-6">
              <p className="text-sm leading-relaxed text-ink-muted">{project.description}</p>

              {project.technology.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technology.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-bg-elevated px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {project.images.length > 0 && (
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {project.images.map((img) => (
                    <div
                      key={img}
                      className="relative aspect-video overflow-hidden rounded-lg border border-border bg-bg-elevated"
                    >
                      <Image src={img} alt={project.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              )}

              {project.collaborators && (
                <p className="mt-4 text-xs text-ink-faint">
                  Collaborated with: <span className="text-ink-muted">{project.collaborators}</span>
                </p>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    <Github size={14} /> {project.githubLabel || "View on GitHub"}
                  </a>
                )}
                {project.documents && (
                  <a
                    href={project.documents}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    <FileText size={14} /> {project.documentsLabel || "View Documents"}
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-ink-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {project.comingSoon && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-medium text-ink-faint">
                    Launching {project.comingSoonYear}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
