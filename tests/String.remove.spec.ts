import '../src/rope'

describe('String.remove', () => {
  test('that it is defined', () => {
    expect(String.prototype.remove).toBeDefined()
  })

  test('that the middle of a string can be removed', () => {
    expect('0123456789'.remove(2, 6)).toEqual('016789')
  })

  test('that the start of the string can be removed', () => {
    expect('0123456789'.remove(0, 6)).toEqual('6789')
  })

  test('that the end of the string can be removed', () => {
    expect('0123456789'.remove(2, 10)).toEqual('01')
  })

  test('that it can remove everything from a specified index', () => {
    expect('0123456789'.remove(5)).toEqual('01234')
  })
})
