"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
  label?: string;
}

export default function ProgressBar({ value, label }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-bg-elevated">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent-green"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label}
        />
      </div>
    </div>
  );
}
