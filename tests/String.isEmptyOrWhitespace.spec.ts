import '../src/rope'

describe('String.isEmptyOrWhitespace', () => {
  test('that it is defined', () => {
    expect(String.prototype.isEmptyOrWhitespace).toBeDefined()
  })

  test('that it can check for an empty string', () => {
    expect(''.isEmptyOrWhitespace()).toBeTruthy()
  })

  test('that it returns false for a non-empty string', () => {
    expect('test'.isEmptyOrWhitespace()).toBeFalsy()
  })

  test('that it returns false for a single character', () => {
    expect('t'.isEmptyOrWhitespace()).toBeFalsy()
  })

  test('that it returns true when a single space is present', () => {
    expect(' '.isEmptyOrWhitespace()).toBeTruthy()
  })

  test('that it returns true when multiple spaces are present', () => {
    expect('   '.isEmptyOrWhitespace()).toBeTruthy()
  })

  test('that it returns true for a new-line character', () => {
    expect('\n'.isEmptyOrWhitespace()).toBeTruthy()
  })

  test('that it returns true for multiple new-line character', () => {
    expect('\n\n\n\n'.isEmptyOrWhitespace()).toBeTruthy()
  })

  test('that it returns true for a carrige-return and a new-line character', () => {
    expect('\r\n'.isEmptyOrWhitespace()).toBeTruthy()
  })

  test('that it returns true for a literal new line character', () => {
    expect(`
    `.isEmptyOrWhitespace()).toBeTruthy()
  })

  test('that it returns true for multiple literal new line character', () => {
    expect(`


    `.isEmptyOrWhitespace()).toBeTruthy()
  })
})
