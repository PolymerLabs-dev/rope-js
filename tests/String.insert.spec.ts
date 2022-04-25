import '../src/rope'

describe('String.insert', () => {
  test('that it is defined', () => {
    expect(String.prototype.insert).toBeDefined()
  })

  test('that it can insert at the beginning of a string', () => {
    expect('hello world'.insert(0, 'test')).toEqual('testhello world')
  })

  test('that it can insert in the middle of a string', () => {
    expect('hello world'.insert(5, 'test')).toEqual('hellotest world')
  })

  test('that it can insert at the end of a string', () => {
    expect('hello world'.insert(-1, 'test')).toEqual('hello worldtest')
  })

  test('that it can insert in the middle of a string using a negative index', () => {
    expect('hello world'.insert(-6, 'test')).toEqual('hello testworld')
  })

  test('that it can insert at an index that overflows the length of the string', () => {
    expect('hello world'.insert(999, 'test')).toEqual('hello worldtest')
  })

  test('that it can insert an index that underflows zero', () => {
    expect('hello world'.insert(-999, 'test')).toEqual('testhello world')
  })
})
