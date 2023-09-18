/*
Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, 
e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:


 - A média geral dos alunos
 - Quantos homens enviaram as notas
 - Quantas mulheres tiveram nota acima de 7
 - Qual a maior nota entre os homens
    

    *Obs.: para obter a média geral deve somar todas as notas e 

    dividir pelo número de alunos!
*/

let contadorMasculino = 0;
let contadorFeminino = 0;
let soma = 0;
let qntdeAlunos = 0;
let acimaSete = 0;
let maiorNota = 0;
let continuar = true;
let media = 0;

while (true) 
{
    let nota = parseFloat(prompt('Digite a nota (XX.XX): ')); //5 //10
    let sexo = prompt('Digite o sexo [M/F]: ');

    sexo = sexo.toLowerCase();
    

    if (sexo === 'm')
    {
        contadorMasculino += 1;
    }
    else
    {
        contadorFeminino += 1;
    }

    if (sexo === 'm') 
    {
        if (nota > maiorNota)
        {
            maiorNota = nota;
        }
    }

    soma = soma + nota;

    if (nota > 7 && contadorFeminino > 0)
    {
        acimaSete += 1;
    }

    qntdeAlunos += 1;

    media = soma / qntdeAlunos;

    continuar = prompt('Quer adicionar mais notas? [S/N]: ');
    if (continuar === 'n')
    {
        break;
    }
}

console.log('Média Geral: ' + media);
console.log('Quantidade de homens que enviaram notas: ', contadorMasculino);
console.log('Quantidade mulheres com nota acima de 7: ', acimaSete);
console.log('Maior nota entre os homens: ', maiorNota);
