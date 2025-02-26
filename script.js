function enviarDados() {
  let nome = document.getElementById("nome").value;
  let idade = parseInt(document.getElementById("idade").value);
  let linguagem = document.getElementById("linguagem").value;
  let gosta = parseInt(document.getElementById("gosta").value);
  let resultado = document.getElementById("resultado");
  let linguagemDisplay = document.getElementById("linguagem-display");

  linguagemDisplay.textContent = linguagem; // Atualiza o texto da pergunta

  if (isNaN(idade) || idade <= 0) {
    resultado.innerHTML = "Idade inválida. Por favor, insira um número inteiro positivo.";
  } else {
    resultado.innerHTML = `Olá, ${nome}! Você tem ${idade} anos e está estudando ${linguagem}.`;
    if (gosta === 1) {
      resultado.innerHTML += "<br>Muito bom! Continue estudando e você terá muito sucesso.";
    } else {
      resultado.innerHTML += "<br>Ahh que pena... Já tentou aprender outras linguagens?";
    }
  }
}