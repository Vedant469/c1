import { useNavigate } from 'react-router-dom'
import GiftPandaCard from '../components/GiftPandaCard'
import LiquidBackground from '../components/LiquidBackground'
import { pandaOptions } from '../data/pandaOptions'

export default function PandaSelectionPage() {
  const navigate = useNavigate()

  return (
    <main className="screen">
      <LiquidBackground theme="pink" />

      <section className="page-shell">
        <div className="glass-card selection-card">
          <p className="page-kicker">Main page</p>
          <h1 className="section-title">Choose a panda</h1>
          <p className="section-subtitle">
            Each one is holding a little gift for you.
          </p>

          <div className="selection-grid">
            {pandaOptions.map((panda) => (
              <GiftPandaCard
                key={panda.id}
                title={panda.title}
                note={panda.note}
                giftColorClass={panda.giftColorClass}
                onClick={() => navigate(`/panda/${panda.id}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}