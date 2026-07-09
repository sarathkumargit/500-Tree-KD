const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
 const wrapperClass = `mb-10 bg-emerald-400 p-6 rounded-3xl ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`
  return (
    <div className={wrapperClass}>
      {eyebrow && <p className="text-moss font-medium text-sm tracking-wide uppercase mb-2">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-semibold text-black mb-3">{title}</h2>
      {description && <p className="text-ink/70 text-base leading-relaxed">{description}</p>}
    </div>
  )
}

export default SectionHeading