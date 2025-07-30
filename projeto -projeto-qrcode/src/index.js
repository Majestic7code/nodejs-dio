import prompt from "prompt"
import creatQRcode from "./services/qr-code/create.js"
import createPassaword from "./services/password/create.js"

import mainPrompt from "./prompts/prompt-main.js"

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select ==1) await creatQRcode()
        if (choose.select ==2) await createPassaword()
    }) 
    prompt.start()
}

main()