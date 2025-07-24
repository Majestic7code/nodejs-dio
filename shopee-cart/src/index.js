import * as cartService from "./services/cart.js"
import createItem from "./services/item.js"

const myCart = []  

console.log('Welcome to the your shopee Cart!🛒')

const item1 = await createItem("Pneu dianteiro 88/100", 300, 1)
const item2 = await createItem("Pneu traseiro 100/100", 400, 2)
const item3 = await createItem("Retrovisor", 29.90, 4)

//adicionei dois itens no carrinho
await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)
//await cartService.addItem(myCart, item3)

await cartService.removeItem(myCart, 1)

//deletei dois itens do carrinho
//await cartService.deleteItem(myCart, item2.name)
//await cartService.deleteItem(myCart, item1.name)

// 

await cartService.displayCart(myCart)

await cartService.calculateTotal(myCart)