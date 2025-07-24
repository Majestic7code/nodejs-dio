//Quais açoes meu carrinho pode fazer

//Adicionar item
async function addItem(userCart, item){
 userCart.push(item)
}


//deletar item
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item)=> item.name === name )
    
    if ( index !== -1) {
        userCart.splice(index, 1)
    }
}
//remover um item
async function removeItem(userCart, index) {
    //transforma o indice do usuario, para o indice do backend
    const deleteIndex = index - 1 

    //É maior que zero e index menor que o tamanho do carrinho
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1)
    }
}
//total de itens
async function totalItem(userCart) {
    
}
//total do valor / calcular o total
async function calculateTotal(userCart) { 
    console.log('\n 🛒 Shopee Cart TOTAL: ')
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0 )
    console.log(result)
}

async function displayCart(userCart) {
     console.log(' \n Shopee cart list: ')
     userCart.forEach((item, index) => {
       console.log(`${index + 1}. ${item.name} - R$ ${item.price} | Qnt. ${item.quantity} | subtotal: R$ ${item.subtotal()}`)  
     })
}

export {
    addItem,
    deleteItem,
    removeItem,
    totalItem,
    calculateTotal,
    displayCart,
}