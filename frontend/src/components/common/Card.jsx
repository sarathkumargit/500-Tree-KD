import { twMerge } from 'tailwind-merge'
import GlassPanel from './GlassPanel'

const Card = ({ image, icon, title, description, children, className = '' }) => (
  <GlassPanel
    className={twMerge('overflow-hidden border border-white/30 hover:-translate-y-1 transition-transform duration-300', className)}
  >
    {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
    <div className="p-6 flex flex-col items-center text-center">
      {icon && (
        <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-xl text-forest mb-4">
          {icon}
        </div>
      )}
      {title && <h3 className="text-lg font-semibold text-forest mb-2">{title}</h3>}
      {description && <p className="text-ink/80 text-sm leading-relaxed">{description}</p>}
      {children}
    </div>
  </GlassPanel>
)

export default Card