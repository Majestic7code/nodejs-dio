//objeto 1
const player1 = {
    NOME: 'Mario',
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
}
// objeto2
const player2 = {
    NOME: 'Luigi',
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
}
 //função para rolar o dado
async function rollDice(){
   return Math.floor(Math.random() * 6) + 1;
}
 // função para ecolher o tipo de partida aleatoria
async function getRandomBlock() {
    let random = Math.random()
    let result

    switch (true) {
        case random < 0.33:
            result = 'RETA'
            break;
        case random < 0.66:
            result = 'CURVA'
            break;
        default:
        result = 'CONFRONTO'
    }

    return result
}
//Motor de iniciação da corrida
async function playRaceEngine( character1, character2) {
    for (let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`)

        // sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)
    }

}
// primeira função indicando os jogadores
(async function main() {
    console.log(
        `🏁🚨 Corrida entre o ${player1.NOME} e o ${player2.NOME} começando... \n`
    );
    
    await playRaceEngine(player1,player2);
})();

 