import '../src/rope'

describe('String.chars', () => {
  test('that it is defined', () => {
    expect(String.prototype.chars).toBeDefined()
  })
  
  test('that it can extract characters', () => {
    expect('12345'.chars()).toEqual(['1', '2', '3', '4', '5'])
  })

  test('that it returns an empty array on a blank string', () => {
    expect(''.chars()).toEqual([])
  })
})
