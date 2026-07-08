const FormField = ({ label, name, error, as = 'input', children, ...props }) => {
  const Tag = as
  return (
    <div>
      <label htmlFor={name} className="text-xs font-medium text-ink/70 mb-1 block">{label}</label>
      <Tag
        id={name}
        name={name}
        className="w-full rounded-xl border border-ink/10 bg-white/70 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-moss"
        {...props}
      >
        {children}
      </Tag>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

export default FormField