const prompt = require('prompt-sync')({ sigint: true });

let listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: [],
    Outros: []
};

function adicionarItem() {
    let escolha = "";

    if (temItensNaLista()) {
        escolha = prompt("Deseja adicionar (a), remover (r) ou sair (s) da lista de compras? (a/r/s): ");
    } else {
        escolha = prompt("Deseja adicionar (a) ou sair (s) da lista de compras? (a/s): ");
    }

    if (escolha.toLowerCase() === "a") {
        let comida = prompt("Qual comida você deseja inserir? ");
        let categoria = prompt("Em qual categoria essa comida se encaixa? (Frutas, Laticínios, Congelados, Doces, Outros): ");

        categoria = categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase();

        if (listaDeCompras.hasOwnProperty(categoria)) {
            listaDeCompras[categoria].push(comida);
        } else {
            console.log("Categoria inválida. Adicionando em 'Outros'.");
            listaDeCompras["Outros"].push(comida);
        }
        adicionarItem();
    } else if (escolha.toLowerCase() === "r" && temItensNaLista()) {
        removerItem();
    } else if (escolha.toLowerCase() === "s") {
        exibirLista();
    } else {
        console.log("Resposta inválida.");
        adicionarItem();
    }
}

function removerItem() {
    exibirLista(); // Mostra a lista para o usuário saber o que remover

    let itemParaRemover = prompt("Qual item você deseja remover? ");
    let itemRemovido = false;

    for (let categoria in listaDeCompras) {
        let index = listaDeCompras[categoria].indexOf(itemParaRemover);
        if (index > -1) {
            listaDeCompras[categoria].splice(index, 1); // Remove o item do array
            console.log(`"${itemParaRemover}" removido da categoria ${categoria}.`);
            itemRemovido = true;
            break; // Sai do loop assim que encontrar e remover o item
        }
    }

    if (!itemRemovido) {
        console.log("Não foi possível encontrar o item dentro da lista!");
    }

    adicionarItem(); // Volta para o ciclo principal
}

function exibirLista() {
    console.log("\nLista de compras:");
    for (let categoria in listaDeCompras) {
        if (listaDeCompras.hasOwnProperty(categoria)) {
            let itens = listaDeCompras[categoria];
            if (itens.length > 0) {
                console.log(`    ${categoria}: ${itens.join(", ")}`);
            } else {
                console.log(`    ${categoria}:`);
            }
        }
    }
}

function temItensNaLista() {
    for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            return true;
        }
    }
    return false;
}

adicionarItem();