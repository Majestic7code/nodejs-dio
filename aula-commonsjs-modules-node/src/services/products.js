//todas as funçoes que lidam com produtos
const productType = {
    version: 'digital',
    tax: '1x',
}

 //hidden const / hidden members
    const apiURL = {
        url: 'www.google.com/api',
    };

async function getFullName(codeId, productName) {
    console.log('\n')
    console.log('product: ' + codeId + "--" + productName)
}

async function getProductLabel(productName) {
    console.log('Product: ' + productName)
}

module.exports = {
    getFullName,
    getProductLabel,
    productType,
}