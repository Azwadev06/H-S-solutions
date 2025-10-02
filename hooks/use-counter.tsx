"use client"

import { useEffect, useRef, useState } from "react"

interface UseCounterProps {
  end: number
  duration?: number
  start?: number
}

export function useCounter({ end, duration = 2000, start = 0 }: UseCounterProps) {
  const [count, setCount] = useState(start)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [isInView])

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const easeOutQuad = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(start + (end - start) * easeOutQuad)

      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isInView, end, duration, start])

  return { count, ref }
}
