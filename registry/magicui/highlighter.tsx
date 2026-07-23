"use client"

import { useRef, useState, useEffect } from "react"
import type React from "react"

type AnnotationAction = "highlight" | "underline"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  className?: string
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#fde68a",
  className = "",
}: HighlighterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (action === "underline") {
    return (
      <span
        ref={ref}
        className={`relative inline-block ${className}`}
        style={{ position: "relative", display: "inline-block" }}
      >
        {children}
        <span
          className="absolute bottom-0 left-0 h-[3px] rounded-full transition-all duration-700 ease-out"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 3,
            borderRadius: 999,
            backgroundColor: color,
            width: show ? "100%" : 0,
            transition: "width 0.7s ease-out",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      </span>
    )
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{ position: "relative", display: "inline-block" }}
    >
      <span style={{ position: "relative", zIndex: 2, display: "inline" }}>
        {children}
      </span>
      <span
        style={{
          position: "absolute",
          inset: "-3px -6px",
          borderRadius: 6,
          zIndex: 1,
          pointerEvents: "none",
          backgroundColor: show ? color : "transparent",
          transition: "background-color 0.6s ease-out",
        }}
      />
    </span>
  )
}
