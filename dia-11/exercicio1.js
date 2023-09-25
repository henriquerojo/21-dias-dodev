/*
1 - Crie um array para receber os nomes dos alunos e outro para receber as notas;


2 - Para cada aluno inserido pergunte o nome e a nota da prova;


3 - Seu usuário deve ter a opção de parar de inserir informações quando desejar;


4 - No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. 
Para calcular a média deve dividir a soma das notas pelo total de alunos.
*/

let continuar = true;
let nomes = [];
let notas = [];
let soma = 0.0;
let mediaGeral = 0.0;
let contador = 1

do 
{
    nomes[contador - 1] = prompt('Digite o nome do ' + (contador) + 'º aluno: ');

    notas[contador - 1] = Number(prompt('Digite a nota do ' + (contador) + 'º aluno: '));
    
    let pergunta = prompt ('Quer continuar? [S|N]: ');
    pergunta = pergunta.toUpperCase();
    while (pergunta != 'S' && pergunta != 'N')
    {
        pergunta = prompt('Por favor digite "S para SIM ou "N" para NÃO\nQuer continuar? [S|N]: "');
        pergunta = pergunta.toUpperCase();
    }
    if (pergunta === 'S')
    {
        continuar = true;
    }
    else
    {
        continuar = false;
    }

    contador++;

} while (continuar);



for (let c = 0; c < notas.length; c++) 
{
    soma += notas[c];
    console.log('Aluno: ' + nomes[c] + ' Nota: ' + notas[c]);
}

mediaGeral = soma / notas.length

console.log('A soma das notas de todos os alunos é: ' + soma);
console.log('A média geral das notas de todos os alunos é: ' + mediaGeral);
