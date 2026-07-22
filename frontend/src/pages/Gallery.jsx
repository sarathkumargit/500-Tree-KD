import g2 from '../assets/g2.webp'
import SectionHeading from '../components/common/SectionHeading'
import GalleryCarousel from '../components/gallery/GalleryCarousel'
import { BUSINESS_NAME } from '../utils/constants'

const Gallery = () => (
  <div>
    {/* Hero header — dark overlay so heading text is readable */}
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
      <div className="relative z-10 h-full flex flex-col justify-center pt-16 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Our Work"
          title={`${BUSINESS_NAME} Project Gallery`}
          description={`Browse completed tree removal, trimming, and landscaping projects. Real results from our recent jobs.`}
          light
        />
      </div>
    </section>

    {/* Carousel on clean dark-green background */}
    <section className="bg-forest py-12 sm:py-16">
      <div className="px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
        <GalleryCarousel />
      </div>
    </section>
  </div>
)

export default Gallery
