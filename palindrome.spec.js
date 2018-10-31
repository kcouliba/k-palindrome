/* eslint-disable no-undef */

var palindrome = require('./palindrome')

describe('palindrome', function() {
  it('should return true if text is a palindrome', function() {
    expect(palindrome('kayak')).toBeTruthy()
  })

  it('should return false if text is not a palindrome', function() {
    expect(palindrome('car')).toBeFalsy()
  })
})

/* eslint-enable no-undef */
