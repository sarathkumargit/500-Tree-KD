import g2 from '../assets/g2.webp'
import GalleryCarousel from '../components/gallery/GalleryCarousel'
import { BUSINESS_NAME } from '../utils/constants'

const Gallery = () => (
  <div>
    <section className="relative h-56 sm:h-64 overflow-hidden">
      <img
        src={g2}
        alt=""
        role="presentation"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-forest/75" />
      <div className="relative z-10 h-full flex flex-col justify-center py-40 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <p className="font-medium text-sm tracking-widest uppercase mb-3 text-emerald-100">Our Work</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-emerald-100 mb-3">{BUSINESS_NAME} Project Gallery</h1>
        <p className="text-base text-emerald-100/80">Browse completed tree removal, trimming, and landscaping projects. Real results from our recent jobs.</p>
      </div>
    </section>

    <section className="bg-emerald-100 py-12 sm:py-16">
      <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <GalleryCarousel />
      </div>
    </section>
  </div>
)

export default Gallery