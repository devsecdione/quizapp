import { trocarTema, verificarTema } from "./helpers/tema-helper.js"

const botaoTema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaoTema.addEventListener("click", () => {
    tema = trocarTema(body, botaoTema)
})

tema = verificarTema(body, botaoTema)
