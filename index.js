var setaDireita = window.document.getElementById("seta-direita");
var Bruna = window.document.getElementById("cardBruna");
var Leonardo = window.document.getElementById("cardLeonardo");
var Samantha = window.document.getElementById("cardSamantha");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function RolarParaDireita() {
  Bruna.style.display = "none";
  Samantha.style.display = "flex";
  Leonardo.style.display = "flex";
  setaDireita.style.display = "none";
  setaEsquerda.style.display = "flex";
}

function RolarParaEsquerda() {
  Bruna.style.display = "flex";
  Samantha.style.display = "none";
  setaDireita.style.display = "flex";
  setaEsquerda.style.display = "none";
}
