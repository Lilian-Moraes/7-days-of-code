const prompt = require('prompt-sync')({ sigint: true }); // Importa o módulo para receber inputs do usuário

let listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: [] // Adicionada categoria "Outros" para itens que não se encaixam nas categorias predefinidas
};

function adicionarItem() {
    let resposta = prompt("Deseja adicionar uma comida na sua lista de compras? (sim/não): ");

    if (resposta.toLowerCase() === "sim") {
        let comida = prompt("Qual comida você deseja inserir? ");
        let categoria = prompt("Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros): ");

        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase(); // Padroniza a categoria (primeira letra maiúscula)

        if (listaDeCompras.hasOwnProperty(categoria)) { // Verifica se a categoria existe
            listaDeCompras[categoria].push(comida);
        } else {
            console.log("Categoria inválida. Adicionando em 'Outros'.");
            listaDeCompras["Outros"].push(comida);
        }
        adicionarItem(); // Chama a função novamente para adicionar mais itens
    } else if (resposta.toLowerCase() === "não") {
        exibirLista();
    } else {
        console.log("Resposta inválida. Por favor, responda com 'sim' ou 'não'.");
        adicionarItem(); // Chama a função novamente para perguntar ao usuário
    }
}

function exibirLista() {
    console.log("\nLista de compras:");
    for (let categoria in listaDeCompras) {
        if (listaDeCompras.hasOwnProperty(categoria)) {
            let itens = listaDeCompras[categoria];
            if (itens.length > 0) {
                console.log(`    ${categoria}: ${itens.join(", ")}`);
            } else {
                console.log(`    ${categoria}:`); // Exibe a categoria mesmo que esteja vazia
            }
        }
    }
}

// Inicia o processo de adicionar itens à lista
adicionarItem();