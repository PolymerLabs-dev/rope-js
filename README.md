# Rope JS

## Overview

```bash
npm install @polymer-co/rope
```

Rope JS extends the inbuilt JavaScript string type with additional helper methods. It's focus is to be simple and to not require wrapper classes - all you need to do is `require` or `import` it, then start using! See [src/rope.ts](src/rope.ts) for available methods.

It includes super useful helper methods; from inserting strings, capitalizing, random sampling, and more! Rope JS also provides utilities for case conversion (ie, camel case to pascal), allowing you to convert from all the well-known casings to any other. Case conversions include:

| Case | Example | Lossy? |
| - | - | - |
| camel | `helloWorld` | No |
| camelSnake | `hello_World` | No |
| cobol | `HELLO-WORLD` | No |
| flat | `helloworld` | Yes |
| kebab | `hello-world` | No |
| macro | `HELLO_WORLD` | No |
| pascal | `HelloWorld` | No |
| sarcastic| `hElLo wOrLd` | No |
| sentence | `hello, world` | No |
| snake | `hello_world` | No |
| train | `Hello-World` | No |
| upperFlat  | `HELLOWORLD` | Yes |

> 'Lossy' implies that word seperation will be lost when converting to this case. For example, converting from camel to flat will result in 'camelCase' being converted to 'camelcase' - the flat case output _cannot_ be converted back into camelCase, as word seperation has not been preseved.

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

Within your entry point file (eg, `main.ts` or `main.js`):

```typescript
import '@polymer-co/rope'
```
or,
```typescipt
require('@polymer-co/rope')
```

After importing, the extension methods should be usable in all other files.

### If installed with static file

There should be no other action needed if installed via a static file.

## Examples

The below examples do not include all available methods, it is meant to demonstrate general usage.

**Convert from camel case to train case**
```typescript
"thisIsCamelCase".convertCase('camel', 'train') // "This-Is-Camel-Case
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


