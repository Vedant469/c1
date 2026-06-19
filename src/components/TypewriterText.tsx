import { useEffect, useMemo, useState } from 'react'

type TypewriterTextProps = {
  text: string
  className?: string
  speedMs?: number
  startDelayMs?: number
  cursorClassName?: string
}

export default function TypewriterText({
  text,
  className,
  speedMs = 90,
  startDelayMs = 0,
  cursorClassName,
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

  const visibleText = useMemo(() => text.slice(0, visibleLength), [text, visibleLength])
  const isComplete = visibleLength >= text.length

  return (
    <span className={className}>
      {visibleText}
      <span className={cursorClassName ?? 'ml-1 inline-block animate-pulse'} aria-hidden="true">
        {isComplete ? '' : '|'}
      </span>
    </span>
  )
}