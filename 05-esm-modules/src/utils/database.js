const dataType = {
    userType: 'admin',
    typeData:'datalocal'
}

async function connectToDatabase(dataName) {
    console.log('🌍Conectado ao banco de dados: ' + dataName)
}

async function disconnectToDatabase() {
    console.log('🛑Desconectando...')
}
export {
     connectToDatabase,
     disconnectToDatabase,
     dataType
}