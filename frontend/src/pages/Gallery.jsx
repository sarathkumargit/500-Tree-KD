import g2 from '../assets/g2.webp'
import GalleryCarousel from '../components/gallery/GalleryCarousel'
import { BUSINESS_NAME } from '../utils/constants'

const Gallery = () => (
  <div className="relative min-w-0 overflow-x-hidden">
    {/* Full page blurred background */}
    <div className="fixed inset-0 -z-10">
      <img
        src={g2}
        alt=""
        className="w-full h-full object-cover blur-sm scale-105"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      
    </div>

    {/* Hero text inside glass card */}
    <section
      className="mt-20 h-56 sm:h-64 flex items-center justify-center pt-16 px-4 sm:px-6"
      aria-labelledby="gallery-heading"
    >
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-6 text-center max-w-2xl w-full">
        <p className="font-medium text-3xl sm:text-sm tracking-widest uppercase mb-2 text-emerald-300">Our Work</p>
        <h1
          id="gallery-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 leading-tight"
        >
          {BUSINESS_NAME} Project Gallery
        </h1>
        <p className="text-sm sm:text-base text-white">
          Browse completed tree removal, trimming, and landscaping projects. Real results from our recent jobs.
        </p>
      </div>
    </section>

    {/* Carousel */}
    <section className="py-8 sm:py-12" aria-label="Project gallery carousel">
      <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <GalleryCarousel />
      </div>
    </section>
  </div>
)

export default Gallery