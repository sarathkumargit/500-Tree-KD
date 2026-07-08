import GlassPanel from './GlassPanel'

const Card = ({ icon, title, description, children, className = '' }) => (
  <GlassPanel className={`p-6 hover:-translate-y-1 transition-transform duration-300 ${className}`}>
    {icon && <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-moss/15 text-moss mb-4">{icon}</div>}
    {title && <h3 className="text-lg font-semibold text-forest mb-2">{title}</h3>}
    {description && <p className="text-ink/70 text-sm leading-relaxed">{description}</p>}
    {children}
  </GlassPanel>
)

export default Card