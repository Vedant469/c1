import { useEffect, useState } from 'react'

type TypewriterTextProps = {
  text: string
  className?: string
  speedMs?: number
  startDelayMs?: number
}

export default function TypewriterText({
  text,
  className = '',
  speedMs = 90,
  startDelayMs = 0,
}: TypewriterTextProps) {
  const [visibleLength, setVisibleLength] = useState(0)

  useEffect(() => {
    setVisibleLength(0)

    let intervalId: number | undefined

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setVisibleLength((current) => {
          if (current >= text.length) {
            if (intervalId !== undefined) {
              window.clearInterval(intervalId)
            }
            return current
          }

          return current + 1
        })
      }, speedMs)
    }, startDelayMs)

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId !== undefined) {
        window.clearInterval(intervalId)
      }
    }
  }, [startDelayMs, speedMs, text])

  const visibleText = text.slice(0, visibleLength)

  return (
    <span className={className}>
      {visibleText}
      {visibleLength < text.length ? <span className="type-cursor">|</span> : null}
    </span>
  )
}