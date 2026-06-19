import { Heart } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BackToPandasPanda from '../components/BackToPandasPanda'
import FloatingHeartToggle from '../components/FloatingHeartToggle'
import LiquidHeartBackground from '../components/LiquidHeartBackground'
import { Button } from '../lib/shadcn/button'
import { Progress } from '../lib/shadcn/progress'

const forgivenessSteps: readonly [10, 25, 40, 55, 70, 85, 100] = [10, 25, 40, 55, 70, 85, 100]

function getProgressMessage(progress: number) {
  if (progress >= 100) {
    return 'Fully forgiven'
  }

  return `${progress}% forgiven`
}

export default function PandaFourProgressPage() {
  const navigate = useNavigate()
  const [stepIndex, setStepIndex] = useState(0)

  const fallbackProgressValue = forgivenessSteps[0]
  const progressValue = forgivenessSteps[stepIndex] ?? fallbackProgressValue
  const progressMessage = useMemo(() => getProgressMessage(progressValue), [progressValue])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(255,245,247,1)_42%,_rgba(255,233,239,1)_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_top,_rgba(47,31,38,1),_rgba(33,21,26,1)_42%,_rgba(24,16,20,1)_100%)] sm:px-6 sm:py-8">
      <LiquidHeartBackground />
      <FloatingHeartToggle
        active={progressValue >= 100}
        onClick={() => setStepIndex((current) => Math.min(current + 1, forgivenessSteps.length - 1))}
        activeLabel="Done"
        inactiveLabel="Heal"
        activeAriaLabel="Forgiveness meter is full"
        inactiveAriaLabel="Increase forgiveness meter"
      />
      <section className="relative z-10 mx-auto max-w-3xl space-y-5">
        <div className="rounded-[2.2rem] border border-pink-200/70 bg-white/90 p-5 text-center shadow-[0_26px_60px_rgba(255,145,180,0.15)] backdrop-blur-xl dark:border-pink-900/40 dark:bg-card/84 sm:p-6">
          <p className="text-lg leading-9 text-foreground sm:text-2xl sm:leading-10">
            I&apos;m sorryyy, i hurted you. But trust me i never wanted to hurt you. I always wanted to care and see you happy. I am sorry sorry sorry.
            <span className="ml-1">❤️</span>
          </p>
          <p className="mt-3 text-3xl">🥺</p>
        </div>

        <div className="rounded-[2.5rem] border border-pink-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,246,248,1))] p-5 text-center shadow-[0_30px_90px_rgba(255,145,180,0.18)] backdrop-blur-xl dark:border-pink-900/40 dark:bg-[linear-gradient(180deg,rgba(40,26,32,0.96),rgba(31,21,26,0.98))] sm:p-8">
          <p className="text-xl font-semibold uppercase tracking-[0.24em] text-pink-500 dark:text-pink-300 sm:text-2xl">
            Forgiveness meter <span className="align-middle">❤️</span>
          </p>

          <div className="mx-auto mt-8 flex h-44 w-44 items-end justify-center rounded-full bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,1),rgba(255,252,253,0.98)_55%,rgba(255,240,244,1)_100%)] shadow-inner ring-1 ring-pink-100 dark:ring-pink-900/40 sm:h-52 sm:w-52">
            <div className="relative mb-3 h-28 w-28 sm:h-32 sm:w-32">
              <div className="absolute left-3 top-0 h-7 w-7 rounded-full bg-zinc-900 sm:h-8 sm:w-8" />
              <div className="absolute right-3 top-0 h-7 w-7 rounded-full bg-zinc-900 sm:h-8 sm:w-8" />
              <div className="absolute inset-x-2 top-3 h-20 rounded-[45%] bg-white ring-1 ring-black/5 dark:bg-zinc-100 sm:h-24" />
              <div className="absolute left-1/2 top-[2.4rem] h-12 w-14 -translate-x-1/2 rounded-full bg-white dark:bg-zinc-100 sm:top-[2.9rem]" />
              <div className="absolute left-1/2 top-[2.85rem] h-3.5 w-5 -translate-x-1/2 rounded-full bg-zinc-900 sm:top-[3.45rem]" />
              <div className="absolute left-[2.05rem] top-[3.55rem] h-4 w-4 rounded-full border-t-2 border-zinc-900 sm:left-[2.35rem] sm:top-[4.25rem]" />
              <div className="absolute right-[2.05rem] top-[3.55rem] h-4 w-4 rounded-full border-t-2 border-zinc-900 sm:right-[2.35rem] sm:top-[4.25rem]" />
              <div className="absolute bottom-0 left-1/2 h-10 w-24 -translate-x-1/2 rounded-t-[999px] bg-orange-200 sm:h-11 sm:w-28" />
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <Progress value={progressValue} className="h-5 bg-pink-100 dark:bg-pink-950/50" />
            <div className="mt-4 bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,151,95,1))] bg-clip-text text-2xl font-black uppercase tracking-[0.16em] text-transparent sm:text-3xl">
              {progressMessage}
            </div>
          </div>

          <p className="mt-7 text-xl italic text-pink-500 dark:text-pink-300 sm:text-2xl">
            Tap the floating heart to heal my heart!
          </p>

          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              size="icon"
              onClick={() => setStepIndex((current) => Math.min(current + 1, forgivenessSteps.length - 1))}
              aria-label="Increase forgiveness meter"
              className="h-24 w-24 rounded-full border border-pink-200/70 bg-[linear-gradient(135deg,rgba(255,115,64,1),rgba(255,110,168,1))] text-white shadow-[0_18px_42px_rgba(236,72,153,0.26)] hover:brightness-105 dark:border-pink-900/50 dark:text-white"
            >
              <Heart className="h-10 w-10 fill-current" />
            </Button>
          </div>
        </div>
      </section>

      <BackToPandasPanda onClick={() => navigate('/choose-panda')} />
    </main>
  )
}