
/**
 * Cases available for text to be converted to and from.
 */
type Case = 'camel' | 'camelSnake' | 'cobol' | 'flat' | 'kebab' | 'macro' | 'pascal'| 'sarcastic' | 'sentence' | 'snake' | 'train' | 'upperFlat'

interface String {

  /**
   * Capitalizes the first word in this `string`.
   * 
   * @returns a capitalized `string`.
   */
  capitalize(): string

  /**
   * Capitalizes every word in this `string`.
   * 
   * @param limit maximum limit of upper case conversions, set to `-1` for no limit. Default `-1`.
   * @param delimiters characters to use to separate words within the `string`. Set to `undefined` to use the default Regex delimiters. Default `undefined`.
   * @returns a capitalized `string`.
   */
  capitalizeAll(limit?: number, delimiters?: string[] | string): string

  /**
   * Returns this `string` as a list of characters.
   * 
   * @returns a list of characters.
   */
  chars(): string[]

  /**
   * Converts this `string` from a `Case` to another `Case`. Converting from and to 'lossy' cases will cause loss of word separation boundaries.
   * ```ts
   * `camel`      | `helloWorld`
   * `camelSnake` | `hello_World`
   * `cobol`      | `HELLO-WORLD`
   * `flat`       | `helloworld` (lossy)
   * `kebab`      | `hello-world`
   * `macro`      | `HELLO_WORLD`
   * `pascal`     | `HelloWorld`
   * `sarcastic`  | `hElLo wOrLd`
   * `sentence`   | `hello, world` ('from' conversion boundaries expressed by Regex non-word `\W`)
   * `snake`      | `hello_world`
   * `train`      | 'Hello-World'
   * `upperFlat`  | `HELLOWORLD` (lossy)
   * ```
   * 
   * @param fromCase the `Case` to convert from.
   * @param toCase the `Case` to convert to.
   * @returns a `string` represented in the new `Case`.
   */
  convertCase(fromCase: Case, toCase: Case): string

  /**
   * Performs a deep copy of this `string`.
   * 
   * @returns a copy of this `string`.
   */
  copy(): string

  /**
   * Inserts some text into this `string` after a given `index` and returns the result.
   * 
   * @param index index to insert the text at. Can use negative indices.
   * @param text text to insert.
   * @returns this `string` with text inserted at the given index.
   */
  insert(index: number, text: string): string

  /**
   * Determines if this `string` is empty, `null`, or `undefined`.
   * 
   * @returns `true` if this `string` is empty, `null`, or `undefined``. 
   */
  isEmpty(): boolean

  /**
   * Determines if this `string` is empty, whitespace, `null`, or `undefined`.
   * 
   * @returns `true` if this `string` is empty, whitespace, `null`, or `undefined`. 
   */
  isEmptyOrWhitespace(): boolean

  /**
   * Determines if this `string` is an integer `number`.
   * 
   * @returns `true` if this `string` is a numeric integer.
   */
  isInteger(): boolean

  /**
   * Determines if this `string` is strictly an integer `number`. Will fail if `string` is not an integer number, even in cases where JavaScript can interpret it as a `number`.
   * 
   * @returns `true` if this `string` is a numeric integer.
   */
  isStrictInteger(): boolean

  /**
   * Determines if this `string` can be converted to a JavaScript `number`.
   * 
   * @returns `true` if this `string` is numeric.
   */
  isNumeric(): boolean

  /**
   * Determines if this `string` is strictly a number. Will fail if `string` is not a number, even in cases where JavaScript can interpret it as a `number`.
   * 
   * @param allowExponents `true` to allow for exponent notation. Default `false`.
   * @returns `true` if this `string` is strictly numeric.
   */
  isStrictNumeric(allowExponents?: boolean): boolean

  /**
   * Joins this `string` with another `string` with a given separator and returns the result.
   * 
   * @param text `string` to join onto this `string`
   * @param separator the separator to use when joining. Default `' '`.
   * @returns the resultant `string` after joining the text.
   */
  join(text: string, separator?: string): string

  /**
   * Finds a random sample from this `string` of a given size and returns the result.
   * 
   * @param size the size of the string to sample, must be greater than zero. Default `1`.
   * @returns a random sampling of this `string`.
   */
  sample(size?: number): string

  /**
   * Removes a portion of a `string` and returns the result.
   * 
   * @param startIndex index in which to start the removal.
   * @param endIndex index to stop the removal, `undefined` to remove until the end of the `string`. Is not inclusive. Default `undefined`.
   * @returns the resultant `string` after removing the specified portion.
   */
  remove(startIndex: number, endIndex?: number): string

  /**
   * Shuffles this `string` and returns the result.
   * 
   * @returns the shuffled `string`.
   */
  shuffle(): string

  /**
   * Converts a base64 encoded `string` to an ascii `string`.
   * 
   * @returns this `string` as an ascii `string`.
   */
  toAscii(): string

    /**
   * Converts this `string` to a base64 `string` and returns the result.
   * 
   * @returns this `string` as a base64 `string`.
   */
  toBase64(): string
}

String.prototype.capitalize =
function (this: string): string {
  if (this.isEmptyOrWhitespace()) {
    return this
  }

  return this.slice(0, 1).toUpperCase() + this.slice(1)
}

String.prototype.capitalizeAll = 
function (this: string, limit: number = -1, delimiters?: string[] | string): string {
  if (delimiters != null && !Array.isArray(delimiters)) {
    delimiters = [delimiters] as string[]
  }

  // Ignore if just whitespace
  if (this.isEmptyOrWhitespace()) {
    return this
  }

  let regex: RegExp = delimiters == null ? /(\b)(\w)/g : new RegExp(`([${delimiters.join('')}])(\\w)`, 'g')

  // Function that performs the replacement operation
  const replacer = (_: string, m1: string, m2: string) => {
    return `${m1}${m2.toUpperCase()}`
  }

  if (limit >= 0) {
    let counter: number = 0
    return this.replace(regex, (m: string, m1: string, m2: string) => {
      // If counter exceeded, return unmodified string
      if (counter >= limit) {
        return m
      }

      counter++
      return replacer(m, m1, m2)
    })
  }

  return this.replace(regex, replacer)
}

String.prototype.chars =
function(this: string): string[] {
  return this.split('')
}

String.prototype.convertCase =
function(this: string, fromCase: Case, toCase: Case = 'sentence'): string {
  if (this.isEmptyOrWhitespace()) {
    return ''
  }

  if (fromCase == toCase) {
    return this
  }
  
  let textAsKebab: string = this

  switch (fromCase) {
    case 'sentence':
      textAsKebab = sentenceToKebab(this)
      break
    case 'camel':
      textAsKebab = camelToKebab(this)
      break
    case 'camelSnake':
      textAsKebab = camelSnakeToKebab(this)
      break
    case 'cobol':
      textAsKebab = cobolToKebab(this)
      break
    case 'flat':
      textAsKebab = flatToKebab(this)
      break
    case 'macro':
      textAsKebab = macroToKebab(this)
      break
    case 'pascal':
      textAsKebab = pascalToKebab(this)
      break
    case 'snake':
      textAsKebab = snakeToKebab(this)
      break
    case 'train':
      textAsKebab = trainToKebab(this)
    case 'upperFlat':
      textAsKebab = upperFlatToKebab(this)
    case 'sarcastic':
      textAsKebab = sarcasticToKebab(this)
    case 'kebab':
      break
    default:
      throw new Error(`Cannot convert from case '${fromCase}': case invalid.`)
  }

  switch (toCase) {
    case 'sentence':
      return kebabToSentence(textAsKebab)
    case 'camel':
      return kebabToCamel(textAsKebab)
    case 'camelSnake':
      return kebabToCamelSnake(textAsKebab)
    case 'cobol':
      return kebabToCobol(textAsKebab)
    case 'flat':
      return kebabToFlat(textAsKebab)
    case 'macro':
      return kebabToMacro(textAsKebab)
    case 'pascal':
      return kebabToPascal(textAsKebab)
    case 'snake':
      return kebabToSnake(textAsKebab)
    case 'train':
      return kebabToTrain(textAsKebab)
    case 'upperFlat':
      return kebabToUpperFlat(textAsKebab)
    case 'sarcastic':
      return kebabToSarcastic(textAsKebab)
    case 'kebab':
      return textAsKebab
    default:
      throw new Error(`Cannot convert to case '${toCase}': case invalid.`)
  }
}

String.prototype.copy =
function(this: string): string {
  if (this == null) {
    throw new TypeError(`Unable to copy null string`)
  }
  
  return (' ' + this).slice(1)
}

String.prototype.insert =
function(this: string, index: number, text: string): string {
  if (index < 0) {
    index = Math.max(this.length + index + 1, 0)
  }

  return `${this.substring(0, index)}${text}${this.substring(index)}` 
}

String.prototype.isEmpty =
function(this: string): boolean {
  return this == null || this.length == 0
}

String.prototype.isEmptyOrWhitespace =
function(this: string): boolean {
  return this.isEmpty() || /^\s*$/.test(this)
}

String.prototype.isInteger =
function(this: string): boolean {
  if (this.isEmptyOrWhitespace()) return false

  return !Number.isNaN(Number.parseInt(this))
}

String.prototype.isStrictInteger =
function(this: string): boolean {
  if (this.isEmptyOrWhitespace()) return false

  if (!/^[+-]?\d+$/.test(this)) {
    return false
  }

  return !Number.isNaN(Number.parseInt(this))
}

String.prototype.isNumeric =
function(this: string): boolean {
  if (this.isEmptyOrWhitespace()) return false

  return !Number.isNaN(Number.parseFloat(this))
}

String.prototype.isStrictNumeric =
function(this: string, allowExponents: boolean = false): boolean {
  if (this.isEmptyOrWhitespace()) return false

  if (allowExponents && !/^[+-]?\d+(\.\d+)?(e[+-]?\d+)?$/i.test(this)) {
    return false
  }

  if (allowExponents) {
    if (!/^[+-]?\d+(\.\d+)?(e[+-]?\d+)?$/i.test(this)) {
      return false
    }
  } else if (!/^[+-]?\d+(\.\d+)?$/.test(this)) {
    return false
  }

  return !Number.isNaN(Number.parseFloat(this))
}

String.prototype.join =
function(this: string, text: string, separator: string = ' '): string {
  if (text.isEmpty()) {
    return this
  }
  
  return `${this}${separator}${text}`
}

String.prototype.sample =
function(this: string, size: number = 1): string {
  if (size <= 0) {
    throw new RangeError(`Cannot get sample of string of size ${size}`)
  }

  const index = Math.floor(Math.random() * (this.length - (size - 1)))
  return this.substring(index, index + size)
}

String.prototype.remove =
function(this: string, startIndex: number, endIndex?: number): string {
  if (startIndex < 0) {
    throw new RangeError(`Cannot start string removal from index ${startIndex}`)
  }

  if (endIndex != null && startIndex > endIndex) {
    throw new RangeError(`Cannot start string removal from index ${startIndex} as it is greater than the end index ${endIndex}`)
  }

  if (endIndex == null) {
    return this.slice(0, startIndex)
  } else {
    return this.slice(0, startIndex) + this.slice(endIndex)
  }
}

String.prototype.shuffle =
function(this: string): string {
  const chars = this.chars()

  return chars.sort(() => {
    return Math.random() < 0.5 ? -1 : 1
  }).join('')
}

String.prototype.toAscii =
function (this: string): string {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(this, 'base64').toString('ascii')
  } else {
    return atob(this)
  }
}

String.prototype.toBase64 =
function (this: string): string {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(this).toString('base64')
  } else {
    return btoa(this)
  }
}

/**
 * Converts from `sentence` case to `kebab` case.
 * 
 * @param text `sentence` case text to convert.
 * @returns the text in kebab case.
 */
function sentenceToKebab(text: string): string {
  return text.toLowerCase().replaceAll(/(?<!^)(?:\W+)(\w)/g, '-$1')
}

/**
 * Converts from `kebab` case to `sentence` cases, using spaces as the separators.
 * 
 * @param text `kebab` case text to convert
 * @returns the text in `sentence` case.
 */
function kebabToSentence(text: string): string {
  return text.replaceAll('-', ' ')
}

/**
 * Converts from `camel` case to `kebab` case.
 * 
 * @param text `camel` case text to convert.
 * @returns the text in `kebab` case.
 */
 function camelToKebab(text: string): string {
  return text.replaceAll(/[A-Z]/g, (m: string) => {
    return `-${m.toLowerCase()}`
  })
}

/**
 * Converts from `kebab` case to `camel` cases.
 * 
 * @param text `kebab` case text to convert
 * @returns the `text` in `camel` case.
 */
function kebabToCamel(text: string): string {
  return text.replaceAll(/-(\w)/g, (_: string, m1: string) => {
    return `${m1.toUpperCase()}`
  })
}

/**
 * Converts from `camelSnake` case to `kebab` case.
 * 
 * @param text `camelSnake` case text to convert.
 * @returns the text in `kebab` case.
 */
 function camelSnakeToKebab(text: string): string {
  return text.toLowerCase().replaceAll('_', '-')
}

/**
 * Converts from `kebab` case to `camelSnake` cases.
 * 
 * @param text `kebab` case text to convert
 * @returns the `text` in `camelSnake` case.
 */
function kebabToCamelSnake(text: string): string {
  return text.replaceAll(/-(\w)/g, (_: string, m1: string) => {
    return `_${m1.toUpperCase()}`
  })
}

/**
 * Converts from `cobol` case to `kebab` case.
 * 
 * @param text `cobol` case text to convert.
 * @returns the text in `kebab` case.
 */
 function cobolToKebab(text: string): string {
  return text.toLowerCase()
}

/**
 * Converts from `kebab` case to `cobol` cases.
 * 
 * @param text `kebab` case text to convert
 * @returns the `text` in `cobol` case.
 */
function kebabToCobol(text: string): string {
  return text.toUpperCase()
}

/**
 * Converts from `flat` case to `kebab` case.
 * 
 * @param text `flat` case text to convert.
 * @returns the text in `kebab` case.
 */
 function flatToKebab(text: string): string {
  return text.copy()
}

/**
 * Converts from `kebab` case to `flat` cases.
 * 
 * @param text `kebab` case text to convert
 * @returns the `text` in `flat` case.
 */
function kebabToFlat(text: string): string {
  return text.replaceAll('-', '')
}

/**
 * Converts from `macro` case to `kebab` case.
 * 
 * @param text `macro` case text to convert.
 * @returns the text in `kebab` case.
 */
 function macroToKebab(text: string): string {
  return text.toLowerCase().replaceAll('_', '-')
}

/**
 * Converts from `kebab` case to `macro` cases.
 * 
 * @param text `kebab` case text to convert
 * @returns the `text` in `macro` case.
 */
function kebabToMacro(text: string): string {
  return text.toUpperCase().replaceAll('-', '_')
}

/**
 * Converts from `pascal` case to `kebab` case.
 * 
 * @param text `pascal` case text to convert.
 * @returns the text in `kebab` case.
 */
 function pascalToKebab(text: string): string {
  return text.replaceAll(/(?<!^)([A-Z])/g, (m: string) => {
    return `-${m}`
  }).toLowerCase()
}

/**
 * Converts from `kebab` case to `pascal` cases.
 * 
 * @param text `pascal` case text to convert
 * @returns the `text` in `macro` case.
 */
function kebabToPascal(text: string): string {
  return text.replaceAll(/(?:-|^)(\w)/g, (_: string, m1: string) => {
    return `${m1.toUpperCase()}`
  })
}

/**
 * Converts from `sarcastic` case to `kebab` case.
 * 
 * @param text `sarcastic` case text to convert.
 * @returns the text in `kebab` case.
 */
 function sarcasticToKebab(text: string): string {
  return text.replaceAll(' ', '-').toLowerCase()
}

/**
 * Converts from `kebab` case to `sarcastic` cases.
 * 
 * @param text `kebab` case text to convert
 * @returns the `text` in `sarcastic` case.
 */
function kebabToSarcastic(text: string): string {
  return text.replaceAll('-', ' ').replaceAll(/.{2}|./g, (m: string) => {
    return `${m.capitalize()}`
  })
}

/**
 * Converts from `snake` case to `kebab` case.
 * 
 * @param text `snake` case text to convert.
 * @returns the text in `kebab` case.
 */
function snakeToKebab(text: string): string {
  return text.replaceAll('_', '-')
}

/**
 * Converts from `kebab` case to `snake` cases.
 * 
 * @param text `kebab` case text to convert
 * @returns the `text` in `snake` case.
 */
function kebabToSnake(text: string): string {
  return text.replaceAll('-', '_')
}

/**
 * Converts from `train` case to `kebab` case.
 * 
 * @param text `train` case text to convert.
 * @returns the text in `kebab` case.
 */
 function trainToKebab(text: string): string {
  return text.toLowerCase()
}

/**
 * Converts from `kebab` case to `train` cases.
 * 
 * @param text `kebab` case text to convert
 * @returns the `text` in `train` case.
 */
function kebabToTrain(text: string): string {
  return text.replaceAll(/(?:-|^)(\w)/g, (_: string, m1: string) => {
    return `-${m1.toUpperCase()}`
  }).substring(1)
}

/**
 * Converts from `upperFlat` case to `kebab` case.
 * 
 * @param text `upperFlat` case text to convert.
 * @returns the text in `kebab` case.
 */
 function upperFlatToKebab(text: string): string {
  return text.toLowerCase()
}

/**
 * Converts from `kebab` case to `upperFlat` cases.
 * 
 * @param text `kebab` case text to convert
 * @returns the `text` in `upperFlat` case.
 */
function kebabToUpperFlat(text: string): string {
  return text.replaceAll('-', '').toUpperCase()
}
