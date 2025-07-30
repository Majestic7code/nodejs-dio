async function connectToDatabase(user, password) {
    if(user=== process.env.USERDATABASE && password=== process.env.PASSAWORDDATABASE){
        console.log('Usuario Identificado.')
    }else {
        console.log('Usuario ou senha incorreta. Tente novamente!')
    }
}

export default connectToDatabase
