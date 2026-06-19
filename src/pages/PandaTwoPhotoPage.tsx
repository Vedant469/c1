import { Camera, Heart } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import BackToPandasPanda from '../components/BackToPandasPanda'
import PhotoShapePlaceholder from '../components/PhotoShapePlaceholder'

export default function PandaTwoPhotoPage() {
  const navigate = useNavigate()
  const [showAltCollage, setShowAltCollage] = useState(false)

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(255,245,247,1)_42%,_rgba(255,233,239,1)_100%)] px-4 py-5 dark:bg-[radial-gradient(circle_at_top,_rgba(47,31,38,1),_rgba(33,21,26,1)_42%,_rgba(24,16,20,1)_100%)] sm:px-6 sm:py-8">
      <button
        type="button"
        onClick={() => setShowAltCollage((current) => !current)}
        className="fixed bottom-24 right-4 z-20 flex flex-col items-center gap-1 text-pink-500 transition-transform hover:scale-105 dark:text-pink-300 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2"
        aria-label={showAltCollage ? 'Show first collage' : 'Show second collage'}
      >
        <Heart className="h-14 w-14 fill-current drop-shadow-[0_10px_18px_rgba(236,72,153,0.28)]" />
        <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-pink-600 shadow-md dark:bg-card/95 dark:text-pink-300">
          {showAltCollage ? 'Back' : 'Open'}
        </span>
      </button>

      <section className="mx-auto max-w-5xl rounded-[2.5rem] border border-pink-200/70 bg-white/84 p-4 shadow-[0_24px_70px_rgba(255,145,180,0.18)] backdrop-blur dark:border-pink-900/40 dark:bg-card/80 dark:shadow-[0_24px_70px_rgba(0,0,0,0.34)] sm:p-6 lg:p-8">
        {!showAltCollage ? (
          <div className="relative overflow-hidden rounded-[2rem] border border-pink-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,248,250,1))] p-4 dark:border-pink-900/50 dark:bg-[linear-gradient(180deg,rgba(37,24,29,0.96),rgba(30,20,24,0.98))] sm:p-6 lg:p-8">
            <div className="absolute inset-y-0 left-2 w-16 rounded-full bg-pink-100/40 blur-xl dark:bg-pink-900/20" />
            <div className="absolute inset-y-0 right-2 w-16 rounded-full bg-rose-100/40 blur-xl dark:bg-rose-900/20" />

            <div className="relative mx-auto max-w-4xl">
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl bg-orange-50 p-2 shadow-sm ring-1 ring-orange-200 dark:bg-orange-950/40 dark:ring-orange-900/60">
                  <Camera className="h-7 w-7 text-orange-400 dark:text-orange-300" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-400 dark:text-pink-300">
                  Panda 2
                </p>
              </div>

              <h1 className="mt-2 text-center font-serif text-3xl italic text-foreground sm:text-4xl">
                Beautiful
              </h1>

              <div className="mt-2 flex items-center justify-center gap-2 text-pink-300 dark:text-pink-400">
                <Heart className="h-4 w-4 fill-current" />
                <Heart className="h-3.5 w-3.5 fill-current" />
                <Heart className="h-4 w-4 fill-current" />
              </div>

              <div className="mt-8 grid gap-4 sm:hidden">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <PhotoShapePlaceholder
                      label="Top left photo"
                      src="/images/topleft.jpeg"
                      alt="Top left photo"
                      variant="heart"
                      className="h-28 w-28"
                    />
                    <p className="text-base font-semibold text-foreground">My Love</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <PhotoShapePlaceholder
                      label="Top right photo"
                      src="/images/topright.jpeg"
                      alt="Top right photo"
                      variant="heart"
                      className="h-28 w-28"
                    />
                    <p className="text-base font-semibold text-foreground">My Baby</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <PhotoShapePlaceholder
                    label="Center photo"
                    src="/images/center.jpeg"
                    alt="Center photo"
                    variant="circle"
                    className="h-32 w-32"
                  />
                </div>

                <p className="text-center text-2xl font-semibold italic text-pink-400">girlfriend</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-center">
                    <PhotoShapePlaceholder
                      label="Bottom left photo"
                      src="/images/bottomleft.jpeg"
                      alt="Bottom left photo"
                      variant="heart"
                      className="h-28 w-28"
                    />
                  </div>
                  <div className="flex justify-center">
                    <PhotoShapePlaceholder
                      label="Bottom right photo"
                      src="/images/bottomright.jpeg"
                      alt="Bottom right photo"
                      variant="heart"
                      className="h-28 w-28"
                    />
                  </div>
                </div>
              </div>

              <div className="relative mt-8 hidden min-h-[34rem] sm:block">
                <PhotoShapePlaceholder
                  label="Top left photo"
                  src="/images/topleft.jpeg"
                  alt="Top left photo"
                  variant="heart"
                  className="absolute left-10 top-2 h-32 w-32"
                />
                <PhotoShapePlaceholder
                  label="Top center photo"
                  src="/images/center.jpeg"
                  alt="Top center photo"
                  variant="rounded"
                  className="absolute left-1/2 top-16 h-32 w-32 -translate-x-1/2 rounded-full"
                />
                <PhotoShapePlaceholder
                  label="Top right photo"
                  src="/images/topright.jpeg"
                  alt="Top right photo"
                  variant="heart"
                  className="absolute right-10 top-2 h-32 w-32"
                />

                <div className="absolute left-8 top-28 text-sm font-semibold text-foreground">
                  My Love
                </div>
                <div className="absolute right-8 top-28 text-sm font-semibold text-foreground">
                  My Baby
                </div>

                <div className="absolute left-[18%] top-36 h-0.5 w-[18%] bg-pink-300" />
                <div className="absolute right-[18%] top-36 h-0.5 w-[18%] bg-pink-300" />

                <PhotoShapePlaceholder
                  label="Center photo"
                  src="/images/center.jpeg"
                  alt="Center photo"
                  variant="circle"
                  className="absolute left-1/2 top-44 h-40 w-40 -translate-x-1/2"
                />

                <PhotoShapePlaceholder
                  label="Bottom left photo"
                  src="/images/bottomleft.jpeg"
                  alt="Bottom left photo"
                  variant="heart"
                  className="absolute left-20 bottom-10 h-28 w-28"
                />
                <PhotoShapePlaceholder
                  label="Bottom right photo"
                  src="/images/bottomright.jpeg"
                  alt="Bottom right photo"
                  variant="heart"
                  className="absolute right-20 bottom-10 h-28 w-28"
                />

                <p className="absolute left-1/2 top-[64%] -translate-x-1/2 text-3xl font-semibold italic text-pink-400">
                  girlfriend
                </p>

                <Heart className="absolute left-4 top-24 h-4 w-4 fill-pink-300 text-pink-300 dark:fill-pink-400 dark:text-pink-400" />
                <Heart className="absolute right-4 top-28 h-4 w-4 fill-pink-300 text-pink-300 dark:fill-pink-400 dark:text-pink-400" />
                <Heart className="absolute left-16 bottom-20 h-3 w-3 fill-rose-300 text-rose-300 dark:fill-rose-400 dark:text-rose-400" />
                <Heart className="absolute right-14 bottom-16 h-3 w-3 fill-orange-300 text-orange-300 dark:fill-orange-400 dark:text-orange-400" />
              </div>
            </div>
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-[2rem] border border-pink-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,248,250,1))] p-4 dark:border-pink-900/50 dark:bg-[linear-gradient(180deg,rgba(37,24,29,0.96),rgba(30,20,24,0.98))] sm:p-6 lg:p-8">
            <div className="absolute left-10 top-24 hidden h-0.5 w-28 bg-pink-300 sm:block" />
            <div className="absolute right-10 top-24 hidden h-0.5 w-28 bg-pink-300 sm:block" />

            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-3xl font-black text-orange-400 sm:text-5xl">
                Will you be mine?
              </h1>

              <div className="mt-8 grid gap-5 sm:hidden">
                <div className="flex justify-center">
                  <PhotoShapePlaceholder
                    label="Main photo"
                    src="/images/mainphoto.jpeg"
                    alt="Main photo"
                    variant="rounded"
                    className="h-48 w-56 rounded-[3rem]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-center">
                    <PhotoShapePlaceholder
                      label="Left memory"
                      src="/images/leftmemory.jpeg"
                      alt="Left memory"
                      variant="heart"
                      className="h-28 w-28"
                    />
                  </div>
                  <div className="flex justify-center">
                    <PhotoShapePlaceholder
                      label="Right memory"
                      src="/images/rightmemory.jpeg"
                      alt="Right memory"
                      variant="heart"
                      className="h-28 w-28"
                    />
                  </div>
                </div>

                <p className="text-center text-lg italic text-pink-300">11 05 2026</p>
              </div>

              <div className="relative mt-8 hidden min-h-[34rem] sm:block">
                <PhotoShapePlaceholder
                  label="Main photo"
                  src="/images/mainphoto.jpeg"
                  alt="Main photo"
                  variant="rounded"
                  className="absolute left-1/2 top-8 h-56 w-72 -translate-x-1/2 rounded-[3rem]"
                />

                <PhotoShapePlaceholder
                  label="Left memory"
                  src="/images/leftmemory.jpeg"
                  alt="Left memory"
                  variant="heart"
                  className="absolute left-16 bottom-16 h-32 w-32"
                />
                <PhotoShapePlaceholder
                  label="Right memory"
                  src="/images/rightmemory.jpeg"
                  alt="Right memory"
                  variant="heart"
                  className="absolute right-16 bottom-16 h-32 w-32"
                />

                <p className="absolute left-1/2 bottom-6 -translate-x-1/2 text-2xl italic text-pink-300">
                  11 05 2026
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      <BackToPandasPanda onClick={() => navigate('/choose-panda')} />
    </main>
  )
}