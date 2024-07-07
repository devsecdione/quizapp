import { trocarTema, verificarTema } from "./helpers/tema-helper.js";

const botaoTema = document.querySelector(".tema button");
const body = document.querySelector("body");

let tema = verificarTema(body, botaoTema);

botaoTema.addEventListener("click", () => {
    tema = trocarTema(body, botaoTema);
});

const botoesAssunto = document.querySelectorAll(".assuntos button");
botoesAssunto.forEach(botao => {
  botao.addEventListener("click", selecionarAssunto);
});

function selecionarAssunto(evento) {
  const botaoClicado = evento.currentTarget;
  const assunto = botaoClicado.innerText.trim();
  console.log("Assunto selecionado:", assunto); // Log para depuração
  localStorage.setItem("assunto", assunto);
  window.location.href = "./pages/quiz/quiz.html"; // Caminho para o arquivo quiz.html
}

