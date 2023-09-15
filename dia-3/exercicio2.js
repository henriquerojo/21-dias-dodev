/*
2-) 
Salve essas informações em variáveis e a partir delas obtenha o ano de nascimento (considere o ano atual como 2023, 
desconsidere o mês) e o IMC do usuário.

O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: 

IMC = peso / (altura x altura)
*/

const nome_usuario = prompt("Digite o seu nome: ");
const idade_usuario = parseInt(prompt("Digite sua idade (XX): ")); // convertendo valor para Int, usando parseInt
const altura_usuario = parseFloat(prompt("Digite sua altura em metros (X.XX): ")); // convertendo valor para Float, usando parseFloat
const peso_usuario = parseFloat(prompt("Digite seu peso em kg (XX.XX): ")); // convertendo valor para Float, usando parseFloat

console.log("Seu nome: ", nome_usuario);
console.log("Sua idade: ", idade_usuario);
console.log("Sua altura: ", altura_usuario.toFixed(2)); // utilizando o toFixed para limitar o número de casas decimais após a virgula
console.log("Seu peso: ", peso_usuario.toFixed(2)); // utilizando o toFixed para limitar o número de casas decimais após a virgula

// obtendo ano de nascimento

console.log("Seu ano de nascimento é: ", 2023 - idade_usuario);

// obtendo IMC

const imc = peso_usuario / (altura_usuario * altura_usuario);

console.log("Seu IMC é: ", imc.toFixed(3));
