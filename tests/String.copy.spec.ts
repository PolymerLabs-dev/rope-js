import '../src/rope'

describe('String.copy', () => {
  test('that it is defined', () => {
    expect(String.prototype.copy).toBeDefined()
  })

  test('that it can copy a string', () => {
    expect("test".copy()).toEqual("test")
  })

  test('that the copied string is not a reference', () => {
    const stringA: string = "hello"
    let stringB: string = stringA.copy()

    expect(stringA).toEqual(stringB)

    stringB = 'world'

    expect(stringA != stringB).toBeTruthy()
    expect(stringA === stringB).toBeFalsy()
  })
})
