"use strict";
const peoples = [];
const people1 = {
    nome: "Frajola",
    idade: 10,
    ocupacao: "gato",
    salario: undefined,
};
const people2 = {
    nome: "Eduardo",
    idade: 32,
    salario: 12000,
    nivelComissao: 5,
};
function addPeople(people) {
    peoples.push(people);
}
addPeople(people1);
addPeople(people2);
console.log(peoples);
// function listPeople() {
//   peoples.forEach((people) => {
//     if () {
//       console.log(`
//           Nome: ${people.nome},
//           Idade: ${people.idade},
//           Comissão: Nível${people.nivelComissao}
//           Salário: N/A
//           `);
//     } else {
//       console.log(`
//           Nome: ${people.nome},
//           Idade: ${people.idade},
//           Comissão: Nível ${people.nivelComissao}
//           Salário: R$${people.salario}
//           `);
//     }
//   });
// }
// listPeople();
