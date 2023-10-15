import { RoutePaths } from './RoutePaths.jsx'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='status-container'>
      <h3 className='h3'>Page not found.</h3>
      <button onClick={() => navigate(RoutePaths.HOME)} type='button'>
        Go Home
      </button>
    </div>
  )
}
