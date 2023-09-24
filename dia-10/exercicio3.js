/*
Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array. 
Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, 
exiba o array e o array ao contrário
*/

let array = [];
let continuar = true
let contador = 0;

do 
{
    let inserir = prompt('Digite o ' + (contador + 1) + 'º número: ');
    array[contador] = inserir;
    let pergunta = prompt('Quer continuar? insira 1 para SIM e 2 para NÃO: ');
    if (pergunta == 2) 
    {
        continuar = false;
    }
    contador ++; 
} while (continuar);

for (let c = array.length - 1; c >= 0; c--) 
{
    console.log(array[c]);
}
