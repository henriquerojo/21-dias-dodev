// criando um array de nomes, no js não precisa definir o tamanho do array

let nome = ['Giovanni', 'Eric', 'Lucas'];

nome[0]; // solicitando índice 0 do array

nome[3] = 'Bruno'; // definindo novo valor na posição 3 do array

// também é possível criar um array vazio

let vazio = [];

// assim, da pra atribuir valores nesse array também

vazio[0] = 'Gabriel';

// é possível também deixar uma posição do array vazia

vazio[2] = 'Miranda' // inseri um valor na posição 2 do array

// se digitar console.log(vazio[]); ele vai retornar = 'Gabriel', empty, 'Miranda' porque a posição 1 não foi inserida nenhum valor, então ela esta vazia

// no javascript é possível colocar multiplos tipos de valores no array

vazio[1] = 1; // repare que inseri um valor do tipo number na posição 1 do array vazio, mesmo os outros valores sendo do tipo string

// o recomendado é armazenar sempre o mesmo tipo de valor no array e sem espaços vazios

let nomes = [];
let continuar = true;
let contador = 0;

while (continuar) 
{
    let nomeInserido = prompt('Insira um nome: ');
    nomes[contador] = nomeInserido;
    let desejaContinuar = prompt('[S/N]');
    if (desejaContinuar === 'N')
    {
        continuar = false;
        continue; //vai verificar a condição do while
    }
    contador ++;
}
