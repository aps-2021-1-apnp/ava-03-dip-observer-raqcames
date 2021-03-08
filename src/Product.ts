export class Product {
  readonly code: number
  readonly description: string

  constructor(code: number, description: string) {
    this.code = code
    this.description = description
  }
}
