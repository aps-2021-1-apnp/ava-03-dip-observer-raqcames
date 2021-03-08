import { Product } from './Product'
import { Order } from './Order'
import { ProductAction } from './ProductAction'

export interface IObserverAddProductCart {
  whenAdd(p: Product): void
}
export interface IObserverRemoveProductCart {
  whenRemove(p: Product): void
}
export interface IObserverAbandonProductCart {
  whenAbandon(products: Product[]): void
}

export interface IObserverCart {
  whenAdd(p: Product): void
  whenRemove(p: Product): void
  whenPurchase(products: Product[]): void
  whenAbandon(products: Product[]): void
}

// API
export class Cart extends ProductAction{
  readonly observers: IObserverCart[] = []

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

  purchase(): Order {
    const prod: Product[] = [...this.Products]
    this.notifyPurchase(prod)
    const ped = new Order(prod)
    this.esvazia()
    return ped
  }

  private notifyPurchase(prods: Product[]) {
    for (const observer of this.observers) {
      observer.whenPurchase(prods)
    }
  }

  abandon(): void {
    this.notifyAbandon(this.Products)
    this.esvazia()
  }

  private notifyAbandon(prods: Product[]) {
    for (const observer of this.observers) {
      observer.whenAbandon(prods)
    }
  }

  addObserver(obs: IObserverCart) {
    this.observers.push(obs)
  }

  removeObserver(obs: IObserverCart) {
    const i = this.observers.indexOf(obs)
    if (i >= 0) {
      this.observers.splice(i, 1)
    }
  }

  private esvazia(): void {
    this.Products.splice(0)
  }
}
