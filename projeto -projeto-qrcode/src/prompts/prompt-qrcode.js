import chalk from "chalk";

const promptQrcode = [
    {
        name: "link",
        description: chalk.yellow("digitie o link para Gerar o qrcode"),
    },
    {
        name: "type",
        description: chalk.yellow("Tipo de QrCode (1- NORMAL (2- TERMINAL "),
        pattern: /^[1-2]+$/ ,
        message: chalk.red.italic("Digite apenas entre 1 ou 2"),
        required: true 
    }
    
]

export default promptQrcode