import SectionHeading from '../components/common/SectionHeading'
import GalleryCarousel from '../components/gallery/GalleryCarousel'

const Gallery = () => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <img
      src="./src/assets/g2.png"
      alt=""
      className=" blur-md
       absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-forest/85" />

    
   
    <div className="relative z-10 py-0">
      <GalleryCarousel />
    </div>
  </section>
)

export default Gallery