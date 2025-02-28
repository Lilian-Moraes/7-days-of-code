// 1. Escolha da área: Front-End ou Back-End
let area = prompt("Você quer seguir para a área de Front-End ou Back-End?").toLowerCase();

// Validação da escolha inicial
while (area !== "front-end" && area !== "back-end") {
    area = prompt("Opção inválida. Por favor, escolha Front-End ou Back-End:").toLowerCase();
}


// 2. Escolhas dentro de cada área
let tecnologia;

if (area === "front-end") {
    tecnologia = prompt("Você quer aprender React ou Vue?").toLowerCase();
    while (tecnologia !== "react" && tecnologia !== "vue") {
        tecnologia = prompt("Opção inválida. Por favor, escolha React ou Vue:").toLowerCase();
    }
} else { // Back-End
    tecnologia = prompt("Você quer aprender C# ou Java?").toLowerCase();
    while (tecnologia !== "c#" && tecnologia !== "java") {
        tecnologia = prompt("Opção inválida. Por favor, escolha C# ou Java:").toLowerCase();
    }
}

// 3. Escolha de especialização ou Fullstack
let caminho = prompt("Você quer se especializar na área escolhida ou se tornar Fullstack?").toLowerCase();

while (caminho !== "especializar" && caminho !== "fullstack") {
    caminho = prompt("Opção inválida. Por favor, escolha Especializar ou Fullstack:").toLowerCase();
}

if (caminho === "especializar") {
    console.log(`Ótimo! Se especializar em ${area === 'front-end' ? 'Front-End com ' + tecnologia : 'Back-End com ' + tecnologia} é uma excelente escolha para se aprofundar em seus conhecimentos.`);
} else {
    console.log("Que legal! Se tornar Fullstack é um ótimo caminho para ter uma visão completa do desenvolvimento.");
}


// 4. Lista de tecnologias para aprender
let tecnologiasDesejadas = [];
let continuarAprendendo = "ok"; // Inicializa com "ok" para entrar no loop

while (continuarAprendendo === "ok") {
    let tecnologiaAdicional = prompt("Qual tecnologia você gostaria de aprender?");
    tecnologiasDesejadas.push(tecnologiaAdicional);

    // Mensagem sobre a tecnologia inserida (pode ser algo genérico ou específico)
    console.log(`${tecnologiaAdicional}? Ótima escolha!  É uma tecnologia muito interessante.`);

    continuarAprendendo = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (Responda 'ok' para continuar)").toLowerCase();
}

// Exibindo a lista de tecnologias
console.log("Tecnologias que você deseja aprender:");
for (let i = 0; i < tecnologiasDesejadas.length; i++) {
    console.log(`${i + 1}. ${tecnologiasDesejadas[i]}`);
}

console.log("Boa sorte em sua jornada de aprendizado!");