function palidrome(text) {
  if (!text) return false
  if (text.length === 0) return true

  const reversedText = text.split('').reverse().join('')

  return reversedText.includes(text)
}

module.exports = palidrome