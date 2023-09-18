// laço de repetição while

let condicao = true;
let contador = 0;
while (condicao) 
{
    contador ++;
    if (contador == 5) 
    {
        condicao = false;    
    }
    console.log(contador);
}


condicao = true;

while (condicao) 
{
    let idade = Number(prompt('Insira a sua idade: '));
    if (idade < 18) 
    {
        console.log('Você é menor de idade');
        condicao = false;   
    }
}

let idade = 18

while (idade >= 18) 
{
    idade = Number(prompt('Insira a sua idade: '));    
}

console.log('Você é menor de idade!');

do 
{
    idade = Number(prompt('Insira a sua idade: '));
} 
while (idade >= 18);