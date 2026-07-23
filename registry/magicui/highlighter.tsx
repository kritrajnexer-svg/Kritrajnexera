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
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const slotRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  useEffect(() => {
    const slot = slotRef.current
    if (!slot || !ready) return

    const raf = requestAnimationFrame(() => {
      const annotation = annotate(slot, {
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

      requestAnimationFrame(() => {
        const svg = slot.querySelector("svg")
        if (svg) {
          svg.style.pointerEvents = "none"
          svg.style.zIndex = "-1"
        }
      })
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
      ref={wrapperRef}
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <span
        ref={slotRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
      <span
        style={{
          position: "relative",
          display: "inline",
        }}
      >
        {children}
      </span>
    </span>
  )
}
