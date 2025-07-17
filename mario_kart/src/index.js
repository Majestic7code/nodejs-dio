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

async function logRollResult(characterName, block, diceResult, attribute) {
     console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}` )
}
//Motor de iniciação da corrida
async function playRaceEngine( character1, character2) {
    for (let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`)

        // sortear bloco
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

         //rolar os dados
    let diceResult1 = await rollDice()
    let diceResult2 = await rollDice()

    //teste de habilidade
    let totalTesteSkill1 = 0;
    let totalTesteSkill2 = 0;  

    if(block === 'RETA'){
        totalTesteSkill1 = diceResult1 + character1.VELOCIDADE;
        totalTesteSkill2 = diceResult2 + character2.VELOCIDADE;

       await logRollResult(
        character1.NOME,
        "velocidade", 
        diceResult1,
        character1.VELOCIDADE
        );
       await logRollResult(
        character2.NOME,
        "velocidade", 
        diceResult2,
        character2.VELOCIDADE
        );
    }
    if(block === 'CURVA'){
        totalTesteSkill1 = diceResult1 + character1.MANOBRABILIDADE;
        totalTesteSkill2 = diceResult2 + character2.MANOBRABILIDADE;

        await logRollResult(
        character1.NOME,
        "manobrabilidade", 
        diceResult1,
        character1.MANOBRABILIDADE
        );
       await logRollResult(
        character2.NOME,
        "manobrabilidade", 
        diceResult2,
        character2.MANOBRABILIDADE
        );
    }
    if(block === 'CONFRONTO'){
        let powerResult1 = diceResult1 + character1.PODER;
        let powerResult2 = diceResult2 + character2.PODER;

        console.log(`${character1.NOME} confrontou ${character2.NOME}!🥊`)

         await logRollResult(
        character1.NOME,
        "poder", 
        diceResult1,
        character1.PODER
        );
       await logRollResult(
        character2.NOME,
        "poder", 
        diceResult2,
        character2.PODER
        );

        // if combinado com logica
        if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
            console.log(`${character1.NOME} venceu o confronto! ${character2.NOME} Perdeu 1 ponto!`)
            character2.PONTOS--;
        }
        if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
            console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} Perdeu 1 ponto!`)
            character1.PONTOS--;
        }

        // if ternario
        //character1.PONTOS -= powerResult2 > powerResult1 && powerResult1 > 0 ? 1 : 0;

        // If "normal"
        if (powerResult2 === powerResult1){
            console.log("Confronto empatado! Nenhum ponto foi perdido.")
        }
        
     }
    
     // verificando o vencedor 
     if(totalTesteSkill1 > totalTesteSkill2) {
        console.log(`${character1.NOME} Marcou um ponto!`)
        character1.PONTOS++;
     } else if (totalTesteSkill2 > totalTesteSkill1) {
        console.log(`${character2.NOME} marcou um ponto!`);
        character2.PONTOS++;
     }



     console.log('--------------------------------------')
    }

}

 async function declareWinner(character1,character2) {
    console.log('resultado final:')
    console.log(`${character1.NOME} : ${character1.PONTOS} pontos(s)`)
    console.log(`${character2.NOME} : ${character2.PONTOS} pontos(s)`)
    
    if(character1.PONTOS > character2.PONTOS) {
        console.log(`\n${character1.NOME} venceu a corrida! Parabéns!`)
    } else if(character2.PONTOS > character1.PONTOS){
     console.log(`\n${character2.NOME} venceu a corrida! Parabéns!`)
    } else {
        console.log(" A corrida terminou em empate.")
    }
 }
// primeira função indicando os jogadores
(async function main() {
    console.log(
        `🏁🚨 Corrida entre o ${player1.NOME} e o ${player2.NOME} começando... \n`
    );
    
    await playRaceEngine(player1,player2);
    await declareWinner(player1, player2);
})();

 