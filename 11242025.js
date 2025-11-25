function isValidMessage(message, validator) {
  const initials = message
  .split(' ')
  .filter(Boolean)
  .map(word => word[0])
  .join('')
  .toLowerCase()

  return initials === validator.toLowerCase()
}