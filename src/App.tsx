import { Navigate, Route, Routes } from 'react-router-dom'
import ApologyIntroPage from './pages/ApologyIntroPage'
import PandaPageRouter from './pages/PandaPageRouter'
import PandaSelectionPage from './pages/PandaSelectionPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ApologyIntroPage />} />
      <Route path="/choose-panda" element={<PandaSelectionPage />} />
      <Route path="/panda/:pandaId" element={<PandaPageRouter />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}