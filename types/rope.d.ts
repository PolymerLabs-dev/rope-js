
// https://stackoverflow.com/questions/46664732/typescript-how-to-add-static-methods-to-built-in-classes

interface String {

  /**
   * Capitalizes every word in this `string`.
   * 
   * @param limit maximum limit of upper case conversions, set to `-1` for no limit. Default `-1`.
   * @param delimeters characters to use to seperate words within the `string`. Set to `undefined` to use the default Regex delimeters. Default `undefined`.
   * @returns a capitalized `string`.
   */
  capitalized(limit: number, delimeters?: string[]): string

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
   * Inserts some text into this `string` at a given `index` and returns the result.
   * 
   * @param index index to insert the text at.
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
  isStrictNumeric(allowExponents: boolean): boolean

  /**
   * Joins this `string` with another `string` with a given separator and returns the result.
   * 
   * @param text `string` to join onto this `string`
   * @param separator the separator to use when joining. Default `' '`.
   * @returns the resultant `string` after joining the text.
   */
  join(text: string, separator: string): string

  /**
   * Finds a random sample from this `string` of a given size and returns the result.
   * 
   * @returns
   */
  sample(size: number): string

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
  shuffled(): string

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
