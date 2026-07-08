const GlassPanel = ({ as: Tag = 'div', dark = false, className = '', children, ...props }) => (
  <Tag
    className={`${dark ? 'glass-dark text-canopy' : 'glass text-ink'} rounded-3xl shadow-glass ${className}`}
    {...props}
  >
    {children}
  </Tag>
)

export default GlassPanel