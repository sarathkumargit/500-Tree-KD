import { useState, useEffect } from 'react'

import hero1 from '../../assets/hero1.jpg'
import hero3 from '../../assets/hero3.jpg'
import hero4 from '../../assets/hero4.jpg'
import img8 from '../../assets/img8.jpg'
import g2 from '../../assets/g2.png'

const images = [
  hero1,
  img8,
  hero3,
  hero4,
  g2,
]

// Coverflow-style 3D image stack: front image centered, others fanned
// behind it in depth using perspective + rotateY, auto-advancing on a timer.
const HeroImageStack = () => {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className=" absolute inset-0" style={{ perspective: '1400px' }}>
      {images.map((src, i) => {
        let offset = i - active
        if (offset > images.length / 2) offset -= images.length
        if (offset < -images.length / 2) offset += images.length

        return (
          <img
            key={src}
            src={src}
            alt=""
            onClick={() => setActive(i)}
            className="absolute inset-0 w-full h-full object-cover  cursor-pointer transition-all duration-700 ease-out"
            style={{
              transform: `translateX(${offset * 8}%) translateZ(${-Math.abs(offset) * 180}px) rotateY(${offset * -18}deg) scale(${1 - Math.abs(offset) * 0.12})`,
              opacity: Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.35,
              zIndex: images.length - Math.abs(offset),
            }}
          />
        )
      })}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show hero image ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === active ? 'bg-gold' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroImageStack