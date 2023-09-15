console.log('Dia 3');
let tipoTexto = "2"; // variável tipo string
let tipoNumber = 2; // variável tipo number
let tipoBool = true; // variável tipo bool


// var let e const
// var utiliza em um escopo GLOBAL
// let é uma variável que pode trocar o valor no código
// const é uma variável que não pode trocar o valor, é uma constante

let nome = "Henrique Rojo"; // atribuindo a variável e seu valor
console.log(nome); // exibindo a varíavel no console
nome = "Henrique"; // mudando o valor da variável nome
console.log(nome); // exibindo no console a variável com outro valor

// fazendo a mesma coisa com o const para ver a diferença

const meunome = "Henrique Rojo"; // atribuindo a variável e seu valor
console.log(meunome); // exibindo a varíavel no console
// meunome = "Henrique"; // mudando o valor da variável meunome
// console.log(meunome); // exibindo no console a variável com outro valor, porém esta como const então vai dar erro

// operadores aritméticos

let numUm = 2; 
let numDois = 1;

console.log(numUm + numDois); // operador de soma
console.log(numUm - numDois); // operador de subtração
console.log(numUm * numDois); // operador de multiplicação
console.log(numUm / numDois); // operador de divisão
console.log(numUm % numDois); // operador de resto da divisão

// caso usar operador em tipo string, ele concatena

let numTres = '3'

console.log(numUm + numTres); // o resultado sera 23, pois ele concatena o 2 com o "3"

// caso usar com o tipo boolean, tem que levar em conta que o false = 0 e o true = 1

let numQuatro = true;

console.log(numUm + numQuatro); // o resultado será 3;

// entrada e saída de dados

// prompt(); // função que abre uma janela para o usuário inserir um valor de entrada

// console.log(prompt()); // armazenando valor no prompt no console

let entradaUsuario = prompt();

console.log(2023 - entradaUsuario);

// utilizando função parseInt() para converter o qualquer tipo de string em Int.

entradaUsuario = parseInt(prompt());

console.log(2023 - entradaUsuario);

// inserindo uma mensagem dentro da função prompt()

entradaUsuario = parseInt (prompt('Digite o seu ano de Nascimento: '));

console.log("Sua idade é de: " + 2023 - entradaUsuario, " anos.");

