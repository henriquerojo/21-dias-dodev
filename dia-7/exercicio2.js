/*
Solicite o nome e o cpf do seu cliente.
Pergunte um valor.
Ofereça a opção de saque ou depósito.
Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
Exiba o saldo total.
Exiba o maior valor inserido(independente de ser depósito ou saque).
Exiba a média dos valores inseridos(independente de ser depósito ou saque).


REGRAS: 
    1- Considere iniciar a variável saldo com algum valor

    1- Não deve ser permitido sacar um valor não disponível no saldo.

    2- Não deve ser permitido sacar nem depositar um valor negativo.
*/

let saldo = 100;
let continuar = true;
let maiorValor = 0;
let somaValor = 0;
let contador = 0;


do 
{
    const nome = prompt('Digite seu nome: ');
    const cpf = prompt('Digite seu CPF: ');
    const valor = parseFloat(prompt('Digite o valor: '));
    let opcao = prompt('Saque ou Deposito [S/D]? ');

    while (valor > saldo && opcao == 's' || valor < 0) 
    {
        opcao = prompt('Saque ou Deposito [S/D]? ');
    }

    if (valor > maiorValor)
    {
        maiorValor = valor;
    }

    if (opcao === 's')
    {
        saldo -= valor;
    }

    else 
    {
        saldo += valor;
    }

    contador ++;

    somaValor += valor;
    mediaValor = somaValor / contador;

    continuar = prompt('Quer continuar? 1 para SIM 2 para NÃO: ');

    if (continuar === '2')
    {
        continuar = false;
    }

} while (continuar);

console.log('Saldo Total: ', saldo);
console.log('Maior valor: ', maiorValor);
console.log('Valor Médio: ', mediaValor);