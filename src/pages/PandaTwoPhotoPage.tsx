import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackToPandasPanda from '../components/BackToPandasPanda'
import LiquidBackground from '../components/LiquidBackground'
import PhotoShapePlaceholder from '../components/PhotoShapePlaceholder'

export default function PandaTwoPhotoPage() {
  const navigate = useNavigate()
  const [showSecondCollage, setShowSecondCollage] = useState(false)

  return (
    <main className="screen">
      <LiquidBackground theme="pink" />

      <button
        type="button"
        className="floating-heart-toggle"
        onClick={() => setShowSecondCollage((current) => !current)}
        aria-label={showSecondCollage ? 'Back to first collage' : 'Open second collage'}
      >
        <span className="floating-heart-icon">❤</span>
        <span className="floating-heart-label">{showSecondCollage ? 'Back' : 'Open'}</span>
      </button>

      <section className="page-shell">
        <div className="glass-card panda-page-card">
          {!showSecondCollage ? (
            <div className="panel collage-panel">
              <p className="page-kicker">Panda 2</p>
              <h1 className="script-title">Beautiful</h1>
              <div className="small-hearts">❤ ❤ ❤</div>

              <div className="collage-top-row">
                <div className="photo-stack">
                  <PhotoShapePlaceholder
                    label="Top left photo"
                    variant="heart"
                    style={{ width: 140, height: 140 }}
                  />
                  <span className="photo-stack-label">My Love</span>
                </div>

                <PhotoShapePlaceholder
                  label="Center photo"
                  variant="circle"
                  style={{ width: 180, height: 180 }}
                />

                <div className="photo-stack">
                  <PhotoShapePlaceholder
                    label="Top right photo"
                    variant="heart"
                    style={{ width: 140, height: 140 }}
                  />
                  <span className="photo-stack-label">My Baby</span>
                </div>
              </div>

              <p className="center-script">girlfriend</p>

              <div className="collage-bottom-row">
                <PhotoShapePlaceholder
                  label="Bottom left photo"
                  variant="heart"
                  style={{ width: 130, height: 130 }}
                />
                <PhotoShapePlaceholder
                  label="Bottom right photo"
                  variant="heart"
                  style={{ width: 130, height: 130 }}
                />
              </div>
            </div>
          ) : (
            <div className="panel collage-panel">
              <p className="page-kicker">Panda 2</p>
              <h1 className="section-title alt-title">Will you be mine?</h1>

              <div className="collage-center-large">
                <PhotoShapePlaceholder
                  label="Main photo"
                  variant="rounded"
                  style={{ width: 'min(72vw, 320px)', height: 'min(56vw, 240px)' }}
                />
              </div>

              <div className="collage-bottom-row narrow">
                <PhotoShapePlaceholder
                  label="Left memory"
                  variant="heart"
                  style={{ width: 140, height: 140 }}
                />
                <PhotoShapePlaceholder
                  label="Right memory"
                  variant="heart"
                  style={{ width: 140, height: 140 }}
                />
              </div>

              <p className="date-note">11 05 2026</p>
            </div>
          )}
        </div>
      </section>

      <BackToPandasPanda onClick={() => navigate('/choose-panda')} />
    </main>
  )
}