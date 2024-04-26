// 7. Crie um tipo que seja composto por um User OU por um Diretor
// usando interseção de tipos. Desenvolva uma função que receba
// uma lista desse novo tipo e, para cada item da lista, imprima:
// a. O mesmo que o exercício 5, em caso de objeto User.
// b. O mesmo que o exercício 6, em caso de objeto Diretor.
type People = User | Diretor;

const peoples: People[] = [
  {
    nome: "Frajola",
    idade: 10,
    ocupacao: "gato",
    salario: undefined,
  },
  {nome: "Eduardo", idade: 32, salario: 12000, nivelComissao: 5},
];

function listPeople(peoples: People[]) {
  peoples.forEach((people) => {
    if ("ocupacao" in people) {
      if (people.salario === undefined) {
        console.log(`
      Nome: ${people.nome},
      Idade: ${people.idade},
      Ocupação: ${people.ocupacao},
      Salário: N/A
      `);
      } else {
        console.log(`
      Nome: ${people.nome},
      Idade: ${people.idade},
      Ocupação: ${people.ocupacao},
      Salário: R$${people.salario}
      `);
      }
    } else if ("nivelComissao" in people) {
      if (people.salario === undefined) {
        console.log(`
          Nome: ${people.nome},
          Idade: ${people.idade},
          Comissão: Nível${people.nivelComissao}
          Salário: N/A
          `);
      } else {
        console.log(`
          Nome: ${people.nome},
          Idade: ${people.idade},
          Comissão: Nível ${people.nivelComissao}
          Salário: R$${people.salario}
          `);
      }
    }
  });
}
