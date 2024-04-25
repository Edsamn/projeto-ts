// 5. Crie um programa para mostrar informações de usuários (User) de
// uma empresa. Crie o tipo User com as seguintes propriedades:
// nome, idade, ocupação e salário (opcional). Caso o salário do
// usuário não seja informado, mostre o valor “N/A”. Exemplo:
// a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
// b. “Daphne, 23 anos, analista de TI, salário N/A”
type User = {
  nome: string;
  idade: number;
  ocupacao: string;
  salario: number | undefined;
};

const users: User[] = [];

const user1: User = {
  nome: "Eduardo",
  idade: 32,
  ocupacao: "estudante",
  salario: undefined,
};

const user2: User = {
  nome: "Frajola",
  idade: 10,
  ocupacao: "gato",
  salario: undefined,
};

const user3: User = {
  nome: "Jair",
  idade: 61,
  ocupacao: "vendedor autônomo",
  salario: 600,
};

function addUser(user: User) {
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
    } else {
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
