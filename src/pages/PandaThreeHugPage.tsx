import { Heart } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BackToPandasPanda from '../components/BackToPandasPanda'
import FloatingHeartToggle from '../components/FloatingHeartToggle'
import LiquidHeartBackground from '../components/LiquidHeartBackground'
import TypewriterText from '../components/TypewriterText'

export default function PandaThreeHugPage() {
  const navigate = useNavigate()
  const [showLoveMessage, setShowLoveMessage] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(255,245,247,1)_42%,_rgba(255,233,239,1)_100%)] px-4 py-6 dark:bg-[radial-gradient(circle_at_top,_rgba(47,31,38,1),_rgba(33,21,26,1)_42%,_rgba(24,16,20,1)_100%)] sm:px-6 sm:py-8">
      <LiquidHeartBackground />
      <FloatingHeartToggle
        active={showLoveMessage}
        onClick={() => setShowLoveMessage((current) => !current)}
        activeLabel="Back"
        inactiveLabel="Open"
        activeAriaLabel="Show virtual hug page"
        inactiveAriaLabel="Show love note page"
      />

      <section className="relative z-10 mx-auto flex min-h-[88vh] w-full max-w-5xl items-center justify-center rounded-[2.7rem] border border-pink-200/70 bg-white/78 p-4 shadow-[0_30px_96px_rgba(255,145,180,0.2)] backdrop-blur-xl dark:border-pink-900/40 dark:bg-card/78 dark:shadow-[0_30px_96px_rgba(0,0,0,0.38)] sm:p-6 lg:p-8">
        {!showLoveMessage ? (
          <div className="relative flex w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-[2.35rem] border border-pink-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,247,250,0.98))] px-5 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-pink-900/50 dark:bg-[linear-gradient(180deg,rgba(40,26,32,0.96),rgba(31,21,26,0.98))] sm:px-8 sm:py-12">
            <div className="absolute inset-0 opacity-70">
              <Heart className="absolute left-[8%] top-[12%] h-6 w-6 fill-pink-200 text-pink-200 dark:fill-pink-900/60 dark:text-pink-900/60" />
              <Heart className="absolute left-[18%] top-[28%] h-4 w-4 fill-rose-200 text-rose-200 dark:fill-rose-900/60 dark:text-rose-900/60" />
              <Heart className="absolute right-[12%] top-[16%] h-5 w-5 fill-pink-200 text-pink-200 dark:fill-pink-900/60 dark:text-pink-900/60" />
              <Heart className="absolute right-[22%] top-[34%] h-4 w-4 fill-rose-200 text-rose-200 dark:fill-rose-900/60 dark:text-rose-900/60" />
              <Heart className="absolute left-[14%] bottom-[20%] h-5 w-5 fill-pink-200 text-pink-200 dark:fill-pink-900/60 dark:text-pink-900/60" />
              <Heart className="absolute right-[10%] bottom-[18%] h-6 w-6 fill-rose-200 text-rose-200 dark:fill-rose-900/60 dark:text-rose-900/60" />
            </div>

            <p className="relative z-10 text-sm font-semibold uppercase tracking-[0.34em] text-pink-400 dark:text-pink-300">
              Panda 3
            </p>
            <TypewriterText
              text="Virtual hug for ya!"
              className="relative z-10 mt-4 block bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,151,95,1))] bg-clip-text text-2xl font-black tracking-[0.1em] text-transparent sm:text-4xl"
              speedMs={85}
              startDelayMs={250}
              cursorClassName="ml-1 inline-block animate-pulse text-orange-300"
            />

            <div className="relative z-10 mt-10 flex flex-col items-center">
              <div className="relative h-44 w-40 sm:h-52 sm:w-48">
                <div className="absolute left-5 top-5 h-12 w-12 rounded-full bg-[#c9a22c] sm:h-14 sm:w-14" />
                <div className="absolute right-5 top-5 h-12 w-12 rounded-full bg-[#c9a22c] sm:h-14 sm:w-14" />
                <div className="absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-[46%] bg-[#f8fbff] shadow-retool-md ring-1 ring-black/5 sm:h-32 sm:w-32" />
                <div className="absolute bottom-0 left-1/2 h-28 w-24 -translate-x-1/2 rounded-[45%] bg-[#d7b03a] sm:h-32 sm:w-28" />
                <div className="absolute left-11 top-16 h-8 w-8 rounded-full bg-[#f8fbff] sm:left-12 sm:top-[4.4rem]" />
                <div className="absolute right-11 top-16 h-8 w-8 rounded-full bg-[#f8fbff] sm:right-12 sm:top-[4.4rem]" />
                <div className="absolute left-1/2 top-24 h-5 w-7 -translate-x-1/2 rounded-full bg-[#7f5a00] sm:top-[6.5rem]" />
                <div className="absolute left-[4.3rem] top-[6.7rem] h-3 w-3 rounded-full border-b-2 border-[#7f5a00] sm:left-[5.1rem] sm:top-[7.2rem]" />
                <div className="absolute right-[4.3rem] top-[6.7rem] h-3 w-3 rounded-full border-b-2 border-[#7f5a00] sm:right-[5.1rem] sm:top-[7.2rem]" />
                <div className="absolute left-1/2 top-[7.2rem] h-12 w-12 -translate-x-1/2 rounded-full border-4 border-[#f8fbff] border-t-transparent border-l-transparent bg-transparent rotate-45 sm:top-[7.9rem]" />
              </div>

              <div className="mt-2 flex items-center gap-3 text-pink-300 dark:text-pink-400">
                <Heart className="h-4 w-4 fill-current" />
                <Heart className="h-5 w-5 fill-current" />
                <Heart className="h-4 w-4 fill-current" />
              </div>
            </div>

            <TypewriterText
              text="I MISS YOU"
              className="relative z-10 mt-8 block bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,151,95,1))] bg-clip-text text-4xl font-black uppercase tracking-[0.12em] text-transparent sm:text-6xl"
              speedMs={110}
              startDelayMs={1650}
              cursorClassName="ml-1 inline-block animate-pulse text-orange-300"
            />
          </div>
        ) : (
          <div className="relative flex w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-[2.35rem] border border-orange-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,247,250,0.98))] px-4 py-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-orange-900/50 dark:bg-[linear-gradient(180deg,rgba(40,26,32,0.96),rgba(31,21,26,0.98))] sm:px-8 sm:py-12">
            <div className="absolute left-0 top-0 h-4 w-full bg-orange-400" />
            <div className="absolute bottom-0 left-0 h-4 w-full bg-orange-400" />

            <div className="w-full max-w-2xl rounded-[2rem] border border-pink-200/70 bg-white/94 px-6 py-10 shadow-[0_20px_46px_rgba(255,145,180,0.14)] backdrop-blur dark:border-pink-900/50 dark:bg-card/90 sm:px-10 sm:py-14">
              <TypewriterText
                text="I LOVE YOU"
                className="block bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,151,95,1))] bg-clip-text text-5xl font-black uppercase leading-none tracking-[0.14em] text-transparent sm:text-7xl"
                speedMs={140}
                startDelayMs={300}
                cursorClassName="ml-1 inline-block animate-pulse text-orange-300"
              />
            </div>
          </div>
        )}
      </section>

      <BackToPandasPanda onClick={() => navigate('/choose-panda')} />
    </main>
  )
}