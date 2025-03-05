let listaSorteados = [];
function gerarNumAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * 9 + 1);
  let tam = listaSorteados.length;
  if (tam == 10) {
    listaSorteados = [];
  }
  if (listaSorteados.includes(numeroEscolhido)) {
    return gerarNumAleatorio();
  } else {
    listaSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}
function LimparInput() {
  let input = document.querySelector("input");
  input.value = "";
}

function handleEnter(evento) {
  if (evento.keyCode == 13) {
    verificarChute();
  }
  
}
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  let synth = window.speechSynthesis;
  console.log(synth.getVoices());
  campo.innerHTML = texto;
  //responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
  if ("speechSynthesis" in window) {
    let utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = "pt-BR";
    utterance.rate = 2;
    window.speechSynthesis.speak(utterance);
  } else {
    console.log("Web Speech API não suportada neste navegador.");
  }
}

function exibirTextoNaTelaPorID(ID, texto) {
  let elemento = document.getElementById(ID);
  elemento.innerHTML = texto;
}

function reiniciarJogo() {
  NumeroAleatorio = gerarNumAleatorio();
  tentativas = 1;
  exibirMensagemInicial();
  LimparInput();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
  exibirTextoNaTelaPorID("contador", "0");
}

function verificarChute() {
  let chute = parseInt(document.querySelector("input").value);
  exibirTextoNaTelaPorID("contador", tentativas);

  if (chute == NumeroAleatorio) {
    exibirTextoNaTela("h1", "Acertou!!");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    exibirTextoNaTela(
      "p",
      `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > NumeroAleatorio) {
      exibirTextoNaTela("p", "o número secreto é menor");
    } else {
      exibirTextoNaTela("p", "o número secreto é maior");
    }
    LimparInput();
  }
  tentativas++;
}

let NumeroAleatorio = gerarNumAleatorio();
let tentativas = 1;
exibirMensagemInicial();


// vercel.com
