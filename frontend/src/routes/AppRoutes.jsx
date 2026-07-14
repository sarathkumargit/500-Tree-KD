import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Gallery from '../pages/Gallery'
// import Locations from '../pages/Locations'
import Contact from '../pages/Contact'
import Terms from '../pages/Terms'
//import NotFound from '../pages/NotFound'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/gallery" element={<Gallery />} />
    {/* <Route path="/locations" element={<Locations />} /> */}
    <Route path="/contact" element={<Contact />} />
    <Route path="/terms" element={<Terms />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
)

export default AppRoutes