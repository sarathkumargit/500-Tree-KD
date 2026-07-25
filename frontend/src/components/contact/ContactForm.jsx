import { useState, useEffect, useRef } from 'react'
import GlassPanel from '../common/GlassPanel'

const FORM_SCRIPT_SRC = 'https://link.kdlead.com/js/form_embed.js'

const ContactForm = () => {
  const [loaded, setLoaded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true) },
      { rootMargin: '200px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!loaded) return
    if (document.querySelector(`script[src="${FORM_SCRIPT_SRC}"]`)) return
    const script = document.createElement('script')
    script.src = FORM_SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)
  }, [loaded])

  return (
    <div ref={ref}>
      <GlassPanel className="p-4 sm:p-6 md:p-8" style={{ minHeight: '743px' }}>
        {loaded && (
          <iframe
            src="https://link.kdlead.com/widget/form/nOdPWeFORpEuZCVTUJxC"
            style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
            id="inline-nOdPWeFORpEuZCVTUJxC"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-name="Form 2"
            data-height="743"
            data-layout-iframe-id="inline-nOdPWeFORpEuZCVTUJxC"
            data-form-id="nOdPWeFORpEuZCVTUJxC"
            title="Form 2"
          />
        )}
      </GlassPanel>
    </div>
  )
}

export default ContactForm