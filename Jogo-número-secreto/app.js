alert("boas vindas");
//115 .... 42 --- 73
//0 .. 1
//42...115
//
let numeroMaximo = 5000;
//let numeroSecreto = parseInt(Math.random()*73)+42;
let numeroSecreto = parseInt(Math.random()*numeroMaximo+1);
let chute;
console.log(numeroSecreto);
let qtdechutes = 1;

while (numeroSecreto != chute) {
  chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
  if (chute == numeroSecreto) {
    break;
  } else {
    if (numeroSecreto > chute) {
      alert(`numero secreto é maior que ${chute}`);
    } else {
      alert(`numero secreto é menor que ${chute}`);
    }
  }
  qtdechutes++;
}

let palavraChute = qtdechutes>1 ? 'chutes':'chute';

alert(`certo, desobriu o numero é: ${numeroSecreto}, você acertou com ${qtdechutes} ${palavraChute}`);
