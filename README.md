# 7-days-of-code

## Day one
### Javascript é a operação de igualdade entre valores

```
Aqui está o código corrigido, com explicações:
 let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

// Comparando valor e tipo
if (numeroUm == stringUm) { // == compara apenas o valor, ignorando o tipo.
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor');
}

// Comparando valor e tipo
if (numeroTrinta === stringTrinta) { // === compara valor E tipo.
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo');
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo');
}

// Comparando valor e tipo
if (numeroDez == stringDez) { // == compara apenas o valor, ignorando o tipo.
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes');
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor');
}
```
## Day 2
###  Capturar e armazenar valores dentro de variáveis

```
HTML (index.html):
<!DOCTYPE html>
<html>
<head>
<title>Formulário de Informações</title>
</head>
<body>

<h1>Informe suas informações</h1>

<form id="meuFormulario">
  <label for="nome">Nome:</label><br>
  <input type="text" id="nome" name="nome"><br>
  <label for="idade">Idade:</label><br>
  <input type="number" id="idade" name="idade" min="0"><br>
  <label for="linguagem">Linguagem de Programação:</label><br>
  <input type="text" id="linguagem" name="linguagem"><br>
  <label for="gosta">Você gosta de estudar <span id="linguagem-display"></span>? </label><br>
  <select id="gosta" name="gosta">
      <option value="1">SIM</option>
      <option value="2">NÃO</option>
  </select><br><br>
  <input type="button" value="Enviar" onclick="enviarDados()">
</form>

<div id="resultado"></div>

<script src="script.js"></script> 
</body>
</html>

JavaScript (script.js):
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
```