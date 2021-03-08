import { IObserverCart } from './Cart'
import { IObserverWishlist } from './Wishlist'
import { Product } from './Product'

export class Marketing implements IObserverCart, IObserverWishlist {
  whenAdd(p: Product) {
    console.info(`MARKETING: ${p.description} foi adicionado`)
  }
  whenRemove(p: Product) {
    console.info(`MARKETING: ${p.description} foi removido`)
  }
  whenPurchase(products: Product[]) {
    console.info(`MARKETING: ${products.length} comprado(s)`)
  }
  whenAbandon(products: Product[]) {
    console.info(`MARKETING: ${products.length} abandonado(s)`)
  }
}
