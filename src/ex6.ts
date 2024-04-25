// 6. Usando o contexto do exercício 6, crie um tipo de usuário que
// representa funcionários da diretoria da empresa. O tipo Diretor deve
// conter as propriedades: nome, idade, salário (opcional) e nível de
// comissionamento (numérico). Crie uma função que receba um
// Diretor e mostre suas informações. Exemplos:
// a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
// b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
type Diretor = {
  nome: string;
  idade: number;
  salario: number | undefined;
  nivelComissao: number;
};

const diretores: Diretor[] = [];

const diretor1: Diretor = {
  nome: "Eduardo",
  idade: 32,
  salario: 12000,
  nivelComissao: 5,
};

const diretor2: Diretor = {
  nome: "Frajola",
  idade: 10,
  salario: 7000,
  nivelComissao: 3,
};

function addDiretor(diretor: Diretor) {
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
    } else {
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
