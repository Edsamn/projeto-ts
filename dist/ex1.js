"use strict";
// 1. Crie uma função que receba 2 números e retorne um objeto
// contendo a média e também um indicador booleano de
// aprovado/reprovado. Considere aprovado com média >= 6.
function media(num1, num2) {
    const media = (num1 + num2) / 2;
    const aprovado = media >= 6;
    return {
        media,
        aprovado,
    };
}
console.log(media(3, 7));
