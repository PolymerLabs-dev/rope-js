import '../src/rope'

describe('String.isNumeric', () => {
  test('that it is defined', () => {
    expect(String.prototype.isNumeric).toBeDefined()
  })

  test('that it can determine a number', () => {
    expect("32".isNumeric()).toBeTruthy()
  })

  test('that it can determine a fuzzy number', () => {
    expect('91xx'.isNumeric()).toBeTruthy()
  })

  test('that it can determine a non-number', () => {
    expect('x1'.isNumeric()).toBeFalsy()
  })

  test('that it can determine a negative number', () => {
    expect('-231'.isNumeric()).toBeTruthy()
  }) 

  test('that it can determine a positive number', () => {
    expect('+1299'.isNumeric()).toBeTruthy()
  })

  test('that it can determine a float', () => {
    expect('123.12'.isNumeric()).toBeTruthy()
  })

  test('that it can determine a nonsense input', () => {
    expect('seven'.isNumeric()).toBeFalsy()
  })
})
