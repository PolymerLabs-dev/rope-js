# Rope JS

## Overview

Rope JS extends the inbuilt JavaScript string type with additional helper functions. It's focus is to be simple and to not require wrapper classes - all you need to do is `require` it, and start using!

It includes super useful helper classes, from inserting strings, capitalizing, sampling, and more! It also includes case conversion (ie, camel case to pascal), allowing you to convert from all the well-known casings to any other!

TypeScript types declaration files are included by default.

## Installation

### `npm` installation

To install on `npm` run `npm install @polymer-co/rope`

### Static file installation

Download the most recent `rope.js` from the releases section on GitHub. Include the file as usual:

```html
<html>
  <head>
    <script src='lib/path/rope.js'></script>
  </head>
</html>
```

## Usage

For full API documentation, check the declaration file [src/rope.ts](src/rope.ts).

### If installed with `npm`

Within your entry point file (eg, `main.ts` or `main.js`), import `rope`:

```typescript
import '@polymer-co/rope'
```

After importing, the extension methods should be usable in all other files.

### If installed with static file

There should be no other action needed if installed via a static file.

## Examples

The below examples do not include all available methods, it is meant to demonstrate general usage.

**Convert from camel case to train case**
```typescript
"thisIsCamelCase".convertCase('camel', 'pascal') // "This-Is-Camel-Case
```
> See [src/rope.ts](src/rope.ts)'s `Case` type for a list of available case conversions.

**Uppercase all words in a sentence**
```typescript
"test sentence to uppercase".uppercaseAll() // "Test Sentence To Uppercase"
```

**Insert a word at a given position**
```typescript
"hi, are  there?".insert(8, "you") // "hi, are you there?
```

**Return a list of characters**
```typescript
"hello".chars() // ['h', 'e', 'l', 'l', 'o']
```

**Remove a portion of a string**
```typescript
"12345".remove(1, 3) // "15"
```


