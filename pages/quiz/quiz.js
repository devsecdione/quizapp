import { verificarTema, trocarTema } from "../../helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

let tema = verificarTema(body, botaoTema)

botaoTema.addEventListener("click", () => {
    tema = trocarTema(body, botaoTema)
})
