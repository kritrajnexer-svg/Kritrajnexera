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
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
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
      <span ref={ref} className={`relative inline-block ${className}`}>
        {children}
        <span
          className={`absolute bottom-0 left-0 h-[3px] rounded-full transition-all duration-700 ease-out ${inView ? "w-full" : "w-0"}`}
          style={{ backgroundColor: color }}
        />
      </span>
    )
  }

  return (
    <span
      ref={ref}
      className={`relative inline-block rounded-md transition-all duration-700 ease-out ${inView ? "bg-opacity-100" : "bg-opacity-0"} ${className}`}
      style={{
        backgroundColor: inView ? color : "transparent",
        transition: "background-color 0.7s ease-out",
      }}
    >
      {children}
    </span>
  )
}
