/*
1-)
Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, altura e peso.
*/

const nomeUsuario = prompt("Digite o seu nome: ");
const idadeUsuario = parseInt(prompt("Digite sua idade (XX): ")); // convertendo valor para Int, usando parseInt
const alturaUsuario = parseFloat(prompt("Digite sua altura em metros (X.XX): ")); // convertendo valor para Float, usando parseFloat
const pesoUsuario = parseFloat(prompt("Digite seu peso em kg (XX.XX): ")); // convertendo valor para Float, usando parseFloat

console.log("Seu nome: ", nomeUsuario);
console.log("Sua idade: ", idadeUsuario);
console.log("Sua altura: ", alturaUsuario.toFixed(2)); // utilizando o toFixed para limitar o número de casas decimais após a virgula
console.log("Seu peso: ", pesoUsuario.toFixed(2)); // utilizando o toFixed para limitar o número de casas decimais após a virgula
