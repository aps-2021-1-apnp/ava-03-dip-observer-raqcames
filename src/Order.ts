import { Product } from './Product'

export class Order {
  readonly products: Product[]
  constructor(products: Product[]) {
    this.products = products
  }
}
