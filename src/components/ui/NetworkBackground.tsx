"use client";

const PARTICLES = [
  { path: "M 0,80 L 200,80 L 200,200 L 500,200", duration: 6, delay: 0 },
  { path: "M 600,0 L 600,150 L 350,150 L 350,400", duration: 7, delay: 1.2 },
  { path: "M 0,300 L 250,300 L 250,100 L 700,100", duration: 8, delay: 2.4 },
];

export default function NetworkBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Slow animated radial glow */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 animate-pulse-slow rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] animate-pulse-slow rounded-full bg-accent-green/10 blur-3xl [animation-delay:1.5s]" />

      {/* Faint circuit grid */}
      <div className="absolute inset-0 grid-overlay opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />

      {/* Network lines with traveling packets */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 700 400"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {PARTICLES.map((p, i) => (
          <path
            key={i}
            d={p.path}
            fill="none"
            stroke="#00D9FF"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
        ))}
        {PARTICLES.map((p, i) => (
          <circle key={`dot-${i}`} r="3" fill="#00D9FF">
            <animateMotion
              dur={`${p.duration}s`}
              begin={`${p.delay}s`}
              repeatCount="indefinite"
              path={p.path}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
