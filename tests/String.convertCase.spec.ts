import '../src/rope'

describe('String.convertCase', () => {
  test('that it exists', () => {
    expect(String.prototype.convertCase).toBeDefined()
  })

  describe('sentence case', () => {
    test('that it can convert from `sentence` to `kebab`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'kebab')).toEqual('this-is-a-sentence-case-string')
    })

    test('that it can convert from `sentence` to `camel`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'camel')).toEqual('thisIsASentenceCaseString')
    })

    test('that it can convert from `sentence` to `camelSnake`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'camelSnake')).toEqual('this_Is_A_Sentence_Case_String')
    })

    test('that it can convert from `sentence` to `cobol`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'cobol')).toEqual('THIS-IS-A-SENTENCE-CASE-STRING')
    })

    test('that it can convert from `sentence` to `flat`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'flat')).toEqual('thisisasentencecasestring')
    })
    
    test('that it can convert from `sentence` to `macro`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'macro')).toEqual('THIS_IS_A_SENTENCE_CASE_STRING')
    })
  });

  describe('camel case', () => {
    test('that it can convert from `camel` to `kebab`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'kebab')).toEqual('this-is-camel-case')
    })

    test('that it can convert from `camel` to `camelSnake`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'camelSnake')).toEqual('this_Is_Camel_Case')
    })

    test('that it can convert from `camel` to `cobol`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'cobol')).toEqual('THIS-IS-CAMEL-CASE')
    })

    test('that it can convert from `camel` to `flat`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'flat')).toEqual('thisiscamelcase')
    })

    test('that it can convert from `camel` to `macro`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'macro')).toEqual('THIS_IS_CAMEL_CASE')
    })

    test('that it can convert from `camel` to `sentence`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'sentence')).toEqual('this is camel case')
    })
  });

  describe('camel snake case', () => {
    test('that it can convert from `camelSnake` to `kebab`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'kebab')).toEqual('this-is-camel-snake-case')
    })

    test('that it can convert from `camelSnake` to `camel`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'camel')).toEqual('thisIsCamelSnakeCase')
    })

    test('that it can convert from `camelSnake` to `cobol`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'cobol')).toEqual('THIS-IS-CAMEL-SNAKE-CASE')
    })

    test('that it can convert from `camelSnake` to `flat`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'flat')).toEqual('thisiscamelsnakecase')
    })

    test('that it can convert from `camelSnake` to `macro`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'macro')).toEqual('THIS_IS_CAMEL_SNAKE_CASE')
    })

    test('that it can convert from `camelSnake` to `sentence`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'sentence')).toEqual('this is camel snake case')
    })
  });

  describe('cobol case', () => {
    test('that it can convert from `cobol` to `kebab`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'kebab')).toEqual('this-is-cobol-case')
    })
    
    test('that it can convert from `cobol` to `camel`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'camel')).toEqual('thisIsCobolCase')
    })

    test('that it can convert from `cobol` to `camelSnake`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'camelSnake')).toEqual('this_Is_Cobol_Case')
    })

    test('that it can convert from `cobol` to `flat`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'flat')).toEqual('thisiscobolcase')
    })

    test('that it can convert from `cobol` to `macro`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'macro')).toEqual('THIS_IS_COBOL_CASE')
    })

    test('that it can convert from `cobol` to `sentence`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'sentence')).toEqual('this is cobol case')
    })
  });

  describe('flat case', () => {
    test('that it can convert from `flat` to `kebab`', () => {
      expect('thisisflatcase'.convertCase('flat', 'kebab')).toEqual('thisisflatcase')
    })

    test('that it can convert from `flat` to `camel`', () => {
      expect('thisisflatcase'.convertCase('flat', 'camel')).toEqual('thisisflatcase')
    })

    test('that it can convert from `flat` to `camelSnake`', () => {
      expect('thisisflatcase'.convertCase('flat', 'camelSnake')).toEqual('thisisflatcase')
    })

    test('that it can convert from `flat` to `cobol`', () => {
      expect('thisisflatcase'.convertCase('flat', 'cobol')).toEqual('THISISFLATCASE')
    })

    test('that it can convert from `flat` to `macro`', () => {
      expect('thisisflatcase'.convertCase('flat', 'macro')).toEqual('THISISFLATCASE')
    })

    test('that it can convert from `flat` to `sentence`', () => {
      expect('thisisflatcase'.convertCase('flat', 'sentence')).toEqual('thisisflatcase')
    })
  });

  describe('kebab case', () => {
    test('that it can convert from `kebab` to `camel`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'camel')).toEqual('thisIsKebabCase')
    })
    
    test('that it can convert from `kebab` to `camelSnake`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'camelSnake')).toEqual('this_Is_Kebab_Case')
    })

    test('that it can convert from `kebab` to `cobol`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'cobol')).toEqual('THIS-IS-KEBAB-CASE')
    })

    test('that it can convert from `kebab` to `flat`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'flat')).toEqual('thisiskebabcase')
    })

    test('that it can convert from `kebab` to `macro`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'macro')).toEqual('THIS_IS_KEBAB_CASE')
    })

    test('that it can convert from `kebab` to `sentence`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'sentence')).toEqual('this is kebab case')
    })
  });

  describe('macro case', () => {
    test('that it can convert from `macro` to `kebab`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'kebab')).toEqual('this-is-macro-case')
    })

    test('that it can convert from `macro` to `camel`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'camel')).toEqual('thisIsMacroCase')
    })

    test('that it can convert from `macro` to `camelSnake`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'camelSnake')).toEqual('this_Is_Macro_Case')
    })

    test('that it can convert from `macro` to `cobol`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'cobol')).toEqual('THIS-IS-MACRO-CASE')
    })

    test('that it can convert from `macro` to `flat`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'flat')).toEqual('thisismacrocase')
    })

    test('that it can convert from `macro` to `sentence`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'sentence')).toEqual('this is macro case')
    })
  });
})
