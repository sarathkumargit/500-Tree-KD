import { twMerge } from 'tailwind-merge'

const Card = ({ image, icon, title, description, children, className = '' }) => (
  <div className={twMerge(
    'bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/60 hover:-translate-y-1 transition-transform duration-300',
    className
  )}>
    {image && <img src={image} alt={title} className="w-full h-40 object-cover" />}
    <div className="p-6 flex flex-col items-center text-center">
      {icon && (
        <div className="bg-emerald-100 w-10 h-10 flex items-center justify-center rounded-xl text-forest mb-4">
          {icon}
        </div>
      )}
      {title && <h3 className="text-lg font-semibold text-forest mb-2">{title}</h3>}
      {description && <p className="text-ink/80 text-sm leading-relaxed">{description}</p>}
      {children}
    </div>
  </div>
)

export default Card
