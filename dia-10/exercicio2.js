/*
Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, 
depois exiba esse array. Modifique os elementos do array de modo que a sequência de números 
fique ao contrário.


Ex.: entrada: 1, 2, 3, 4, 5 -> saída: 5, 4, 3, 2 , 1
*/

let array = [];

for (let contador = 0; contador < 5; contador++) 
{
    let inserir = prompt('Digite o ' + (contador + 1) + 'º número: ');
    array[contador] = inserir;
}

for (let c = 4; c >= 0; c--) 
{
    console.log(array[c]);
}
