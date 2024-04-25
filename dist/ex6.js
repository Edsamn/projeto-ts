"use strict";
const diretores = [];
const diretor1 = {
    nome: "Eduardo",
    idade: 32,
    salario: 12000,
    nivelComissao: 5,
};
const diretor2 = {
    nome: "Frajola",
    idade: 10,
    salario: 7000,
    nivelComissao: 3,
};
function addDiretor(diretor) {
    diretores.push(diretor);
}
addDiretor(diretor1);
addDiretor(diretor2);
function listDiretores() {
    diretores.forEach((diretor) => {
        if (diretor.salario === undefined) {
            console.log(`
        Nome: ${diretor.nome},
        Idade: ${diretor.idade},
        Comissão: Nível${diretor.nivelComissao}
        Salário: N/A
        `);
        }
        else {
            console.log(`
        Nome: ${diretor.nome},
        Idade: ${diretor.idade},
        Comissão: Nível ${diretor.nivelComissao}
        Salário: R$${diretor.salario}
        `);
        }
    });
}
listDiretores();
