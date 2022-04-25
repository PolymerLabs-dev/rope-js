import '../src/rope'

describe('String.capitalizeAll', () => {
  test('that it is defined', () => {
    expect(String.prototype.capitalize).toBeDefined()
  })

  test('it can capitalise a word', () => {
    expect('word'.capitalizeAll()).toEqual('Word')
  })

  test('that it can capitalize multiple words', () => {
    expect('hello there'.capitalizeAll()).toEqual('Hello There')
  })

  test('that it can capitalize multiple words with punctuation', () => {
    expect('hello there, can you please "capitalize my words?"'.capitalizeAll()).toEqual('Hello There, Can You Please "Capitalize My Words?"')
  })

  test('that it can capitalize multiple words with custom separators', () => {
    expect('hello-can-you please capitalize-my words with-custom-seperators'.capitalizeAll(-1, ['-'])).toEqual('hello-Can-You please capitalize-My words with-Custom-Seperators')
  })

  test('that it can capitalize multiple words with non-special separators', () => {
    expect('test that we can capitalize this sentence'.capitalizeAll(-1, 'e')).toEqual('teSt that we can capitalize this seNteNce')
  })

  test('that it can capitalize multiple words with multiple non-special separators', () => {
    expect('test that we can capitalize this sentence'.capitalizeAll(-1, ['e', 'a'])).toEqual('teSt thaT we caN caPitaLize this seNteNce')
  })

  test('that the capitalization can be limited', () => {
    expect('hello there please capitalize'.capitalizeAll(2)).toEqual('Hello There please capitalize')
  })

  test('that the capitalization can be limited with custom separators', () => {
    expect('hello-there-please-capitalize'.capitalizeAll(2, '-')).toEqual('hello-There-Please-capitalize')
  })
})
