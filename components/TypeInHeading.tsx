"use client";

import { useState, useEffect } from "react";

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
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const text = typeof children === "string" ? children : "";

  useEffect(() => {
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
  }, [text, delay]);

  return (
    <Tag className={`font-display ${className ?? ""}`}>
      {display}
      {!done && (
        <span className="inline-block w-[2px] h-[1em] bg-brand-500 ml-0.5 align-text-bottom animate-pulse" />
      )}
    </Tag>
  );
}
