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
      ([e]) => {
        if (e.isIntersecting) {
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
        className={className}
        style={{
          position: "relative",
          display: "inline-block",
          zIndex: 0,
        }}
      >
        {children}
        <span
          style={{
            position: "absolute",
            bottom: 0,
            left: "-2px",
            right: "-2px",
            height: 4,
            borderRadius: 2,
            backgroundColor: color,
            transform: show ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left center",
            transition: "transform 0.6s ease-out",
            pointerEvents: "none",
          }}
        />
      </span>
    )
  }

  return (
    <span
      ref={ref}
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        zIndex: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          inset: "-3px -5px",
          borderRadius: 4,
          zIndex: -1,
          pointerEvents: "none",
          backgroundColor: color,
          opacity: show ? 1 : 0,
          transform: show ? "scale(1)" : "scale(0.8)",
          transformOrigin: "center center",
          transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
        }}
      />
      {children}
    </span>
  )
}
