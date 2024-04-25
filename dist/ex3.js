"use strict";
// 3. Crie um programa que simule uma carteira de dinheiro. Este
// programa vai precisar ter uma carteira contendo saldo, transações
// de entrada e saídas. Ou seja, será um objeto com estas
// propriedades. Depois crie uma função para lançar uma entrada e
// uma saída. Caso ao lançar uma saída e não tiver saldo, precisa dar
// um erro ou avisar.
let saldoAtual = 0;
let transacao;
const transacoes = [];
function depositar(saldo) {
    saldoAtual += saldo;
    transacao = true;
    transacoes.push({ saldo, transacao: `${transacao ? "Deposito" : "Saque"}` });
}
function sacar(saldo) {
    if (saldo > saldoAtual) {
        console.log("Saldo insuficiente.");
        return;
    }
    saldoAtual -= saldo;
    transacao = false;
    transacoes.push({ saldo, transacao: `${transacao ? "Deposito" : "Saque"}` });
}
depositar(2000);
console.log(`Depositar: ${saldoAtual}`);
sacar(1000);
console.log(`Sacar: ${saldoAtual}`);
console.log(transacoes);
