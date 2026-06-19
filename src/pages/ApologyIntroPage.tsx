import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LiquidBackground from '../components/LiquidBackground'
import PandaIllustration from '../components/PandaIllustration'

export default function ApologyIntroPage() {
  const navigate = useNavigate()
  const [showNoScreen, setShowNoScreen] = useState(false)

  return (
    <main className="screen">
      <LiquidBackground theme="pink" />

      <section className="page-shell center-shell">
        <div className="glass-card intro-card">
          <div className="badge">For my love</div>

          {showNoScreen ? (
            <>
              <div className="hero-text">
                <h1 className="section-title">WHY DID YOU CLICK NO!</h1>
                <p className="section-subtitle">
                  My poor little panda is sad now. Please fix this immediately.
                </p>
              </div>

              <PandaIllustration mood="sad" />

              <div className="button-row center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowNoScreen(false)}
                >
                  Try again
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="hero-text">
                <h1 className="section-title">
                  PLEASE ACCEPT
                  <br />
                  MY APOLOGY
                </h1>
                <p className="section-subtitle">
                  I know I messed up, and I made this little page just to ask for
                  one soft chance to make things right.
                </p>
              </div>

              <PandaIllustration mood="happy" />

              <div className="button-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => navigate('/choose-panda')}
                >
                  Yes
                </button>

                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setShowNoScreen(true)}
                >
                  No
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}