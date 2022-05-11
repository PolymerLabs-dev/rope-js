import '../src/rope'

describe('String.join', () => {
  test('that it is defined', () => {
    expect(String.prototype.join).toBeDefined()
  })

  test('that it can join two strings', () => {
    expect('hello'.join('world')).toEqual('hello world')
  })

  test('that the separator can be defined', () => {
    expect('hello'.join('world', ', ')).toEqual('hello, world')
  })

  test('that joins can be chained', () => {
    expect('hello'.join('world', ', ').join('!', '')).toEqual('hello, world!')
  })

  test('that a blank join will perform no operation', () => {
    expect('testing'.join('')).toEqual('testing')
  })
})
