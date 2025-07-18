const products = require("./services/products")
const { getFullName, productType } = require('./services/products')
const config = require('./services/config')
const dataBase = require('./services/database')

async function main() {
    console.log('Carrinho de compras:')
   
    //product.getFullName('408', 'MousePad')
    products.getFullName('501','Teclado')
    products.getProductLabel('Mouse')
    
    console.log(productType)

    dataBase.connectToDatabase('my-data')
}
main();