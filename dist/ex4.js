"use strict";
// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.
const produtos = [];
const produto1 = {
    name: "caderno",
    valor: 5,
    cor: "azul",
};
function addProduto(produto) {
    produtos.push(produto);
}
addProduto(produto1);
function listProdutos() {
    produtos.forEach((produto) => {
        console.log(`
    Nome: ${produto.name},
    Preço: ${produto.valor},
    Cor: ${produto.cor}
    `);
    });
}
listProdutos();
function removeProduto(produto) {
    const index = produtos.indexOf(produto);
    if (index !== -1) {
        produtos.splice(index, 1);
    }
}
removeProduto(produto1);
console.log(produtos);
