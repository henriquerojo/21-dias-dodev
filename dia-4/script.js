// estruturas condicionais
/*
modelo estrutural de um if

if (condição que retorna true ou false) 
{
    ação dependendo do retorno da condição
}

existe também o else e o else if, o que pode caracterizar uma estrutura condicional composta ou aninhada
*/

let condicao = true;

if (condicao)
{
    console.log('entrou no if');
}
else
{
    console.log('entrou no else');
}

// operadores de comparação

/*

== | != | > | < | >= | <= | === | !==

*/

// código simples

let idade = Number(prompt("Insira a sua idade: "));

if (idade <= 10) 
{
    console.log("Você tem menos ou tem 10 anos");
} 
else 
{
    console.log("Você tem mais que 10 anos");
}

// escopo

let foraEscopo = "Henrique";

if (true) 
{
 console.log(foraEscopo);
 let dentroEscopo = "Henrique2";
 console.log(dentroEscopo);   
}

// o var não respeita essa estrutura de escopo, o var entende como todas variáveis como escopo GLOBAL

// operadores lógicos

/*

operador and &&

operador or ||

*/

console.log(2 == 2 && 3 == 3);
console.log(2 == 2 && 3 == 4);
console.log(2 == 2 || 3 == 3);
console.log(2 == 2 || 3 == 4);
console.log(2 == 3 || 3 == 4);

const nome = prompt("Digite seu nome: ")

if (nome === "henrique" && idade === 20) 
{
    console.log("seu nome é henrique E você tem 20 anos.")
}
else if (nome === "henrique" ||  idade === 20)
{
    console.log("seu nome é henrique OU você tem 20 anos")
}
else
{
    console.log("seu nome NÃO É henrique e você NÃO TEM 20 anos.")
}

// também existe o operador NOT, no javascript é !
