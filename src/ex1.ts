// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.

interface Media {
  media: number;
  aprovado: boolean;
}

function media(num1: number, num2: number): Media {
  const media: number = (num1 + num2) / 2;

  const aprovado: boolean = media >= 6;

  return {
    media,
    aprovado,
  };
}

console.log(media(3, 7));
