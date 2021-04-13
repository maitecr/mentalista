var numeroSecreto = parseInt(Math.random() * 11)
var tentativas = 3

function ok() {
  
var campoNumero = document.querySelector("#visor");
var chute = parseInt(campoNumero.value);

  if (tentativas !== 0 && chute == numeroSecreto) {
    document.getElementById("resultado").innerHTML =
      "Acertou!";
    tentativas = 0;
  } else if (tentativas !== 0 && chute > numeroSecreto) {
    document.getElementById("resultado").innerHTML =
      "O número secreto é menor!";
    tentativas = tentativas - 1;
  } else if (tentativas !== 0 && chute < numeroSecreto) {
    document.getElementById("resultado").innerHTML =
      "O número secreto é maior!";
    tentativas = tentativas - 1;
  }

  document.getElementById("chances").innerHTML = tentativas;

  if (chute !== numeroSecreto && tentativas == 0) {
    document.getElementById("resultado").innerHTML =
      "Suas tentativas acabaram. O número secreto era " + numeroSecreto;
  }
}
