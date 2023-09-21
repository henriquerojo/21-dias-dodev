// funções

// sem parametros
let num1 = 1;
function somar() 
{
    let num2 = 2;
    console.log(num1 + num2);
    console.log('estou dentro da função somar');
}
somar();


// com parametros
function subtrair(num1, num2)
{
    console.log(num1 - num2);
    console.log('estou dentro da função subtrair');
}

// com return
function multiplicar(num1, num2)
{
    return num1 * num2;
}
let resultadoMultiplicacao = multiplicar(10, 2);
