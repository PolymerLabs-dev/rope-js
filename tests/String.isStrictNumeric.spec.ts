import '../src/rope'

describe('String.isStrictNumeric', () => {
  test('that it is defined', () => {
    expect(String.prototype.isStrictNumeric).toBeDefined()
  })

  test('that it can determine a number', () => {
    expect("32".isStrictNumeric()).toBeTruthy()
  })

  test('that it can determine a fuzzy number', () => {
    expect('91xx'.isStrictNumeric()).toBeFalsy()
  })

  test('that it can determine a non-number', () => {
    expect('x1'.isStrictNumeric()).toBeFalsy()
  })

  test('that it can determine a negative number', () => {
    expect('-231'.isStrictNumeric()).toBeTruthy()
  }) 

  test('that it can determine a positive number', () => {
    expect('+1299'.isStrictNumeric()).toBeTruthy()
  })

  test('that it can determine a float', () => {
    expect('123.12'.isStrictNumeric()).toBeTruthy()
  })

  test('that it ignores exponents', () => {
    expect('123e12'.isStrictNumeric()).toBeFalsy()
  })

  test('that it determines exponents when allowed', () => {
    expect('123e12'.isStrictNumeric(true)).toBeTruthy()
  })

  test('that it determines decimalized exponents when allowed', () => {
    expect('0.12312e12'.isStrictNumeric(true)).toBeTruthy()
  })

  test('that it determines incorrectly decimalized exponents even when allowed', () => {
    expect('0.12312e12.2'.isStrictNumeric(true)).toBeFalsy()
  })

  test('that it can determine a nonsense input', () => {
    expect('seven'.isStrictNumeric()).toBeFalsy()
  })
})
