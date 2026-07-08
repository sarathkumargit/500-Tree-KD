const GalleryItem = ({ item, onSelect }) => (
  <button
    onClick={() => onSelect(item)}
    className="group relative rounded-2xl overflow-hidden aspect-square shadow-glass"
  >
    <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors flex items-end p-3">
      <p className="text-canopy text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">{item.title}</p>
    </div>
  </button>
)

export default GalleryItem