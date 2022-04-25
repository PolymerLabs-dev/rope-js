import '../src/rope'

describe('String.capitalize', () => {
  test('that it is defined', () => {
    expect(String.prototype.capitalize).toBeDefined()
  })

  test('it can capitalise a word', () => {
    expect('word'.capitalize()).toEqual('Word')
  })

  test('that it only capitalizes one word', () => {
    expect('hello there'.capitalize()).toEqual('Hello there')
  })

  test('that it preserves capitalization', () => {
    expect('heLLo'.capitalize()).toEqual('HeLLo')
  })

  test('that it performs a no-op on empty strings', () => {
    expect(''.capitalize()).toEqual('')
  })
})
