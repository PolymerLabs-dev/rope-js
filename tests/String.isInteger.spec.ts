import '../src/rope'

describe('String.isInteger', () => {
  test('that it is defined', () => {
    expect(String.prototype.isInteger).toBeDefined()
  })

  test('that it can determine an integer', () => {
    expect("32".isInteger()).toBeTruthy()
  })

  test('that it can determine a fuzzy integer', () => {
    expect('91xx'.isInteger()).toBeTruthy()
  })

  test('that it can determine a non-integer', () => {
    expect('x1'.isInteger()).toBeFalsy()
  })

  test('that it can determine a negative integer', () => {
    expect('-231'.isInteger()).toBeTruthy()
  }) 

  test('that it can determine a positive integer', () => {
    expect('+1299'.isInteger()).toBeTruthy()
  })

  test('that it can determine even if a float', () => {
    expect('123.12'.isInteger()).toBeTruthy()
  })

  test('that it can determine a nonsense input', () => {
    expect('seven'.isInteger()).toBeFalsy()
  })
})
