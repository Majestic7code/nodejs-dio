import prompt from "prompt"
import promptQrcode from "../../prompts/prompt-qrcode.js"
import handle from "./handle.js"

async function createQRcode() {
    prompt.get(promptQrcode, handle)

    prompt.start()
}

export default createQRcode