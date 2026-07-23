"use client"

import { useRef, useState, useEffect } from "react"
import type React from "react"
import { annotate } from "rough-notation"
import type { RoughAnnotation } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 2,
  animationDuration = 600,
  iterations = 2,
  padding = 3,
  multiline = true,
}: HighlighterProps) {
  const targetRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  useEffect(() => {
    const target = targetRef.current
    if (!target || !ready) return

    const raf = requestAnimationFrame(() => {
      const annotation = annotate(target, {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      })
      annotationRef.current = annotation
      annotation.show()

      const fixSVG = () => {
        const svg = target.querySelector("svg")
        if (svg) {
          svg.style.setProperty("z-index", "-1", "important")
          svg.style.setProperty("pointer-events", "none", "important")
        }
      }

      requestAnimationFrame(fixSVG)
    })

    return () => {
      cancelAnimationFrame(raf)
      annotationRef.current?.remove()
    }
  }, [
    ready,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  return (
    <span
      ref={targetRef}
      style={{
        position: "relative",
        display: "inline-block",
        zIndex: 0,
      }}
    >
      <span
        ref={textRef}
        style={{
          display: "inline",
        }}
      >
        {children}
      </span>
    </span>
  )
}
