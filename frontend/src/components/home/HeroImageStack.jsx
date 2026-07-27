import { useState, useEffect } from 'react'

import img8  from '../../assets/img8.webp'
import hero3 from '../../assets/hero3.webp'
import hero4 from '../../assets/hero4.webp'
import g2    from '../../assets/g2.webp'

const HERO1_URL = '/g2.webp'

const images = [HERO1_URL, img8, hero3, hero4, g2]

const HeroImageStack = () => {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 640px)')
    setIsMobile(mql.matches)
    const onChange = (e) => setIsMobile(e.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActive((prev) => (prev + 1) % images.length), 4000)
    return () => clearInterval(id)
  }, [])

  const translateStep = isMobile ? 4  : 8
  const depthStep    = isMobile ? 100 : 180
  const rotateStep   = isMobile ? -10 : -18
  const scaleStep    = isMobile ? 0.08 : 0.12

  return (
    <>
      <div
        className="absolute inset-0"
        style={{ perspective: isMobile ? '900px' : '1400px' }}
        aria-hidden="true"
      >
        {images.map((src, i) => {
          let offset = i - active
          if (offset >  images.length / 2) offset -= images.length
          if (offset < -images.length / 2) offset += images.length

          return (
            <img
              key={src}
              src={src}
              alt=""
              role="presentation"
              onClick={() => setActive(i)}
              loading={i <= 1 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : i === 1 ? 'low' : 'auto'}
              decoding={i <= 1 ? 'sync' : 'async'}
              width={1920}
              height={1080}
              sizes="100vw"
              tabIndex={-1}
              className="absolute inset-0 w-full h-full object-cover cursor-pointer transition-[transform,opacity] duration-700 ease-out"
              style={{
                transform: `translateX(${offset * translateStep}%) translateZ(${-Math.abs(offset) * depthStep}px) rotateY(${offset * rotateStep}deg) scale(${1 - Math.abs(offset) * scaleStep})`,
                opacity: Math.abs(offset) > 1 ? 0 : 1 - Math.abs(offset) * 0.35,
                zIndex: images.length - Math.abs(offset),
              }}
            />
          )
        })}
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show hero image ${i + 1}`}
         
          />
        ))}
      </div>
    </>
  )
}

export default HeroImageStack