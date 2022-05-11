import '../src/rope'

describe('String.isStrictInteger', () => {
  test('that it is defined', () => {
    expect(String.prototype.isStrictInteger).toBeDefined()
  })

  test('that it can determine a number', () => {
    expect("32".isStrictInteger()).toBeTruthy()
  })

  test('that it can determine a fuzzy number', () => {
    expect('91xx'.isStrictInteger()).toBeFalsy()
  })

  test('that it can determine a non-number', () => {
    expect('x1'.isStrictInteger()).toBeFalsy()
  })

  test('that it can determine a negative number', () => {
    expect('-231'.isStrictInteger()).toBeTruthy()
  }) 

  test('that it can determine a positive number', () => {
    expect('+1299'.isStrictInteger()).toBeTruthy()
  })

  test('that it can determine a float', () => {
    expect('123.12'.isStrictInteger()).toBeFalsy()
  })

  test('that it ignores exponents', () => {
    expect('123e12'.isStrictInteger()).toBeFalsy()
  })

  test('that it can determine a nonsense input', () => {
    expect('seven'.isStrictInteger()).toBeFalsy()
  })
})
