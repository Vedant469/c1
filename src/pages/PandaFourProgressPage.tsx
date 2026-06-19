import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackToPandasPanda from '../components/BackToPandasPanda'
import LiquidBackground from '../components/LiquidBackground'

const forgivenessSteps = [10, 25, 40, 55, 70, 85, 100] as const

export default function PandaFourProgressPage() {
  const navigate = useNavigate()
  const [stepIndex, setStepIndex] = useState(0)

  const progressValue = forgivenessSteps[stepIndex] ?? 10
  const progressMessage =
    progressValue >= 100 ? 'Fully forgiven' : `${progressValue}% forgiven`

  return (
    <main className="screen">
      <LiquidBackground theme="sunset" />

      <section className="page-shell progress-shell">
        <div className="glass-card progress-note-card">
          <p>
            I&apos;m sorryyy, I hurted you. But trust me I never wanted to hurt
            you. I always wanted to care and see you happy. I am sorry sorry
            sorry. ❤️
          </p>
          <div className="note-emoji">🥺</div>
        </div>

        <div className="glass-card progress-card">
          <p className="page-kicker">Panda 4</p>
          <h1 className="section-title progress-title">Sorry progress bar</h1>

          <div className="meter-panda">
            <span className="meter-ear left" />
            <span className="meter-ear right" />
            <span className="meter-head" />
            <span className="meter-blush left" />
            <span className="meter-blush right" />
            <span className="meter-eye left" />
            <span className="meter-eye right" />
            <span className="meter-nose" />
            <span className="meter-smile left" />
            <span className="meter-smile right" />
          </div>

          <div className="meter-track">
            <div className="meter-fill" style={{ width: `${progressValue}%` }} />
          </div>

          <div className="meter-status">{progressMessage}</div>

          <p className="meter-hint">Tap the heart to heal my heart!</p>

          <button
            type="button"
            className="meter-heart"
            onClick={() =>
              setStepIndex((current) =>
                Math.min(current + 1, forgivenessSteps.length - 1)
              )
            }
            aria-label="Increase forgiveness"
          >
            ❤
          </button>

          {progressValue === 100 ? (
            <p className="meter-done">You fully healed it.</p>
          ) : null}
        </div>
      </section>

      <BackToPandasPanda onClick={() => navigate('/choose-panda')} />
    </main>
  )
}