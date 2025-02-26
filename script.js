function enviarDados() {
  let nome = document.getElementById("nome").value;
  let idade = parseInt(document.getElementById("idade").value);
  let linguagem = document.getElementById("linguagem").value;
  let resultado = document.getElementById("resultado");

  if (isNaN(idade) || idade <= 0) {
    resultado.innerHTML = "Idade inválida. Por favor, insira um número inteiro positivo.";
  } else {
    resultado.innerHTML = `Olá, ${nome}! Você tem ${idade} anos e está estudando ${linguagem}.`;
  }
}