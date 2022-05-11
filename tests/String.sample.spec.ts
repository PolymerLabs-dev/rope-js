import '../src/rope'

describe('String.sample', () => {
  test('that it is defined', () => {
    expect(String.prototype.sample).toBeDefined()
  })

  test('that a random sample can be determined', () => {
    const text: string = '012345'

    expect(text.includes(text.sample())).toBeTruthy()
    expect(text.sample().length).toEqual(1)
  })

  test('that a random sample size can be set', () => {
    const text: string = '012345'
    const size: number = 3

    expect(text.includes(text.sample(size))).toBeTruthy()
    expect(text.sample(size).length).toEqual(size)
  })

  test('that a sample size larger than the string returns the string', () => {
    const text: string = '012345'
    const size: number = 99

    expect(text == text.sample(size)).toBeTruthy()
  })
})
