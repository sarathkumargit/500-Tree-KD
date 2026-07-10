import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryItems } from '../../data/gallery'

const GalleryCarousel = () => {
  const [active, setActive] = useState(0)
  const total = galleryItems.length

  const goTo = (index) => setActive((index + total) % total)

  return (
    <div className="relative w-full h-[640px] flex items-center justify-center overflow-hidden">
      {galleryItems.map((item, i) => {
        let offset = i - active
        if (offset > total / 2) offset -= total
        if (offset < -total / 2) offset += total

        const isActive = offset === 0
        const isVisible = Math.abs(offset) <= 2

        return (
          <button
            key={item.id}
            onClick={() => (isActive ? null : goTo(i))}
            className="absolute rounded-3xl overflow-hidden shadow-glass transition-all duration-500 ease-out"
            style={{
              width: isActive ? '380px' : '300px',
              height: isActive ? '560px' : '460px',
              transform: `translateX(${offset * 220}px) scale(${isActive ? 1 : 0.85}) translateZ(${-Math.abs(offset) * 100}px)`,
              opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
              zIndex: total - Math.abs(offset),
              filter: isActive ? 'none' : 'brightness(0.6) blur(1px)',
              cursor: isActive ? 'default' : 'pointer',
            }}
          >
            <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
            {isActive && (
              <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/20 to-transparent flex items-end p-6">
                <p className="text-canopy font-display font-semibold text-xl">{item.title}</p>
              </div>
            )}
          </button>
        )
      })}

      <button
        onClick={() => goTo(active - 1)}
        aria-label="Previous"
        className="absolute left-6 z-20 w-12 h-12 rounded-full glass-dark text-canopy flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={() => goTo(active + 1)}
        aria-label="Next"
        className="absolute right-6 z-20 w-12 h-12 rounded-full glass-dark text-canopy flex items-center justify-center hover:bg-white/10 transition-colors"
      >
        <ChevronRight size={22} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {galleryItems.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === active ? 'bg-gold' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default GalleryCarousel