const prompt = require('prompt-sync')({ sigint: true });

// Versão 2: Número randômico
function jogoAdivinhacaoRandomico() {
    const numeroSecreto = Math.floor(Math.random() * 11); // Número aleatório entre 0 e 10
    let tentativasRestantes = 3;

    console.log("Bem-vindo ao jogo de adivinhação!");
    console.log("Tente adivinhar o número que estou pensando (entre 0 e 10).");

    while (tentativasRestantes > 0) {
        let chute = parseInt(prompt(`Tentativa #${4 - tentativasRestantes}: Qual é o seu chute?`));

        // Validar se o chute é um número e está dentro do intervalo
        if (isNaN(chute) || chute < 0 || chute > 10) {
            console.log("Por favor, insira um número válido entre 0 e 10.");
            continue; // Volta para o início do loop sem diminuir as tentativas
        }

        if (chute === numeroSecreto) {
            console.log("Parabéns! Você acertou!");
            return; // Sai da função, o jogo acabou
        } else {
            tentativasRestantes--;
            console.log(`Você errou. Tentativas restantes: ${tentativasRestantes}`);
        }
    }

    console.log(`Você não conseguiu adivinhar. O número era ${numeroSecreto}.`);
}

jogoAdivinhacaoRandomico();
