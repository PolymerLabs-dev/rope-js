
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
   * @param delimeters characters to use to seperate words within the `string`. Set to `undefined` to use the default Regex delimeters. Default `undefined`.
   * @returns a capitalized `string`.
   */
  capitalizeAll(limit?: number, delimeters?: string[] | string): string

  /**
   * Returns this `string` as a list of characters.
   * 
   * @returns a list of characters.
   */
  chars(): string[]

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
   * Determines if this `string` is strictly an integer `number`. Will fail if `string` is not an integer number, even in cases where JavaScipt can interpret it as a `number`.
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
   * Determines if this `string` is strictly a number. Will fail if `string` is not a number, even in cases where JavaScipt can interpret it as a `number`.
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
   * @returns
   */
  sample(size?: number): string

  /**
   * Removes a portion of a `string` and returns the result.
   * 
   * @param startIndex index in which to start the removal.
   * @param endIndex last index to remove, `undefined` to remove until the end of the `string`. Default `undefined`.
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
function (this: string, limit: number = -1, delimeters?: string[] | string): string {
  if (delimeters != null && !Array.isArray(delimeters)) {
    delimeters = [delimeters] as string[]
  }

  // Ignore if just whitespace
  if (this.isEmptyOrWhitespace()) {
    return this
  }

  let regex: RegExp = delimeters == null ? /(\b)(\w)/g : new RegExp(`([${delimeters.join('')}])(\\w)`, 'g')

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

  if (!/^[+-]?\d+(\.\d+)?$/.test(this)) {
    return false
  }

  return !Number.isNaN(Number.parseFloat(this))
}

String.prototype.join =
function(this: string, text: string, separator: string = ' '): string {
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
