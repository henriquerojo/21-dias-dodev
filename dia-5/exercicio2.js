/*

Exercício 2 - DoDev Thru

Crie um algoritmo que peça para o usuário escolher entre 3 opções em um posto de gasolina:
abastecer com gasolina, com álcool ou calibrar os pneus.

Se o usuário escolher abastecer com gasolina, 
você deve solicitar o valor desejado e exibir no console a 
quantidade em litros que foi abastecida (litro de gasolina = R$5)

Se o usuário escolher abastecer com álcool, 
você deve solicitar o valor desejado e exibir no console 
a quantidade em litros que foi abastecida (litro de álcool = R$3)

Se o usuário escolher calibrar os pneus, exiba no console a mensagem: "pneus calibrados com sucesso".

*/

opcao = parseInt(prompt("Digite 1 para abastecer com Gasolina\nDigite 2 para abastecer com Álcool\nDigite 3 para calibrar os Pneus"));

switch (opcao) 
{
    case 1:
        valorGasolina = parseFloat(prompt("Informe o valor desejado em R$ (XX.XX): "));
        console.log("Foi abastecido", valorGasolina / 5.00," litro(s) de gasolina!");
        break;
    case 2:
        valorAlcool = parseFloat(prompt("Informe o valor desejado em R$ (XX.XX): "));
        console.log("Foi abastecido", valorAlcool / 3.00," litro(s) de álcool!");
        break;
    case 3:
        console.log("Pneu(s) calibrado(s) com sucesso!")
        break;
    default:
        console.log("Nenhuma opção válida.")
        break;
}