import { type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import './motion-effects.css'

type PageTransitionShellProps = {
  children: ReactNode
}

export default function PageTransitionShell({ children }: PageTransitionShellProps) {
  const location = useLocation()

  return (
    <div className="page-transition-shell">
      <div key={location.pathname} className="page-transition-shell__content">
        {children}
      </div>
    </div>
  )
}