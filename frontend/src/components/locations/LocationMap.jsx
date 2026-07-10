const LocationMap = () => (
  <div className="rounded-3xl overflow-hidden border-8 border-emerald-900">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8874478803536!2d-78.62233322385582!3d43.03206247113837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d39df702b48cd7%3A0x6825126b5b125eed!2sKD%20Nursery!5e1!3m2!1sen!2slk!4v1783629932515!5m2!1sen!2slk"
      width="100%"
      height="500"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      title="500 Tree service area map"
    />
  </div>
)

export default LocationMap