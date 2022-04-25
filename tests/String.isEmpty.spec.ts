import '../src/rope'

describe('String.isEmpty', () => {
  test('that it is defined', () => {
    expect(String.prototype.isEmpty).toBeDefined()
  })

  test('that it can check for an empty string', () => {
    expect(''.isEmpty()).toBeTruthy()
  })

  test('that it returns false for a non-empty string', () => {
    expect('test'.isEmpty()).toBeFalsy()
  })

  test('that it returns false for a single character', () => {
    expect('t'.isEmpty()).toBeFalsy()
  })
})
