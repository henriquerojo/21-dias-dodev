/*
Exercício 1 - Jantar Especial

Crie um sistema que pergunte ao seu usuário se ele está com fome, se tem dinheiro e se o restaurante está aberto.

Se estiver sem fome ou sem dinheiro exiba no console: "Hoje a janta será em casa"

Se estiver com fome e tiver dinheiro mas o restaurante estiver fechado exiba no console: "Peça um delivery!"

Se estiver com fome, tiver dinheiro e o restaurante estiver aberto exiba no console: "Hoje o jantar será no seu restaurante preferido!"
*/

let fome = prompt("Você está com fome?[S/N]: ");
while (fome !== "S" && fome !== "N") 
{
    console.log("Por favor digite 'S' para Sim e 'N' para Não.");
    fome = prompt("Você está com fome?[S/N]: ");
}
let dinheiro = prompt("Você tem dinheiro?[S/N]: ");
while (dinheiro !== "S" && dinheiro !== "N") 
{
    console.log("Por favor digite 'S' para Sim e 'N' para Não.");
    dinheiro = prompt("Você tem dinheiro?[S/N]: ");
}
let restaurante = prompt("O restaurante está aberto?[S/N]: ");
while (restaurante !== "S" && restaurante !== "N") 
{
    console.log("Por favor digite 'S' para Sim e 'N' para Não.");
    restaurante = prompt("O restaurante está aberto?[S/N]: ");
}

if (fome === "N" || dinheiro === "N") 
{
    console.log("Hoje a janta será em casa!");
}
else if (fome === "S" && dinheiro === "S" && restaurante === "N")
{
    console.log("Peça um delivery!");
}
else if (fome === "S" && dinheiro === "S" && restaurante === "S")
{
    console.log("Hoje o jantar será no seu restaurante preferido!");
}
