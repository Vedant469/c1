import { Navigate, Route, Routes } from 'react-router-dom'

import LoadingIntro from '../src/components/LoadingIntro'
import PageTransitionShell from '../src/components/PageTransitionShell'
import ApologyIntroPage from '../src/pages/ApologyIntroPage'
import PandaDetailPlaceholderPage from '../src/pages/PandaDetailPlaceholderPage'
import PandaSelectionPage from '../src/pages/PandaSelectionPage'

export default function App() {
  return (
    <>
      <LoadingIntro />
      <PageTransitionShell>
        <Routes>
          <Route path="/" element={<ApologyIntroPage />} />
          <Route path="/choose-panda" element={<PandaSelectionPage />} />
          <Route path="/panda/:pandaId" element={<PandaDetailPlaceholderPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageTransitionShell>
    </>
  )
}