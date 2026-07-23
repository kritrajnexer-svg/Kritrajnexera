"use client";

import { useState, useEffect } from "react";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReducedMotion;
}

export default function TypeInHeading({
  as: Tag = "h1",
  children,
  className,
  delay = 0,
}: {
  as?: "h1" | "h2" | "h3";
  children: string;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const text = typeof children === "string" ? children : "";
  const [display, setDisplay] = useState(prefersReducedMotion ? text : "");
  const [done, setDone] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const t1 = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, 35);
    }, delay * 1000);
    return () => {
      clearTimeout(t1);
      if (interval) clearInterval(interval);
    };
  }, [text, delay, prefersReducedMotion]);

  return (
    <Tag className={`font-display ${className ?? ""}`}>
      {display}
      {!done && (
        <span className="inline-block w-[2px] h-[1em] bg-brand-500 ml-0.5 align-text-bottom animate-pulse" />
      )}
    </Tag>
  );
}
