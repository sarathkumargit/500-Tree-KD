const variants = {
  primary: 'bg-forest text-canopy hover:bg-moss',
  gold: 'bg-gold text-ink hover:brightness-95',
  ghost: 'glass text-ink hover:bg-white/70',
}

const Button = ({ children, variant = 'primary', className = '', ...props }) => (
  <button
    className={`px-5 py-2.5 rounded-full font-medium text-sm transition-colors duration-200 ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default Button