import { X } from 'lucide-react'

const ImageModal = ({ item, onClose }) => (
  <div className="fixed inset-0 z-50 bg-ink/80 flex items-center justify-center p-6" onClick={onClose}>
    <div className="glass rounded-3xl p-4 max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
      <div className="flex justify-between items-center mb-3">
        <p className="font-medium text-forest">{item.title}</p>
        <button onClick={onClose} aria-label="Close"><X size={20} /></button>
      </div>
      <img src={item.src} alt={item.title} className="w-full rounded-2xl" />
    </div>
  </div>
)

export default ImageModal