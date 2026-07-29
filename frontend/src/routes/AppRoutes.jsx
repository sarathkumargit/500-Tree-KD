import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'  // Keep Home eager (first page)

const About   = lazy(() => import('../pages/About'))
const Services = lazy(() => import('../pages/Services'))
const Gallery  = lazy(() => import('../pages/Gallery'))
const Contact  = lazy(() => import('../pages/Contact'))
const Terms    = lazy(() => import('../pages/Terms'))
const Privacy  = lazy(() => import('../pages/Privacy'))

const AppRoutes = () => (
  <Suspense fallback={null}>
    <Routes>
      <Route path="/"        element={<Home />} />
      <Route path="/about"   element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/terms"   element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </Suspense>
)

export default AppRoutes