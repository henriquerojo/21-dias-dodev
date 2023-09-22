/*

Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.



1 - Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela.


2 - Peça para que seu cliente confirme as informações, se ele informar que digitou errado, peça para colocar TODAS as informações 
novamente, repita as perguntas até o usuário informar que digitou as informações corretamente.


3 - Faça a previsão do salário dele para os próximos 10 anos considerando que:


     - O cliente recebe anualmente aumento salarial. 

     - Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; A partir do segundo ano, os aumentos 
     salariais sempre corresponderam ao dobro do percentual do ano anterior. Apresente todos os valores com o ano correspondente. 
     Ex: 2024 - R$1600.

*/

let nomeCliente = 0;
let idadeCliente = 0;
let salarioCliente = 0.00;
let taxa = 1.5

let confirmar = 'N';
while (confirmar === 'N') 
{
    nomeCliente = prompt('Digite seu nome: ');
    idadeCliente = parseInt(prompt('Digite sua idade: '));
    salarioCliente = parseFloat(prompt('Digite seu salário: '));
    
    confirmar = prompt('Você confirma as informações?\nNome: ' + nomeCliente + ' Idade: ' + idadeCliente + ' Salário: ' + salarioCliente + ' [S/N]: ');
    if (confirmar === 'S') 
    {
        break
    }
}
console.log('Eis aqui uma simulação do seu aumento salarial em 10 anos, considerando que no primeiro ano o aumento será de 1.5% e nos próximos anos o dobro do aumento do ano anterior. ');

for (let contador = 0; contador < 10; contador++) 
{
    let aumento = (salarioCliente * taxa) / 100 + salarioCliente;
    console.log(2023 + (contador + 1) + ' - ' + aumento);
    taxa = taxa * 2;
}
