 import qr from "qrcode-terminal"
import chalk from "chalk"; 


 async function handle(err, result) {
    if (err){
        console.log('erro on apllication')
        return;
    }

    const isSmall = result.type == 2

    qr.generate(result.link,{ small: isSmall }, (qrcode)=>{
        console.log( chalk.green ("Qr code gerado com sucesso!"))
        console.log(qrcode);
    })
}

export default handle