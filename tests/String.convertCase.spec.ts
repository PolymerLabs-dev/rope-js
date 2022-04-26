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

    test('that it can convert from `sentence` to `pascal`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'pascal')).toEqual('ThisIsASentenceCaseString')
    })

    test('that it can convert from `sentence` to `sarcastic`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'sarcastic')).toEqual('tHiS Is a sEnTeNcE StRiNg')
    })

    test('that it can convert from `sentence` to `snake`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'snake')).toEqual('this_is_a_sentence_case_string')
    })

    test('that it can convert from `sentence` to `train`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'train')).toEqual('This-Is-A-Sentence-Case-String')
    })

    test('that it can convert from `sentence` to `upperFlat`', () => {
      expect('this, is a sentence case, string'.convertCase('sentence', 'upperFlat')).toEqual('THISISASENTENCECASESTRING')
    })
  })

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

    test('that it can convert from `camel` to `pascal`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'pascal')).toEqual('ThisIsCamelCase')
    })

    test('that it can convert from `camel` to `sarcastic`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'sarcastic')).toEqual('ThIs iS CaMeL CaSe')
    })

    test('that it can convert from `camel` to `snake`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'snake')).toEqual('this_is_camel_case')
    })

    test('that it can convert from `camel` to `train`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'train')).toEqual('This-Is-Camel-Case')
    })
    
    test('that it can convert from `camel` to `upperFlat`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'upperFlat')).toEqual('THISISCAMELCASE')
    })

    test('that it can convert from `camel` to `sentence`', () => {
      expect('thisIsCamelCase'.convertCase('camel', 'sentence')).toEqual('this is camel case')
    })
  })

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

    test('that it can convert from `camelSnake` to `pascal`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'pascal')).toEqual('ThisIsCamelSnakeCase')
    })

    test('that it can convert from `camelSnake` to `sarcastic`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'sarcastic')).toEqual('ThIs iS CaMeL SnAkE CaSe')
    })

    test('that it can convert from `camelSnake` to `snake`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'snake')).toEqual('this_is_camel_snake_case')
    })

    test('that it can convert from `camelSnake` to `train`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'train')).toEqual('This-Is-Camel-Snake-Case')
    })

    test('that it can convert from `camelSnake` to `upperFlat`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'upperFlat')).toEqual('THISISCAMELSNAKECASE')
    })

    test('that it can convert from `camelSnake` to `sentence`', () => {
      expect('this_Is_Camel_Snake_Case'.convertCase('camelSnake', 'sentence')).toEqual('this is camel snake case')
    })
  })

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
    
    test('that it can convert from `cobol` to `pascal`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'pascal')).toEqual('ThisIsCobolCase')
    })
    
    test('that it can convert from `cobol` to `sarcastic`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'sarcastic')).toEqual('ThIs iS CoBoL CaSe')
    })

    test('that it can convert from `cobol` to `snake`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'snake')).toEqual('this_is_cobol_case')
    })

    test('that it can convert from `cobol` to `train`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'train')).toEqual('This-Is-Cobol-Case')
    })

    test('that it can convert from `cobol` to `upperFlat`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'upperFlat')).toEqual('THISISCOBOLCASE')
    })

    test('that it can convert from `cobol` to `sentence`', () => {
      expect('THIS-IS-COBOL-CASE'.convertCase('cobol', 'sentence')).toEqual('this is cobol case')
    })
  })

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

    test('that it can convert from `flat` to `pascal`', () => {
      expect('thisisflatcase'.convertCase('flat', 'pascal')).toEqual('Thisisflatcase')
    })

    test('that it can convert from `flat` to `sarcastic`', () => {
      expect('thisisflatcase'.convertCase('flat', 'sarcastic')).toEqual('ThIsIsFlAtCaSe')
    })

    test('that it can convert from `flat` to `snake`', () => {
      expect('thisisflatcase'.convertCase('flat', 'snake')).toEqual('thisisflatcase')
    })
    
    test('that it can convert from `flat` to `train`', () => {
      expect('thisisflatcase'.convertCase('flat', 'train')).toEqual('Thisisflatcase')
    })

    test('that it can convert from `flat` to `train`', () => {
      expect('thisisflatcase'.convertCase('flat', 'train')).toEqual('THISISFLATCASE')
    })

    test('that it can convert from `flat` to `upperFlat`', () => {
      expect('thisisflatcase'.convertCase('flat', 'upperFlat')).toEqual('THISISFLATCASE')
    })

    test('that it can convert from `flat` to `sentence`', () => {
      expect('thisisflatcase'.convertCase('flat', 'sentence')).toEqual('thisisflatcase')
    })
  })

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

    test('that it can convert from `kebab` to `pascal`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'pascal')).toEqual('ThisIsKebabCase')
    })

    test('that it can convert from `kebab` to `sarcastic`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'sarcastic')).toEqual('ThIs iS KeBaB CaSe')
    })

    test('that it can convert from `kebab` to `snake`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'snake')).toEqual('this_is_kebab_case')
    })

    test('that it can convert from `kebab` to `train`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'train')).toEqual('This-Is-Kebab-Case')
    })

    test('that it can convert from `kebab` to `upperFlat`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'upperFlat')).toEqual('THISISKEBABCASE')
    })

    test('that it can convert from `kebab` to `sentence`', () => {
      expect('this-is-kebab-case'.convertCase('kebab', 'sentence')).toEqual('this is kebab case')
    })
  })

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

    test('that it can convert from `macro` to `pascal`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'pascal')).toEqual('ThisIsMacroCase')
    })

    test('that it can convert from `macro` to `sarcastic`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'sarcastic')).toEqual('ThIs iS MaCrO CaSe')
    })

    test('that it can convert from `macro` to `snake`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'snake')).toEqual('this_is_macro_case')
    })

    test('that it can convert from `macro` to `train`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'train')).toEqual('This-Is-Macro-Case')
    })

    test('that it can convert from `macro` to `upperFlat`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'upperFlat')).toEqual('THISISMACROCASE')
    })

    test('that it can convert from `macro` to `sentence`', () => {
      expect('THIS_IS_MACRO_CASE'.convertCase('macro', 'sentence')).toEqual('this is macro case')
    })
  })

  describe('pascal case', () => {
    test('that it can convert from `pascal` to `kebab`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'kebab')).toEqual('this-is-pascal-case')
    })

    test('that it can convert from `pascal` to `camel`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'kebab')).toEqual('thisIsPascalCase')
    })

    test('that it can convert from `pascal` to `camelSnake`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'camelSnake')).toEqual('this_Is_Pascal_Case')
    })

    test('that it can convert from `pascal` to `cobol`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'cobol')).toEqual('THIS-IS-PASCAL-CASE')
    })

    test('that it can convert from `pascal` to `flat`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'flat')).toEqual('thisispascalcase')
    })

    test('that it can convert from `pascal` to `macro`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'macro')).toEqual('THIS_IS_PASCAL_CASE')
    })

    test('that it can convert from `pascal` to `sarcastic`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'sarcastic')).toEqual('ThIs iS PaScAl cAsE')
    })

    test('that it can convert from `pascal` to `snake`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'snake')).toEqual('this_is_pascal_case')
    })
    
    test('that it can convert from `pascal` to `train`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'train')).toEqual('This-Is-Pascal-Case')
    })

    test('that it can convert from `pascal` to `upperFlat`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'upperFlat')).toEqual('THISISPASCALCASE')
    })

    test('that it can convert from `pascal` to `sentence`', () => {
      expect('ThisIsPascalCase'.convertCase('pascal', 'sentence')).toEqual('this is pascal case')
    })
  })

  describe('sarcastic case', () => {
    test('that it can convert from `sarcastic` to `kebab`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'kebab')).toEqual('this-is-sarcastic-case')
    })

    test('that it can convert from `sarcastic` to `camel`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'camel')).toEqual('thisIsSarcasticCase')
    })

    test('that it can convert from `sarcastic` to `camelSnake`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'camelSnake')).toEqual('this_Is_Sarcastic_Case')
    })

    test('that it can convert from `sarcastic` to `cobol`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'cobol')).toEqual('THIS-IS-SARCASTIC-CASE')
    })

    test('that it can convert from `sarcastic` to `flat`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'flat')).toEqual('thisissarcasticcase')
    })

    test('that it can convert from `sarcastic` to `macro`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'macro')).toEqual('THIS_IS_SARCASTIC_CASE')
    })

    test('that it can convert from `sarcastic` to `pascal`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'pascal')).toEqual('ThisIsSarcasticCase')
    })

    test('that it can convert from `sarcastic` to `snake`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'snake')).toEqual('this_is_sarcastic_case')
    })

    test('that it can convert from `sarcastic` to `train`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'train')).toEqual('This-Is-Sarcastic-Case')
    })
    
    test('that it can convert from `sarcastic` to `upperFlat`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'kebab')).toEqual('THISISSARCASTICCASE')
    })

    test('that it can convert from `sarcastic` to `sentence`', () => {
      expect('ThIs iS SaRcAsTic cAsE'.convertCase('sarcastic', 'kebab')).toEqual('this is sarcastic case')
    })
  })

  describe('snake case', () => {
    test('that it can convert from `snake` to `kebab`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'kebab')).toEqual('this-is-snake-case')
    })

    test('that it can convert from `snake` to `camel`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'camel')).toEqual('thisIsSnakeCase')
    })

    test('that it can convert from `snake` to `camelSnake`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'camelSnake')).toEqual('this_Is_Camel_Snake')
    })

    test('that it can convert from `snake` to `cobol`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'cobol')).toEqual('THIS-IS-SNAKE-CASE')
    })

    test('that it can convert from `snake` to `flat`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'flat')).toEqual('thisissnakecase')
    })

    test('that it can convert from `snake` to `macro`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'macro')).toEqual('THIS_IS_SNAKE_CASE')
    })

    test('that it can convert from `snake` to `pascal`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'pascal')).toEqual('ThisIsSnakeCase')
    })

    test('that it can convert from `snake` to `sarcastic`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'sarcastic')).toEqual('ThIs iS SnAkE CaSe')
    })

    test('that it can convert from `snake` to `train`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'train')).toEqual('This-Is-Snake-Case')
    })
    
    test('that it can convert from `snake` to `upperFlat`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'upperFlat')).toEqual('THISISSNAKECASE')
    })

    test('that it can convert from `snake` to `sentence`', () => {
      expect('this_is_snake_case'.convertCase('snake', 'sentence')).toEqual('this is snake case')
    })
  })

  describe('train case', () => {
    test('that it can convert from `train` to `kebab`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'kebab')).toEqual('this-is-train-case')
    })

    test('that it can convert from `train` to `camel`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'camel')).toEqual('thisIsCamelCase')
    })

    test('that it can convert from `train` to `camelSnake`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'camelSnake')).toEqual('this_Is_Train_Case')
    })

    test('that it can convert from `train` to `cobol`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'cobol')).toEqual('THIS-IS-TRAIN-CASE')
    })

    test('that it can convert from `train` to `flat`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'flat')).toEqual('thisistraincase')
    })

    test('that it can convert from `train` to `macro`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'macro')).toEqual('THIS_IS_TRAIN_CASE')
    })

    test('that it can convert from `train` to `pascal`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'kebab')).toEqual('ThisIsTrainCase')
    })

    test('that it can convert from `train` to `sarcastic`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'sarcastic')).toEqual('ThIs iS TrAiN CaSe')
    })

    test('that it can convert from `train` to `snake`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'kebab')).toEqual('this_is_train_case')
    })

    test('that it can convert from `train` to `upperFlat`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'upperFlat')).toEqual('THISISTRAINCASE')
    })

    test('that it can convert from `train` to `sentence`', () => {
      expect('This-Is-Train-Case'.convertCase('train', 'sentence')).toEqual('this is train case')
    })
  })

  describe('upperFlat case', () => {
    test('that it can convert from `upperFlat` to `kebab`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'kebab')).toEqual('thisisupperflatcase')
    })

    test('that it can convert from `upperFlat` to `camel`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'camel')).toEqual('thisisupperflatcase')
    })

    test('that it can convert from `upperFlat` to `camelSnake`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'camelSnake')).toEqual('thisisupperflatcase')
    })

    test('that it can convert from `upperFlat` to `cobol`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'cobol')).toEqual('THISISUPPERFLATCASE')
    })

    test('that it can convert from `upperFlat` to `flat`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'flat')).toEqual('thisisupperflatcase')
    })

    test('that it can convert from `upperFlat` to `macro`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'macro')).toEqual('THISISUPPERFLATCASE')
    })

    test('that it can convert from `upperFlat` to `pascal`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'pascal')).toEqual('Thisisupperflatcase')
    })

    test('that it can convert from `upperFlat` to `sarcastic`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'sarcastic')).toEqual('ThIsIsUpPeRcAsEfLaT')
    })

    test('that it can convert from `upperFlat` to `snake`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'snake')).toEqual('thisisupperflatcase')
    })

    test('that it can convert from `upperFlat` to `train`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'train')).toEqual('Thisisupperflatcase')
    })

    test('that it can convert from `upperFlat` to `sentence`', () => {
      expect('THISISUPPERFLATCASE'.convertCase('upperFlat', 'sentence')).toEqual('thisisupperflatcase')
    })
  })
})
