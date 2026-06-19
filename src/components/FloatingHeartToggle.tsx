import { Heart, Sparkles } from 'lucide-react'

type FloatingHeartToggleProps = {
  active: boolean
  onClick: () => void
  activeLabel: string
  inactiveLabel: string
  activeAriaLabel: string
  inactiveAriaLabel: string
}

export default function FloatingHeartToggle({
  active,
  onClick,
  activeLabel,
  inactiveLabel,
  activeAriaLabel,
  inactiveAriaLabel,
}: FloatingHeartToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={active ? activeAriaLabel : inactiveAriaLabel}
      className="fixed bottom-24 right-4 z-20 flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-105 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
    >
      <span className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-white/92 text-pink-500 shadow-[0_18px_38px_rgba(236,72,153,0.22)] ring-1 ring-pink-200/70 backdrop-blur dark:bg-card/92 dark:text-pink-300 dark:ring-pink-900/60">
        <span className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.9),rgba(255,255,255,0))]" />
        <Heart className="relative z-10 h-8 w-8 fill-current" />
        <Sparkles className="absolute right-2 top-2 h-3.5 w-3.5 text-orange-300 dark:text-orange-200" />
      </span>
      <span className="rounded-full border border-pink-200/80 bg-white/92 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-pink-600 shadow-md backdrop-blur dark:border-pink-900/60 dark:bg-card/92 dark:text-pink-300">
        {active ? activeLabel : inactiveLabel}
      </span>
    </button>
  )
}