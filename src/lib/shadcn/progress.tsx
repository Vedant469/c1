import { cn } from './utils'

type ProgressProps = {
  value?: number
  className?: string
}

export function Progress({ value = 0, className }: ProgressProps) {
  const safeValue = Math.max(0, Math.min(100, value))

  return (
    <div
      className={cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800',
        className
      )}
    >
      <div
        className="h-full bg-pink-500 transition-all"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  )
}