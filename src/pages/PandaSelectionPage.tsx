import { useNavigate } from 'react-router-dom'

import GiftPandaCard from '../components/GiftPandaCard'
import LiquidHeartBackground from '../components/LiquidHeartBackground'
import { pandaOptions } from '../utils/pandaOptions'

export default function PandaSelectionPage() {
  const navigate = useNavigate()

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.96),_rgba(255,244,247,0.98)_42%,_rgba(255,232,238,1)_100%)] px-4 py-10 dark:bg-[radial-gradient(circle_at_top,_rgba(45,28,35,1),_rgba(31,20,25,1)_42%,_rgba(22,15,18,1)_100%)] sm:px-6 sm:py-12">
      <LiquidHeartBackground />
      <section className="relative z-10 mx-auto max-w-5xl rounded-[2.6rem] border border-border/60 bg-card/82 p-6 shadow-[0_28px_90px_rgba(255,145,180,0.18)] backdrop-blur-xl dark:shadow-[0_28px_90px_rgba(0,0,0,0.38)] sm:p-8 lg:p-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-pink-500 dark:text-pink-300">
            Main page
          </p>
          <h1 className="mt-4 bg-[linear-gradient(135deg,rgba(255,110,168,1),rgba(255,141,91,1))] bg-clip-text text-3xl font-black text-transparent sm:text-5xl">
            Choose a panda
          </h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground sm:text-xl">
            Each one is holding a little gift for you.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pandaOptions.map((panda) => (
            <GiftPandaCard
              key={panda.id}
              title={panda.title}
              note={panda.note}
              giftColorClassName={panda.giftColorClassName}
              onClick={() => navigate(`/panda/${panda.id}`)}
            />
          ))}
        </div>
      </section>
    </main>
  )
}