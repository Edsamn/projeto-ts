// 4. Crie um programa para cadastrar, listar e excluir produtos de uma
// lista com tipagem de Produto.
const produtos: Produto[] = [];

interface Produto {
  name: string;
  valor: number;
  cor: string;
}

const produto1: Produto = {
  name: "caderno",
  valor: 5,
  cor: "azul",
};

function addProduto(produto: Produto) {
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

function removeProduto(produto: Produto) {
  const index = produtos.indexOf(produto);
  if (index !== -1) {
    produtos.splice(index, 1);
  }
}
removeProduto(produto1);
console.log(produtos);
