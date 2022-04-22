
export {}

declare global {
  interface StringConstructor {
    /**
     * Creates a new empty `string`.
     * 
     * @returns an empty `string`.
     */
    empty(): string
  }
}
