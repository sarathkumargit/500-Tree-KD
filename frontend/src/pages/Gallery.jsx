import Container from '../components/common/Container'
import SectionHeading from '../components/common/SectionHeading'
import GalleryGrid from '../components/gallery/GalleryGrid'

const Gallery = () => (
  <Container className="py-20">
    <SectionHeading eyebrow="Our Work" title="Project Gallery" description="A look at recent removals, trims, and restorations." />
    <GalleryGrid />
  </Container>
)

export default Gallery