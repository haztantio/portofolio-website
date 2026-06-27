"use client";

import { useEffect, useState } from "react";

const LINES = [
  { prompt: "whoami", output: "hastantio_ridhwandi_adam" },
  { prompt: "cat role.txt", output: "Internet Engineering Technology — UGM" },
  { prompt: "cat focus.txt", output: "Cybersecurity · Networking · IoT" },
  { prompt: "status", output: "online — currently learning" },
];

/**
 * A typed terminal sequence in place of a generic stat block — this is
 * the hero's signature element, grounded in the subject (a networking /
 * cybersecurity student) rather than a decorative add-on.
 */
export default function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedOutput, setTypedOutput] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines >= LINES.length) return;

    const current = LINES[visibleLines].output;
    let charIndex = 0;
    setTypedOutput("");

    const typingInterval = setInterval(() => {
      charIndex += 1;
      setTypedOutput(current.slice(0, charIndex));

      if (charIndex >= current.length) {
        clearInterval(typingInterval);
        setTimeout(() => setVisibleLines((prev) => prev + 1), 450);
      }
    }, 28);

    return () => clearInterval(typingInterval);
  }, [visibleLines]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setShowCursor((prev) => !prev), 550);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="glass-strong w-full max-w-md rounded-xl2 p-5 shadow-card">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-2 font-mono text-xs text-ink-faint">guest@hra-portfolio:~</span>
      </div>

      <div className="space-y-2 font-mono text-sm">
        {LINES.slice(0, visibleLines).map((line) => (
          <div key={line.prompt}>
            <p className="text-ink-muted">
              <span className="text-accent-green">$</span> {line.prompt}
            </p>
            <p className="text-primary">{line.output}</p>
          </div>
        ))}

        {visibleLines < LINES.length && (
          <div>
            <p className="text-ink-muted">
              <span className="text-accent-green">$</span> {LINES[visibleLines].prompt}
            </p>
            <p className="text-primary">
              {typedOutput}
              <span className={showCursor ? "opacity-100" : "opacity-0"}>▌</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
