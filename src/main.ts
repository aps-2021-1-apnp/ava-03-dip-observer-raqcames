import { Cart } from './Cart'
import { Product } from './Product'
import { Order } from './Order'
import { Wishlist } from './Wishlist'
import { Marketing } from './Marketing'
import { Logger } from './Logger'

console.log('ok')

const p1 = new Product(1, 'Tripé Para Celular Flexivel')
const p2 = new Product(2, 'Carregador de parede universal 2.1A, 2 portas USB, bivolt')
const p3 = new Product(3, 'Caixa Multimidia Portatil Go 2, JBL')
const p4 = new Product(4, 'Bateria Externa Carga Rápida 10,000Mah USB Tipo C')
const p5 = new Product(5, 'Fones de Ouvido Xiaomi Redmi AirDots')
const p6 = new Product(6, 'Máquina De Café Espresso Coffee Cream ')
const p7 = new Product(7, 'Parafusadeira/furadeira De Impacto 1⁄2” (13mm) 20v Max')
const p8 = new Product(8, 'Honorall Full HD 1080 P Webcam USB Mini Câmera')

console.log('cart 1')
const cart = new Cart()
cart.addObserver(new Logger())
cart.add(p1)
cart.add(p2)
console.log(cart.Products)
cart.abandon()
console.log(cart.Products)
cart.add(p3)
cart.add(p4)
cart.remove(p3)
console.log(cart.Products)
cart.add(p5)

cart.addObserver(new Marketing())
const order = cart.purchase()
console.log(order.products)
console.log(cart.Products)

console.log('cart 2')
const cart2 = new Cart()
cart2.add(p7)
cart2.add(p8)
cart2.abandon()
const order2 = cart2.purchase()
if (order2.products.length === 0) {
  console.log('cart vazio')
}

console.log('Wishlist')
const wishlist = new Wishlist()
wishlist.addObserver(new Logger())
wishlist.add(p1)
wishlist.add(p2)
wishlist.add(p3)
wishlist.remove(p1)

