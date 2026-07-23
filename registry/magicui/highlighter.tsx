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
  const elementRef = useRef<HTMLSpanElement>(null)
  const annotationRef = useRef<RoughAnnotation | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setReady(true)
  }, [])

  useEffect(() => {
    const element = elementRef.current
    if (!element || !ready) return

    const show = () => {
      if (annotationRef.current) {
        annotationRef.current.remove()
      }

      const annotation = annotate(element, {
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
    }

    const raf = requestAnimationFrame(() => {
      show()
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
    <span ref={elementRef} className="relative inline-block bg-transparent">
      {children}
    </span>
  )
}
