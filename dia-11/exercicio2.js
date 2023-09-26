/*
1 - Crie três arrays, um para guardar  os modelos, um para guardar os anos e um para guardar os 
valores do carro

2 - Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), popule os 3 
arrays nas mesmas posições.

3 - Seu usuário deve definir quando parar de inserir informações.

4 - Exiba o nome, ano e valor dos carros inseridos.
    ex: Celta, 2020 Valor: 50.000

5 - Ordene seus vetores pelo preço dos carros. (Aqui você deve usar seu algoritmo de ordenação, 
não use os nativos do javascript, como o OrderBy)

Ex:

[prisma,celta,porsche] [2015,2020,2022] [70.000,50.000,300.000] -> 

-> [celta,prisma,porsche] [2020,2015,2022] [50.000,70.000,300.000]
*/

let modelos = [];
let anos = [];
let valores = [];
let continuar = true;
let contador = 1;

while (continuar)
{
    modelos[contador - 1] = prompt('Digite o nome do ' + (contador) + 'º modelo: ');
    anos[contador - 1] = prompt('Digite o ano ' + (contador) + 'º modelo: ');
    valores[contador - 1] = parseFloat(prompt('Digite o(s) valor(es) do ' + (contador) + 'º modelo: '));

    let pergunta = prompt ('Quer continuar? [S|N]: ');
    pergunta = pergunta.toUpperCase(); 
    while (pergunta != 'S' && pergunta != 'N')
    {
        pergunta = prompt('Por favor digite "S para SIM ou "N" para NÃO\nQuer continuar? [S|N]: "');
        pergunta = pergunta.toUpperCase();
    }
    if (pergunta === 'S')
    {
        continuar = true;
    }
    else
    {
        continuar = false;
    }

    contador++;
}

for (let c = 0; c < modelos.length; c++) 
{
    console.log('Modelo: ' + modelos[c] + ' Ano: ' + anos[c] + ' Valor: ' + valores[c]);
}

// modelos['vectra', 'onix', 'corolla'] anos['2010', '2023', '2020'] valores['7.000', '69.000', '50.000']
// modelos[0] anos[0] valores[0]
// modelos[2] anos[2] valores[2]
// modelos[1] anos[1] valores[1]

// valores[c] > valores[c + 1] c == 0
// valores[0] > valores[1] 
/* 
    valores[1] > valores[2] TRUE
    { 
    troca = valores[c+1]
    valores[c] = valores[c+1]
    valores[c+1] = troca 
    }
*/

/*
    troca = valores[2]
    valores[1] = valores[2]
    valores[2] = troca
*/

// comparei 0 > 1, 1 > 2. Falta comparar o 0 com o 2

for (let c = 0; c < valores.length - 1; c++) 
{
    for (let i = 0; i < valores.length - 1; i++) 
    {
        if (valores[i] > valores[i + 1]) 
        {    

        let modeloMaiorValor = modelos[i];
        modelos[i] = modelos[i + 1];
        modelos[i + 1] = modeloMaiorValor;

        let anoMaiorValor = anos[i];
        anos[i] = anos[i + 1];
        anos[i + 1] = anoMaiorValor;

        let MaiorValor = valores[i];
        valores[i] = valores[i + 1];
        valores[i + 1] = MaiorValor;

        }
    }
}

console.log('Ordem por preço: ');

for (let c = 0; c < modelos.length; c++) 
{
    console.log('Modelo: ' + modelos[c] + ' Ano: ' + anos[c] + ' Valor: ' + valores[c]);
}

