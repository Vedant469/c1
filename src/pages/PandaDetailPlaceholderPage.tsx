import { ArrowLeft } from 'lucide-react'
import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import LiquidHeartBackground from '../components/LiquidHeartBackground'
import { Button } from '../lib/shadcn/button'
import { pandaOptions } from '../utils/pandaOptions'
import PandaFourProgressPage from './PandaFourProgressPage'
import PandaOneApologyPage from './PandaOneApologyPage'
import PandaThreeHugPage from './PandaThreeHugPage'
import PandaTwoPhotoPage from './PandaTwoPhotoPage'

export default function PandaDetailPlaceholderPage() {
  const navigate = useNavigate()
  const { pandaId } = useParams<{ pandaId: string }>()

  const panda = useMemo(
    () => pandaOptions.find((option) => option.id === pandaId),
    [pandaId]
  )

  if (pandaId === 'panda-1') {
    return <PandaOneApologyPage />
  }

  if (pandaId === 'panda-2') {
    return <PandaTwoPhotoPage />
  }

  if (pandaId === 'panda-3') {
    return <PandaThreeHugPage />
  }

  if (pandaId === 'panda-4') {
    return <PandaFourProgressPage />
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.96),_rgba(255,244,247,0.98)_42%,_rgba(255,232,238,1)_100%)] px-4 py-8 dark:bg-[radial-gradient(circle_at_top,_rgba(45,28,35,1),_rgba(31,20,25,1)_42%,_rgba(22,15,18,1)_100%)]">
      <LiquidHeartBackground />
      <section className="relative z-10 w-full max-w-xl rounded-[2rem] border border-border/60 bg-card/90 p-6 text-center shadow-[0_22px_60px_rgba(255,145,180,0.18)] backdrop-blur dark:shadow-[0_22px_60px_rgba(0,0,0,0.34)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-pink-500 dark:text-pink-300">
          Coming next
        </p>
        <h1 className="mt-3 text-3xl font-black text-foreground sm:text-4xl">
          {panda?.title ?? 'This panda'} page
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          This is the page that opens when a panda is clicked. Send me the next reference image and I’ll build this screen exactly how you want it.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/choose-panda')}
            className="rounded-full px-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to pandas
          </Button>
        </div>
      </section>
    </main>
  )
}