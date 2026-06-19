import { Camera, Heart, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BackToPandasPanda from '../components/BackToPandasPanda'
import FloatingHeartToggle from '../components/FloatingHeartToggle'
import LiquidHeartBackground from '../components/LiquidHeartBackground'
import PhotoShapePlaceholder from '../components/PhotoShapePlaceholder'

export default function PandaTwoPhotoPage() {
  const navigate = useNavigate()
  const [showAltCollage, setShowAltCollage] = useState(false)

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(255,245,247,1)_42%,_rgba(255,233,239,1)_100%)] px-4 py-5 dark:bg-[radial-gradient(circle_at_top,_rgba(47,31,38,1),_rgba(33,21,26,1)_42%,_rgba(24,16,20,1)_100%)] sm:px-6 sm:py-8">
      <LiquidHeartBackground />
      <FloatingHeartToggle
        active={showAltCollage}
        onClick={() => setShowAltCollage((current) => !current)}
        activeLabel="Back"
        inactiveLabel="Open"
        activeAriaLabel="Show first collage"
        inactiveAriaLabel="Show second collage"
      />

      <section className="relative z-10 mx-auto max-w-5xl rounded-[2.7rem] border border-pink-200/70 bg-white/78 p-4 shadow-[0_30px_96px_rgba(255,145,180,0.2)] backdrop-blur-xl dark:border-pink-900/40 dark:bg-card/78 dark:shadow-[0_30px_96px_rgba(0,0,0,0.38)] sm:p-6 lg:p-8">
        {!showAltCollage ? (
          <div className="relative overflow-hidden rounded-[2.35rem] border border-pink-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,247,250,0.98))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-pink-900/50 dark:bg-[linear-gradient(180deg,rgba(40,26,32,0.96),rgba(31,21,26,0.98))] sm:p-6 lg:p-8">
            <div className="absolute inset-y-0 left-2 w-20 rounded-full bg-pink-100/40 blur-2xl dark:bg-pink-900/20" />
            <div className="absolute inset-y-0 right-2 w-20 rounded-full bg-rose-100/40 blur-2xl dark:bg-rose-900/20" />
            <Sparkles className="absolute left-6 top-6 h-5 w-5 text-pink-300 dark:text-pink-400" />
            <Sparkles className="absolute right-8 top-8 h-4 w-4 text-orange-300 dark:text-orange-300" />

            <div className="relative mx-auto max-w-4xl text-center">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl border border-orange-200/80 bg-white/92 p-2.5 shadow-sm backdrop-blur dark:border-orange-900/60 dark:bg-card/88">
                  <Camera className="h-7 w-7 text-orange-400 dark:text-orange-300" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-pink-400 dark:text-pink-300">
                  Panda 2
                </p>
              </div>

              <h1 className="mt-4 bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,151,95,1))] bg-clip-text font-serif text-4xl italic text-transparent sm:text-5xl">
                Beautiful
              </h1>

              <div className="mt-3 flex items-center justify-center gap-2 text-pink-300 dark:text-pink-400">
                <Heart className="h-4 w-4 fill-current" />
                <Heart className="h-3.5 w-3.5 fill-current" />
                <Heart className="h-4 w-4 fill-current" />
              </div>

              <div className="mt-8 flex flex-wrap items-end justify-center gap-5 lg:gap-8">
                <div className="flex flex-col items-center gap-3">
                  <PhotoShapePlaceholder
                    label="Top left photo"
                    src="/images/topleft.jpeg"
                    alt="Top left photo"
                    variant="heart"
                    style={{ width: 140, height: 140 }}
                  />
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-foreground sm:text-base">
                    My Love
                  </p>
                </div>

                <PhotoShapePlaceholder
                  label="Center photo"
                  src="/images/center.jpeg"
                  alt="Center photo"
                  variant="circle"
                  style={{ width: 200, height: 200 }}
                />

                <div className="flex flex-col items-center gap-3">
                  <PhotoShapePlaceholder
                    label="Top right photo"
                    src="/images/topright.jpeg"
                    alt="Top right photo"
                    variant="heart"
                    style={{ width: 140, height: 140 }}
                  />
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-foreground sm:text-base">
                    My Baby
                  </p>
                </div>
              </div>

              <p className="mt-6 bg-[linear-gradient(135deg,rgba(255,132,186,1),rgba(255,173,129,1))] bg-clip-text text-center font-serif text-4xl italic text-transparent sm:text-5xl">
                girlfriend
              </p>

              <div className="mt-5 flex flex-wrap justify-center gap-5 sm:gap-8">
                <PhotoShapePlaceholder
                  label="Bottom left photo"
                  src="/images/bottomleft.jpeg"
                  alt="Bottom left photo"
                  variant="heart"
                  style={{ width: 132, height: 132 }}
                />
                <PhotoShapePlaceholder
                  label="Bottom right photo"
                  src="/images/bottomright.jpeg"
                  alt="Bottom right photo"
                  variant="heart"
                  style={{ width: 132, height: 132 }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-[2.35rem] border border-pink-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,247,250,0.98))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] dark:border-pink-900/50 dark:bg-[linear-gradient(180deg,rgba(40,26,32,0.96),rgba(31,21,26,0.98))] sm:p-6 lg:p-8">
            <div className="absolute left-10 top-20 hidden h-px w-32 bg-pink-300/70 sm:block" />
            <div className="absolute right-10 top-20 hidden h-px w-32 bg-pink-300/70 sm:block" />
            <Sparkles className="absolute left-8 top-8 h-5 w-5 text-pink-300 dark:text-pink-400" />
            <Sparkles className="absolute right-8 top-8 h-4 w-4 text-orange-300 dark:text-orange-300" />

            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-pink-400 dark:text-pink-300">
                Panda 2 memory page
              </p>
              <h1 className="mt-4 bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,151,95,1))] bg-clip-text text-3xl font-black text-transparent sm:text-5xl">
                Will you be mine?
              </h1>

              <div className="mt-8 flex justify-center">
                <PhotoShapePlaceholder
                  label="Main photo"
                  src="/images/mainphoto.jpeg"
                  alt="Main photo"
                  variant="rounded"
                  style={{ width: 'min(76vw, 340px)', height: 'min(58vw, 250px)' }}
                />
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-5 sm:gap-10">
                <PhotoShapePlaceholder
                  label="Left memory"
                  src="/images/leftmemory.jpeg"
                  alt="Left memory"
                  variant="heart"
                  style={{ width: 144, height: 144 }}
                />
                <PhotoShapePlaceholder
                  label="Right memory"
                  src="/images/rightmemory.jpeg"
                  alt="Right memory"
                  variant="heart"
                  style={{ width: 144, height: 144 }}
                />
              </div>

              <p className="mt-6 bg-[linear-gradient(135deg,rgba(255,132,186,1),rgba(255,173,129,1))] bg-clip-text text-xl font-semibold italic text-transparent sm:text-3xl">
                11 05 2026
              </p>
            </div>
          </div>
        )}
      </section>

      <BackToPandasPanda onClick={() => navigate('/choose-panda')} />
    </main>
  )
}