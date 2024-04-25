// 2. Crie uma função que receba uma lista de objetos contendo nota e
// peso, realize a média das notas considerando o peso. Exemplos:
// Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
// Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado

interface NotaPeso {
  nota: number;
  peso: number;
}

const notas: NotaPeso[] = [
  {nota: 3, peso: 2},
  {nota: 5, peso: 2},
];

function fazerMedia(notas: NotaPeso[]) {
  let calculosNotas: number = 0;
  let qtdNotas: number = 0;

  notas.forEach((aluno) => {
    calculosNotas += aluno.nota * aluno.peso;
    qtdNotas++;
  });

  const mediaFinal = calculosNotas / qtdNotas;
  console.log(mediaFinal);
}
fazerMedia(notas);
