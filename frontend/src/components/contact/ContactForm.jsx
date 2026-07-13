import { useEffect } from 'react'
import GlassPanel from '../common/GlassPanel'

const FORM_SCRIPT_SRC = 'https://link.kdlead.com/js/form_embed.js'

const ContactForm = () => {
  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${FORM_SCRIPT_SRC}"]`)

    if (existingScript) {
      return
    }

    const script = document.createElement('script')
    script.src = FORM_SCRIPT_SRC
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <GlassPanel className="p-4 sm:p-6 md:p-8" style={{ minHeight: '743px' }}>
      <iframe
        src="https://link.kdlead.com/widget/form/nOdPWeFORpEuZCVTUJxC"
        style={{ width: '100%', height: '100%', border: 'none', borderRadius: '8px' }}
        id="inline-nOdPWeFORpEuZCVTUJxC"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 2"
        data-height="743"
        data-layout-iframe-id="inline-nOdPWeFORpEuZCVTUJxC"
        data-form-id="nOdPWeFORpEuZCVTUJxC"
        title="Form 2"
      />
    </GlassPanel>
  )
}

export default ContactForm