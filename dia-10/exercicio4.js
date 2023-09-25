/*
4 - Crie um algoritmo que peça um número inteiro positivo para o usuário. Em seguida, 
popule um array com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores).
Na hora de somar com os termos anteriores, some com elementos anteriores do array. 
Faça com que o array tenha no máximo 10 elementos
Para iniciar a sequência use o (número inserido - 1).


   Ex.: inseriu o número 8, a sequência deve começar da

        seguinte maneira 7 8 15 23 ...
*/

let num = parseInt(prompt('Digite um número inteiro positivo: '));
let fibonacci = []
while (num < 0)
{
        num = parseInt(prompt('Digite um número inteiro positivo: '));
}

fibonacci = [num - 1, num];

for (let contador = 2; contador < 10; contador++) 
{
        fibonacci[contador] = fibonacci[contador - 2] + fibonacci[contador - 1];
}

console.log(fibonacci);
