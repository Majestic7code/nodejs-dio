import chalk from "chalk"

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE ( 2- PASSWORD"),
        pattern: /^^[1-2]+$/,
        message: chalk.red( "Escolha apenas 1 e 2"),
        required: true,
    },
]

export default mainPrompt