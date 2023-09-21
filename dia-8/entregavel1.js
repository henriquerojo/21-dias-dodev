/*
Você deve criar uma calculadora que faça as operações: 
soma, subtração, divisão, multiplicação e exponenciação.

O seu código deve ser feito no arquivo script.js na área em destaque;

Crie uma função chamada Calculadora, essa função deve receber três parâmetros: 
dois serão números utilizados na conta e o último será a operação a ser feita;

Os valores recebidos por parâmetro serão strings, então se necessário converta para outro tipo de dado;

Use o  parâmetro "operador" como a opção de operação escolhida pelo usuário;

Crie caminhos diferentes para cada operação ("+","-","*","/","e") e salve o resultado em uma variável;

Para a operação de exponenciação, você deve multiplicar o primeiro número por ele mesmo a 
quantidade de vezes igual ao segundo número (Utilize um loop);

Sua função deve retornar o resultado.

Ex.: Entrada => num1 = 2, num2 = 3; Saída => resultado = 2*2*2 = 8

Se o resultado for undefined (indefinido) ou for maior que 1.000.000, 
o valor do resultado deve ser substituído por "ERRO";

Abra o arquivo index.html para testar sua calculadora!
*/



function calculadora(n1, n2, operador) 
{
    num1 = parseInt(n1);
    num2 = parseInt(n2);
    if (operador === '+') 
    {
        resultado = num1 + num2;
    }
    else if (operador === '-')
    {
        resultado = num1 - num2;
    }
    else if (operador === '/')
    {
        resultado = num1 / num2;
    }
    else if (operador === '*')
    {
        resultado = num1 * num2;
    }
    else if (operador === 'e')
    {
        /*resultado = num1 ** num2;*/ // teria como fazer desse jeito
        let contador = 1;
        resultado = num1 * num1;
        while (contador < num2 - 1) 
        {
            resultado = resultado * n1;
            contador ++;
        }
    }

    else if (resultado == undefined || resultado > 1000000)
    {
        resultado = 'ERRO';
    }

    return resultado;
}

