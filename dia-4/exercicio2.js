/*
Exercício 2 - Motorista

Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade_usuario, se possuí carta de motorista e se tem algum carro.

Se o usuário não for maior de idade ou não tiver carta exiba no console: "Giovanni, você não pode dirigir".

Se o usuário for maior de idade, tiver carta mas não tiver carro exiba no console: "Giovanni, você pode dirigir mas não tem um carro".

Se o usuário for maior de idade, tiver carta e carro exiba no console: "Giovanni, você será o motorista!"
*/

const nome_usuario = prompt("Digite seu nome: ");
const idade_usuario = prompt("Digite sua idade: ");
const carta_motorista = prompt("Possui carta de motorista?[S/N]: ");
const carro_usuario = prompt("Você possui algum carro?[S/N]: ");

if (idade_usuario < 18 || carta_motorista === "N") 
{
    console.log(nome_usuario, "você não pode dirigir!");
}
else if (idade_usuario >= 18 && carta_motorista === "S" && carro_usuario === "N") 
{
    console.log(nome_usuario, ", você pode dirigir mas não tem um carro!");
}
else
{
    console.log(nome_usuario,", você será o motorista");
}
