/*
4 - Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o 
resultado da sua tabuada e dos próximos 2 números.

   Ex: Números de entrada:3

       Saída:  Número 3:      Número 4:         Número 5:       

               3 x 1 = 3      4 x 1 = 4         5 x 1 = 5

               3 x 2 = 6      4 x 2 = 8         5 x 2 = 10

               3 x 3 = 9      4 x 3 = 12        5 x 3 = 15          

               3 x 4 = 12     4 x 4 = 16        5 x 4 = 20         

                  ...            ...               ...
*/
let num = Number(prompt("Digite um número: "));

// for (let contador = 0; contador <= 10; contador++) 
// {
//     console.log(num + " * " + contador + " = " + num * contador)
// }

// for (let contador = 0; contador <= 10; contador++) 
// {
//     console.log(num + 1 + " * " + contador + " = " + (num + 1) * contador)
// }

// for (let contador = 0; contador <= 10; contador++) 
// {
//     console.log(num + 2 + " * " + contador + " = " + (num + 2) * contador)
// }

for (let i = num; i <= num + 2; i++) 
{
    console.log("tabuada do número: ", i)
    for (let j = 0; j <= 10; j++) 
    {
        console.log(i + " * " + j + " = " + i * j)
    }   
}

