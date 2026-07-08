import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to top on every route change, since browsers keep old scroll position
const useScrollTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
}

export default useScrollTop