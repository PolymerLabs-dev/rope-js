
export {}

/**
 * Static implementations.
 */

String.empty = () => {
  return ""
}

/**
 * Instance implementations.
 */

String.prototype.capitalized = 
function (this: string, limit?: number = -1, delimeters?: string[]): string {
  // Ignore if just whitespace
  if (this.isEmptyOrWhitespace()) {
    return this
  }

  let regex: RegExp

  if (delimeters == null) {
    // Use default regex word boundaries
    regex = /\b\w/g
  } else {
    // Create a custom regex expression if using custom delimeters
    regex = new RegExp(`[${delimeters.join('')}]\w`, 'g')
  }

  // Function that performs the replacement operation
  const replacer = (m: string) => {
    return m.toUpperCase()
  }

  if (limit >= 0) {
    let counter: number = 0
    return this.replace(regex, (m: string) => {
      // If counter exceeded, return unmodified string
      if (counter >= limit) {
        return m
      }

      counter++
      return replacer(m)
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
  return (' ' + this.slice(1))
}

String.prototype.insert =
function(this: string, index: number, text: string): string {
  if (index < 0) {
    throw new RangeError(`Unable to insert text at index '${number}'`)
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
function(this: string, size: number): string {
  if (size < 0) {
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

  if (startIndex > endIndex) {
    throw new RangeError(`Cannot start string removal from index ${startIndex} as it is greater than the end index ${endIndex}`)
  }

  if (endIndex == null) {
    return this.slice(0, startIndex)
  } else {
    return this.slice(0, startIndex) + this.slice(endIndex)
  }
}

String.prototype.shuffled =
function(this: string): string {
  const chars = this.chars()

  return chars.sort(() => {
    return Math.random() < 0.5 ? -1 : 1
  }).join('')
}

String.prototype.toAscii =
function (this: string): string {
  return Buffer.from(this, 'base64').toString('ascii')
}

String.prototype.toBase64 =
function (this: string): string {
  return Buffer.from(this).toString('base64')
}
