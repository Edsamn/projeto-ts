// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.
type People = User | Diretor;

const peoples: People[] = [];

const people1: People = {
  nome: "Frajola",
  idade: 10,
  ocupacao: "gato",
  salario: undefined,
};

const people2: People = {
  nome: "Eduardo",
  idade: 32,
  salario: 12000,
  nivelComissao: 5,
};

function addPeople(people: People) {
  peoples.push(people);
}
addPeople(people1);
addPeople(people2);

// function listPeople(people: People) {
//     peoples.find(people => {people.ocupacao})
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
