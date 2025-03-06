const prompt = require('prompt-sync')({ sigint: true });

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Erro! Divisão por zero.";
    }
    return a / b;
}

function calculadora() {
    while (true) {
        console.log("\nEscolha a operação:");
        console.log("1. Soma");
        console.log("2. Subtração");
        console.log("3. Multiplicação");
        console.log("4. Divisão");
        console.log("5. Sair");

        let escolha = prompt("Digite o número da operação desejada: ");

        if (escolha === "5") {
            console.log("Até a próxima!");
            break; // Sai do loop e encerra o programa
        }

        if (escolha < "1" || escolha > "5") {
            console.log("Opção inválida. Tente novamente.");
            continue; // Volta para o início do loop
        }

        let num1 = parseFloat(prompt("Digite o primeiro número: "));
        let num2 = parseFloat(prompt("Digite o segundo número: "));

        let resultado;

        switch (escolha) {
            case "1":
                resultado = somar(num1, num2);
                console.log("Resultado: " + resultado);
                break;
            case "2":
                resultado = subtrair(num1, num2);
                console.log("Resultado: " + resultado);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                console.log("Resultado: " + resultado);
                break;
            case "4":
                resultado = dividir(num1, num2);
                console.log("Resultado: " + resultado);
                break;
            default:
                console.log("Opção inválida."); // Isso não deve acontecer, mas é bom ter um caso default.
        }
    }
}

calculadora();