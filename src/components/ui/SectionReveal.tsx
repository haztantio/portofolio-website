"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section";
}

/**
 * Single shared scroll-reveal primitive so every section animates the
 * same way (fade + slight rise), keeping motion consistent and restrained
 * per the brief: "Smooth Animation... No excessive animation."
 */
export default function SectionReveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: SectionRevealProps) {
  const transition = { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const };
  const variants = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
  };

  if (as === "section") {
    return (
      <motion.section
        initial={variants.initial}
        whileInView={variants.whileInView}
        viewport={{ once: true, margin: "-80px" }}
        transition={transition}
        className={className}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.whileInView}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
