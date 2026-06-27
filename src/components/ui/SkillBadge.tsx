import { Database, Code2, ShieldHalf, Network, Terminal, Cpu, Globe, LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  database: Database,
  code: Code2,
  shield: ShieldHalf,
  network: Network,
  linux: Terminal,
  iot: Cpu,
  web: Globe,
};

interface SkillBadgeProps {
  badge: keyof typeof ICONS;
}

/**
 * Brief design note: "badge mirip seperti logo berwarna putih" — a clean
 * white monoline icon inside a soft glass circle, not a colorful sticker.
 */
export default function SkillBadge({ badge }: SkillBadgeProps) {
  const Icon = ICONS[badge] ?? Code2;

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-bg-elevated text-ink shadow-glow-sm">
      <Icon size={20} strokeWidth={1.75} className="text-white" />
    </div>
  );
}
