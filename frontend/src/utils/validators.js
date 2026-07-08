// Pure functions only — easy to unit test, no React/DOM involved
export const isRequired = (value) => value.trim().length > 0
export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
export const isValidPhone = (value) => /^[\d\s()+-]{7,}$/.test(value)

export const validateContactForm = (values) => {
  const errors = {}
  if (!isRequired(values.fullName)) errors.fullName = 'Full name is required.'
  if (!isValidPhone(values.phone)) errors.phone = 'Enter a valid phone number.'
  if (!isValidEmail(values.email)) errors.email = 'Enter a valid email address.'
  if (!isRequired(values.service)) errors.service = 'Please select a service.'
  if (!isRequired(values.message)) errors.message = 'Please add a short message.'
  return errors
}