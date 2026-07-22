const SectionHeading = ({ eyebrow, title, description, align = 'left', light = false, as: Tag = 'h2' }) => {
  const wrapper = `mb-10 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`
  return (
    <div className={wrapper}>
      {eyebrow && (
        <p className={`font-medium text-emerald-900 text-xl tracking-widest uppercase mb-3 ${light ? 'text-emerald-300' : 'text-moss'}`}>
          {eyebrow}
        </p>
      )}
      <div className="bg-white/60 border border-emerald-100 rounded-2xl px-70 py-5 shadow-sm inline-block">
        <Tag className={`text-3xl md:text-4xl font-semibold mb-3 ${light ? 'text-emerald-100' : 'text-forest'}`}>
          {title}
        </Tag>
        {description && (
          <p className={`text-base  text-sm leading-relaxed ${light ? 'text-emerald-100/80' : 'text-ink/70'}`}>
            {description}
          </p>
        )}
      </div>
    </div>
  )
}

export default SectionHeading