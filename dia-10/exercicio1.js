/*
Crie um algoritmo que receba um número inteiro positivo e um array. Popule o array e no final 
exiba os índices em que número inserido aparece nesse array. Para testes do exercício use 
até 10 elementos no array.
*/

let n = Number(prompt('Digite um número'));

let vetor = [];
let acumuladora = [];
let indice = 0;

for (let contador = 0; contador < 10; contador++) 
{
    let inserir = Number(prompt('Preciso de 10 números, estamos no ' + (contador + 1) + 'º de 10 números.\nDigite o ' + (contador + 1) + ' º número: '));
    vetor[contador] = inserir; // vetor posição 0 = 10, vetor posição 1 = 11 <vetor[10, 11]>
}

for (let c = 0; c < 10; c++) 
{
    if (vetor[c] === n)
    {
        acumuladora[indice] = c;
        indice++;
    }
}

if (acumuladora.length != 0) 
{
    console.log('O número ' + n + ' se repete: ' + indice + 'vez(es);');
} 
else 
{
    console.log('O número ' + n + ' não se repete na array'); 
}
