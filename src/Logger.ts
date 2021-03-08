import { IObserverCart } from './Cart'
import { IObserverWishlist } from './Wishlist'
import { Product } from './Product'


export class Logger implements IObserverCart, IObserverWishlist {
  whenAdd(p: Product) {
    console.info(`LOGGER: ${p.description} foi adicionado`)
  }
  whenRemove(p: Product) {
    console.info(`LOGGER: ${p.description} foi removido`)
  }
  whenPurchase(products: Product[]) {
    console.info(`LOGGER: ${products.length} comprado(s)`)
  }
  whenAbandon(products: Product[]) {
    console.info(`LOGGER: ${products.length} abandonado(s)`)
  }
}
