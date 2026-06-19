import { Navigate, useParams } from 'react-router-dom'
import PandaFourProgressPage from './PandaFourProgressPage'
import PandaOneApologyPage from './PandaOneApologyPage'
import PandaThreeHugPage from './PandaThreeHugPage'
import PandaTwoPhotoPage from './PandaTwoPhotoPage'

export default function PandaPageRouter() {
  const { pandaId } = useParams<{ pandaId: string }>()

  switch (pandaId) {
    case 'panda-1':
      return <PandaOneApologyPage />
    case 'panda-2':
      return <PandaTwoPhotoPage />
    case 'panda-3':
      return <PandaThreeHugPage />
    case 'panda-4':
      return <PandaFourProgressPage />
    default:
      return <Navigate to="/choose-panda" replace />
  }
}