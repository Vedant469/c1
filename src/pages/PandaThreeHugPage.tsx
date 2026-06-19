import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackToPandasPanda from '../components/BackToPandasPanda'
import LiquidBackground from '../components/LiquidBackground'
import TypewriterText from '../components/TypewriterText'

export default function PandaThreeHugPage() {
  const navigate = useNavigate()
  const [showLoveMessage, setShowLoveMessage] = useState(false)

  return (
    <main className="screen">
      <LiquidBackground theme="pink" />

      <button
        type="button"
        className="floating-heart-toggle"
        onClick={() => setShowLoveMessage((current) => !current)}
        aria-label={showLoveMessage ? 'Back to hug page' : 'Open love message page'}
      >
        <span className="floating-heart-icon">❤</span>
        <span className="floating-heart-label">{showLoveMessage ? 'Back' : 'Open'}</span>
      </button>

      <section className="page-shell">
        <div className="glass-card panda-page-card">
          {!showLoveMessage ? (
            <div className="panel type-panel">
              <div className="heart-cloud" aria-hidden="true">
                <span className="bg-heart one">❤</span>
                <span className="bg-heart two">❤</span>
                <span className="bg-heart three">❤</span>
                <span className="bg-heart four">❤</span>
                <span className="bg-heart five">❤</span>
                <span className="bg-heart six">❤</span>
              </div>

              <p className="page-kicker">Panda 3</p>

              <TypewriterText
                text="A virtual hug"
                className="type-main"
                speedMs={90}
                startDelayMs={200}
              />

              <div className="hug-emoji">🫂</div>

              <p className="section-subtitle tighter">
                A tiny hug from me to you.
              </p>
            </div>
          ) : (
            <div className="panel type-panel second-panel">
              <div className="heart-cloud" aria-hidden="true">
                <span className="bg-heart one">❤</span>
                <span className="bg-heart two">❤</span>
                <span className="bg-heart three">❤</span>
                <span className="bg-heart four">❤</span>
                <span className="bg-heart five">❤</span>
                <span className="bg-heart six">❤</span>
              </div>

              <div className="love-board">
                <TypewriterText
                  text="I love you"
                  className="love-type"
                  speedMs={140}
                  startDelayMs={250}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <BackToPandasPanda onClick={() => navigate('/choose-panda')} />
    </main>
  )
}