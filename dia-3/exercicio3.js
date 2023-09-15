/*
3-)
Exiba no console a seguinte mensagem (substituindo pelas informações obtidas): "Olá giovanni, 
você tem 23 anos, nasceu em 2000, tem 1,83 de altura, pesa 75kg seu IMC é 22,39 Kg/m2" 
*/

const nome_Usuario = prompt("Digite o seu nome: ");
const idade_Usuario = parseInt(prompt("Digite sua idade (XX): ")); // convertendo valor para Int, usando parseInt
const altura_Usuario = parseFloat(prompt("Digite sua altura em metros (X.XX): ")); // convertendo valor para Float, usando parseFloat
const peso_Usuario = parseFloat(prompt("Digite seu peso em kg (XX.XX): ")); // convertendo valor para Float, usando parseFloat

// obtendo ano de nascimento

const anoNascimento = 2023 - idade_Usuario;

// obtendo IMC

const imc_Usuario = peso_Usuario / (altura_Usuario * altura_Usuario);

console.log("Olá", nome_Usuario, " você tem", idade_Usuario," anos, nasceu em", anoNascimento," tem", altura_Usuario.toFixed(2)," de altura, pesa", peso_Usuario.toFixed(2)," kg e seu imc é", imc_Usuario.toFixed(3), "Kg/m2");