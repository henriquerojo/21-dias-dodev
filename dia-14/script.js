/*

1 - Crie uma função que pergunte o nome e o salário de um colaborador;


2 - Depois crie uma função que deve ser chamada dentro da função que solicita as informações, 
essa função irá calcular o aumento de salário conforme a seguinte tabela:
       - ATÉ R$1.500,00 : aumento de 20%

       - R$1.501,00 até R$2.000,00 : aumento de 15%

       - R$2.001,00 até R$3.000,00 : aumento de 10%

       - R$3.001,00 em diante : aumento de 5%

Essa função tem que receber dois parâmetros: o salário e o nome do colaborador. Para calcular o 
aumente basta multiplicar o salário pela porcentagem.

3 - Depois de calcular o aumento você deve exibir: o nome do colaborador, o salário, a 
% de aumento e o salário reajustado.


4 - Crie uma função que  deve ser chamada no final da função que calcula o reajuste salarial, 
essa função deve perguntar se o usuário deseja calcular novamente com novas informações.


5 - Para testar basta chamar a primeira função criada, e as outras serão chamadas na 
sequência conforme a execução do código


 * Para calcular o aumento, faça o valor do salário multiplicado

   pela porcentagem em decimal. 

     Ex.: salário R$1.000,00 aumento de 10%   |   salário R$1.000,00 aumento de 15%

          1000 * 1.10 = 1100                  |   1000 * 1.15 = 1150

*/

function colaborador()
{
    let nome = prompt('Digite o seu nome: ');
    let salario = parseFloat(prompt('Digite o seu salário: '));
    function verificarSalario(salario)
    {
        if (salario <= 1500) 
        {
            salario_aumento = (salario + (salario * 20 / 100));
            return console.log(nome + ' seu salário de ' + salario + ' teve um aumento de 20%, então ficou: ' + salario_aumento);
        } 
        else if (salario > 1500 && salario <= 2000)
        {
            salario_aumento = (salario + (salario * 15 / 100));
            return console.log(nome + ' seu salário de ' + salario + ' teve um aumento de 15%, então ficou: ' + salario_aumento);
        }
        else if (salario > 2000 && salario <= 3000)
        {
            salario_aumento = (salario + (salario * 10 / 100));
            return console.log(nome + ' seu salário de ' + salario + ' teve um aumento de 10%, então ficou: ' + salario_aumento);
        }
        else
        {
            salario_aumento = (salario + (salario * 5 / 100));
            return console.log(nome + ' seu salário de ' + salario + ' teve um aumento de 5%, então ficou: ' + salario_aumento);
        }
    }
    verificarSalario(salario);
}
colaborador();
