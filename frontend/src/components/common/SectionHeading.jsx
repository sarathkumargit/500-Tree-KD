const SectionHeading = ({ eyebrow, title, description, align = 'left', light = false, as: Tag = 'h2' }) => {
  const wrapper = `mb-10 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`
  return (
    <div className={wrapper}>
      {eyebrow && (
        <p className={`font-medium text-sm tracking-widest uppercase mb-3 ${light ? 'text-emerald-200' : 'text-moss'}`}>
          {eyebrow}
        </p>
      )}
      <Tag className={`text-3xl md:text-4xl font-semibold mb-3 ${light ? 'text-emerald-100' : 'text-forest'}`}>
        {title}
      </Tag>
      {description && (
        <p className={`text-base leading-relaxed ${light ? 'text-emerald-100/80' : 'text-ink/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
