"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import TerminalCard from "@/components/ui/TerminalCard";
import NetworkBackground from "@/components/ui/NetworkBackground";
import { profile } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-12">
      <NetworkBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-eyebrow mb-4">{"// Personal Portfolio"}</p>

          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Halo, saya{" "}
            <span className="gradient-text">{profile.name}</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-muted sm:text-lg">
            {profile.heroIntro}
          </p>

          <p className="mt-4 font-mono text-sm italic text-primary">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="#about" icon={<ArrowRight size={16} />}>
              About Me
            </Button>
            <Button href="#contact" variant="ghost" icon={<Mail size={16} />}>
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col items-center gap-8"
        >
          <div className="relative h-56 w-56 overflow-hidden rounded-full border-2 border-primary/30 shadow-glow sm:h-64 sm:w-64">
            <Image
              src="/images/avatar/profile.png"
              alt={profile.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <TerminalCard />
        </motion.div>
      </div>
    </section>
  );
}
