let titulo = document.querySelector("h1");

titulo.innerHTML = "Hora do Desafio";

function verificarClique() {
  console.log("o botão foi clicado");
}

function alertAmoJS() {
  alert("Eu amo JS");
}

function alertCidade() {
  let cidade = prompt("Cite uma cidade que você já visitou");

  alert(`estive em ${cidade} e lembrei de você`);
}

function alertSoma() {
  let num1 = parseInt(prompt("digite um número"));
  let num2 = parseInt(prompt("dgite um segundo número"));

  alert(`a soma é: ${num1 + num2} `);
}
