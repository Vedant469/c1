import { useEffect, useState } from 'react'

import './motion-effects.css'

export default function LoadingIntro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setVisible(false)
    }, 2200)

    return () => window.clearTimeout(timeoutId)
  }, [])

  return (
    <div className={visible ? 'loading-intro' : 'loading-intro loading-intro--hidden'} aria-hidden={!visible}>
      <div className="loading-intro__glow" />
      <div className="loading-intro__card">
        <div className="loading-intro__heart" />
        <div className="loading-intro__badge">Made for Sanu</div>
        <h1 className="loading-intro__title">Please Wait</h1>
        <p className="loading-intro__copy">
          Opening your apology story with a little extra love, glow, and softness.
        </p>
        <div className="loading-intro__dots">
          <span className="loading-intro__dot" />
          <span className="loading-intro__dot" />
          <span className="loading-intro__dot" />
        </div>
      </div>
    </div>
  )
}