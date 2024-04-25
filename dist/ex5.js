"use strict";
const users = [];
const user1 = {
    nome: "Eduardo",
    idade: 32,
    ocupacao: "estudante",
    salario: undefined,
};
const user2 = {
    nome: "Frajola",
    idade: 10,
    ocupacao: "gato",
    salario: undefined,
};
const user3 = {
    nome: "Jair",
    idade: 61,
    ocupacao: "vendedor autônomo",
    salario: 600,
};
function addUser(user) {
    users.push(user);
}
addUser(user1);
addUser(user2);
addUser(user3);
function listUsers() {
    users.forEach((user) => {
        if (user.salario === undefined) {
            console.log(`
      Nome: ${user.nome},
      Idade: ${user.idade},
      Ocupação: ${user.ocupacao},
      Salário: N/A
      `);
        }
        else {
            console.log(`
      Nome: ${user.nome},
      Idade: ${user.idade},
      Ocupação: ${user.ocupacao},
      Salário: R$${user.salario}
      `);
        }
    });
}
listUsers();
