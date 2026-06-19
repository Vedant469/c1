import { useNavigate, useParams } from 'react-router-dom'
import { pandaOptions } from '../data/pandaOptions'

export default function PandaDetailPage() {
  const navigate = useNavigate()
  const { pandaId } = useParams()

  const panda = pandaOptions.find((item) => item.id === pandaId)

  return (
    <main className="placeholder-page">
      <section className="placeholder-card">
        <p className="section-kicker">Next page</p>
        <h1 className="section-title">{panda?.title ?? 'This panda'} page</h1>
        <p className="section-subtitle">
          This page opens when that panda is clicked. Send me the next screenshot
          and I’ll build this exact page for you.
        </p>

        <button
          type="button"
          className="btn btn-outline"
          onClick={() => navigate('/choose-panda')}
        >
          Back to pandas
        </button>
      </section>
    </main>
  )
}