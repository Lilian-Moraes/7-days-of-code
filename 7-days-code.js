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