import { useState } from 'react'
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import { services } from '../../data/services'

const ServiceList = () => {
  const [active, setActive] = useState(0)
  const total = services.length
  const goTo = (index) => setActive((index + total) % total)

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Mobile: simple full-width card */}
      <div className="block sm:hidden w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-xl w-full h-[420px]">
          <img
            src={services[active].image}
            alt={services[active].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/30 to-transparent flex flex-col justify-end p-6 text-left">
            <h3 className="text-white font-semibold text-xl mb-2">{services[active].title}</h3>
            <p className="text-emerald-100/80 text-sm leading-relaxed mb-3">{services[active].description}</p>
            <ul className="space-y-1">
              {services[active].highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-emerald-300 text-sm">
                  <CheckCircle size={14} /> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center justify-between mt-4 px-2">
          <button onClick={() => goTo(active - 1)} aria-label="Previous"
            className="w-10 h-10 rounded-full bg-emerald-900/70 backdrop-blur-sm text-white flex items-center justify-center">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {services.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${i === active ? 'bg-emerald-400' : 'bg-white/40'}`} />
            ))}
          </div>
          <button onClick={() => goTo(active + 1)} aria-label="Next"
            className="w-10 h-10 rounded-full bg-emerald-900/70 backdrop-blur-sm text-white flex items-center justify-center">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Desktop: 3D carousel */}
      <div className="hidden sm:flex relative w-full h-[580px] items-center justify-center overflow-hidden">
        {services.map((service, i) => {
          let offset = i - active
          if (offset > total / 2) offset -= total
          if (offset < -total / 2) offset += total

          const isActive = offset === 0
          const isVisible = Math.abs(offset) <= 2

          return (
            <button
              key={service.id}
              onClick={() => isActive ? null : goTo(i)}
              className="absolute rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ease-out"
              style={{
                width: isActive ? '560px' : '240px',
                height: isActive ? '480px' : '380px',
                transform: `translateX(${offset * 180}px) scale(${isActive ? 1 : 0.82})`,
                opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
                zIndex: total - Math.abs(offset),
                filter: isActive ? 'none' : 'brightness(0.55) blur(1px)',
                cursor: isActive ? 'default' : 'pointer',
              }}
            >
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/30 to-transparent flex flex-col justify-end p-6 text-left">
                <h3 className="text-white font-semibold text-xl mb-2">{service.title}</h3>
                {isActive && (
                  <>
                    <p className="text-emerald-100/80 text-sm leading-relaxed mb-3">{service.description}</p>
                    <ul className="space-y-1">
                      {service.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2 text-emerald-300 text-sm">
                          <CheckCircle size={14} /> {h}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </button>
          )
        })}

        <button onClick={() => goTo(active - 1)} aria-label="Previous"
          className="absolute left-4 z-20 w-11 h-11 rounded-full bg-emerald-900/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-emerald-800 transition-colors">
          <ChevronLeft size={20} />
        </button>
        <button onClick={() => goTo(active + 1)} aria-label="Next"
          className="absolute right-4 z-20 w-11 h-11 rounded-full bg-emerald-900/70 backdrop-blur-sm text-white flex items-center justify-center hover:bg-emerald-800 transition-colors">
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {services.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors ${i === active ? 'bg-emerald-400' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceList
