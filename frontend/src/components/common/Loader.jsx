// Reusable glass-style spinner for async/loading states
const Loader = ({ label = 'Loading...' }) => (
  <div className="flex flex-col items-center justify-center gap-3 py-16">
    <div className="w-8 h-8 rounded-full border-2 border-moss/30 border-t-moss animate-spin" />
    <p className="text-xs text-ink/50">{label}</p>
  </div>
)

export default Loader