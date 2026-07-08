const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => (
  <div className={`mb-10 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}>
    {eyebrow && (
      <p className="text-moss font-medium text-sm tracking-wide uppercase mb-2">{eyebrow}</p>
    )}
    <h2 className="text-3xl md:text-4xl font-semibold text-forest mb-3">{title}</h2>
    {description && <p className="text-ink/70 text-base leading-relaxed">{description}</p>}
  </div>
)

export default SectionHeading