import { useState } from 'react'
import GalleryItem from './GalleryItem'
import ImageModal from './ImageModal'
import { galleryItems } from '../../data/gallery'

const GalleryGrid = () => {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryItems.map((item) => (
          <GalleryItem key={item.id} item={item} onSelect={setSelected} />
        ))}
      </div>
      {selected && <ImageModal item={selected} onClose={() => setSelected(null)} />}
    </>
  )
}

export default GalleryGrid