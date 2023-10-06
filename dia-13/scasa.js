// Crie uma função calculateTaxes que receba um inteiro income (sua renda) e retorne o valor do 
// imposto a ser pago. O valor do imposto depende do valor da renda:
//  até 1000 inclusive - a taxa de imposto é de 2%;
//  de 1001 a 10000 inclusive - a taxa de imposto é de 3%;
//  para tudo o que for maior que 10000 - a taxa de imposto é de 5%..
// Por exemplo:
//  calculateTaxes(900); // 18 (900 * 0.02) já que 900 < 1000
//  calculateTaxes(5000); // 150 (5000 * 0.03) já que 5000 < 10000 e 5000 > 1001
//  calculateTaxes(10500); // 525 (10500 * 0.05) já que 10500 > 10000

function calculateTaxes(income)
{
    if (income <= 1000) 
    {   
        return (income * 2) / 100; // taxa de imposto 2 % 
    }
    else if (income > 1000 && income <= 10000)
    {
        return (income * 3) / 100; // taxa de imposto 3 %
    }
    else
    {
        return (income * 5) / 100; // taxa de imposto 5%
    }
}
console.log(calculateTaxes(1000)); // 2
console.log(calculateTaxes(1001)); // 3
console.log(calculateTaxes(10001)); // 5

