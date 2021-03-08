import { Product } from './Product'
import { Order } from './Order'
import { ProductAction } from './ProductAction'

export interface IObserverAddProductWishlist {
  whenAdd(p: Product): void
}
export interface IObserverRemovevProductWishlist {
  whenRemove(p: Product): void
}

export interface IObserverWishlist {
  whenAdd(p: Product): void
  whenRemove(p: Product): void
}

export class Wishlist extends ProductAction{
  readonly observers: IObserverWishlist[] = []

  readonly Products: Product[] = []

  notifyAdd(p: Product) {
    for (const observer of this.observers) {
      observer.whenAdd(p)
    }
  }

  notifyRemove(p: Product) {
    for (const observer of this.observers) {
      observer.whenRemove(p)
    }
  }

  addObserver(obs: IObserverWishlist) {
    this.observers.push(obs)
  }

  removeObserver(obs: IObserverWishlist) {
    const i = this.observers.indexOf(obs)
    if (i >= 0) {
      this.observers.splice(i, 1)
    }
  }

}
