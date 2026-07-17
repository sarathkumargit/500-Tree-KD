import g2 from '../assets/g2.png'
import SectionHeading from '../components/common/SectionHeading'
import GalleryCarousel from '../components/gallery/GalleryCarousel'
import { BUSINESS_NAME } from '../utils/constants'

const Gallery = () => (
  <section
    className="relative pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
    aria-labelledby="gallery-heading"
  >
    <img
      src={g2}
      alt=""
      role="presentation"
      loading="lazy"
      decoding="async"
      className="blur-md absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-forest/85" />

    <div className="relative z-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto">
      <SectionHeading
        id="gallery-heading"
        eyebrow="Our Work"
        title={`${BUSINESS_NAME} Project Gallery`}
        description={`Browse completed tree removal, trimming, and landscaping projects by ${BUSINESS_NAME}. See real results from our recent jobs in your area.`}
      />

      <div className="py-6 sm:py-8 md:py-0">
        <GalleryCarousel />
      </div>
    </div>
  </section>
)

export default Gallery