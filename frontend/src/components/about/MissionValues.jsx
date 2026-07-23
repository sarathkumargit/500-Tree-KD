const values = [
  { title: 'Safety First', description: 'Every job follows strict safety protocols to protect our crew, your property, and your family.' },
  { title: 'Environmental Care', description: 'We prune and remove with the long-term health of your landscape in mind, not just the quick job.' },
  { title: 'Honest Pricing', description: 'We believe in complete pricing transparency — what we quote is what you pay, with no hidden fees.' },
]

const MissionValues = () => (
  <div className="bg-emerald-200 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-sm">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {values.map((value) => (
        <div key={value.title} className="bg-emerald-50 rounded-xl p-5 text-center">
          <h3 className="text-base font-semibold text-emerald-900 mb-2">{value.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
        </div>
      ))}
    </div>
  </div>
)

export default MissionValues
