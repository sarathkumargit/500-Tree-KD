import { useState } from 'react'
import { validateContactForm } from '../utils/validators'

const initialState = {
  fullName: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

// Isolates all form state + validation logic away from ContactForm's JSX
const useContactForm = () => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateContactForm(values)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true)
      setValues(initialState)
    }
  }

  return { values, errors, submitted, handleChange, handleSubmit }
}

export default useContactForm