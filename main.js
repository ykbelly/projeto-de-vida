<script src="main.js"></script>

const botoes = document.querySelectorAll(".botao");
console.log(botoes);

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
  };
}

for ([inicialização]; [condição]; [incremento]) {
    declaração;
  }

  for (var i = 1; i <= 5; i++) {
    console.log(i);
  }

  for (var i = 0; i <= 10; i += 2) {
    console.log(i);
  }

  var frutas = ["Maçã", "Banana", "Laranja", "Pera"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}