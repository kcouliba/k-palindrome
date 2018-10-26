const palindrome = require('./palindrome')

describe('palindrome', function() {
  it('should return true', function() {
    test('if text is a palindrome', function() {
      expect(palindrome('kayak')).toBeTruthy()
    })
  })

  it('should return false', function() {
    test('if text is not a palindrome', function() {
      expect(palindrome('car')).toBeFalsy()
    })
  })
})
