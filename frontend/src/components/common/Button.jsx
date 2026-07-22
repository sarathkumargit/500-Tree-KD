import { twMerge } from 'tailwind-merge'

const variants = {
  primary: 'bg-emerald-700 text-white hover:bg-emerald-800',
  accent:  'bg-emerald-400 text-emerald-900 hover:bg-emerald-500',
  ghost:   'bg-white/10 text-white hover:bg-white/20 border border-white/30',
}

const Button = ({ children, variant = 'primary', className = '', ...props }) => (
  <button
    className={twMerge(
      'px-5 py-3 rounded-full font-semibold text-sm transition-colors duration-200 cursor-pointer',
      variants[variant] ?? variants.primary,
      className
    )}
    {...props}
  >
    {children}
  </button>
)

export default Button
