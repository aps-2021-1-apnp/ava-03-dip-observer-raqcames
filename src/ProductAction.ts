import { Product } from './Product'

export abstract class ProductAction {
  readonly Products: Product[] = []

  add(p: Product) {
    this.notifyAdd(p)
    this.Products.push(p)
  }

  abstract notifyAdd(p: Product): void

  remove(p: Product): void {
    const i = this.Products.indexOf(p)
    if (i >= 0) {
      this.notifyRemove(p)
      this.Products.splice(i, 1)
    }
  }

  abstract notifyRemove(p: Product): void

}
