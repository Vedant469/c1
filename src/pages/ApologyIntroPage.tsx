import { useState } from 'react'
import { Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import LiquidHeartBackground from '../components/LiquidHeartBackground'
import { Button } from '../lib/shadcn/button'
import PandaIllustration from '../components/PandaIllustration'

export default function ApologyIntroPage() {
  const navigate = useNavigate()
  const [showNoScreen, setShowNoScreen] = useState(false)

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92),_rgba(255,240,244,0.96)_45%,_rgba(255,226,235,1)_100%)] px-4 py-8 dark:bg-[radial-gradient(circle_at_top,_rgba(48,27,34,1),_rgba(35,21,27,1)_45%,_rgba(24,16,19,1)_100%)]">
      <LiquidHeartBackground />
      <section className="relative z-10 w-full max-w-md rounded-[2.5rem] border border-border/60 bg-card/92 p-6 text-card-foreground shadow-[0_28px_84px_rgba(255,145,180,0.22)] backdrop-blur-xl dark:shadow-[0_28px_84px_rgba(0,0,0,0.42)] sm:p-8">
        <div className="mb-5 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/92 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-pink-700 shadow-sm backdrop-blur dark:border-pink-900/60 dark:bg-card/82 dark:text-pink-200">
            <Heart className="h-3.5 w-3.5 fill-current" />
            For my love
          </span>
        </div>

        {showNoScreen ? (
          <>
            <div className="text-center">
              <h1 className="bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,141,91,1))] bg-clip-text text-3xl font-black uppercase tracking-[0.14em] text-transparent sm:text-4xl">
                Why did you click no!
              </h1>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                My poor little panda is sad now. Please fix this immediately.
              </p>
            </div>

            <PandaIllustration className="mt-6" mood="sad" />

            <div className="mt-8 flex justify-center">
              <Button
                type="button"
                onClick={() => setShowNoScreen(false)}
                className="rounded-full border-2 border-orange-300 bg-[linear-gradient(135deg,rgba(255,115,64,1),rgba(255,155,92,1))] px-8 text-base font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_18px_34px_rgba(255,115,64,0.34)] hover:brightness-105 dark:border-orange-300 dark:bg-[linear-gradient(135deg,rgba(255,157,102,1),rgba(255,189,130,1))] dark:text-orange-950"
              >
                Try again
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="text-center">
              <h1 className="bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,141,91,1))] bg-clip-text text-3xl font-black uppercase tracking-[0.16em] text-transparent sm:text-4xl">
                Please accept
                <br />
                my apology
              </h1>
              <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                I know I messed up, and I made this little page just to ask for one soft chance to make things right.
              </p>
            </div>

            <PandaIllustration className="mt-6" />

            <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
              <Button
                type="button"
                onClick={() => navigate('/choose-panda')}
                className="min-w-28 rounded-full border-2 border-orange-300 bg-[linear-gradient(135deg,rgba(255,115,64,1),rgba(255,155,92,1))] px-6 text-base font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_18px_34px_rgba(255,115,64,0.34)] hover:brightness-105 dark:border-orange-300 dark:bg-[linear-gradient(135deg,rgba(255,157,102,1),rgba(255,189,130,1))] dark:text-orange-950"
              >
                Yes
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowNoScreen(true)}
                className="min-w-28 rounded-full border-2 border-orange-300 bg-white/92 px-5 text-base font-extrabold uppercase tracking-[0.08em] text-orange-500 shadow-sm backdrop-blur hover:bg-orange-50 hover:text-orange-600 dark:border-orange-300 dark:bg-card/88 dark:text-orange-300 dark:hover:bg-orange-950/40 dark:hover:text-orange-200"
              >
                No
              </Button>
            </div>
          </>
        )}
      </section>
    </main>
  )
}