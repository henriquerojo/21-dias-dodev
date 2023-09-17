/*

Exercício 1 - Calculadora DEV

Crie um algoritmo que peça 2 números ao usuário

Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números

Exiba no console a operação feita e o resultado da conta

*/

let numeroUm = Number(prompt("Digite um número: "));
let numeroDois = Number(prompt("Digite outro número: "));
let operacao = prompt("Digite qual operação matemática quer realizar: ");

switch (operacao) 
{
    case "adicao":
        adicao = numeroUm + numeroDois;
        console.log('A soma de', numeroUm," +", numeroDois," é: ", adicao);
        break;
    case "subtracao":
        subtracao = numeroUm - numeroDois;  
        console.log('A subtração de', numeroUm," -", numeroDois," é: ", subtracao);
        break;
    case "divisao":
        divisao = numeroUm / numeroDois;
        console.log('A divisão de', numeroUm," /", numeroDois," é: ", divisao);
        break;
    case "multiplicacao":
        multiplicacao = numeroUm * numeroDois;
        console.log('A multiplicacao de', numeroUm," *", numeroDois," é: ", multiplicacao);
        break;      
    default:
        console.log("Operação matemática inválida!")
        break;
}