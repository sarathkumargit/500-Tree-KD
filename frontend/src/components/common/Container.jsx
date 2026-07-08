const Container = ({ className = '', children }) => (
  <div className={`max-w-6xl mx-auto px-6 ${className}`}>{children}</div>
)

export default Container