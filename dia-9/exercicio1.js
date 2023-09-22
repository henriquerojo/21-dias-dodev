/*
Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, 
a partir disso você deve exibir um texto com todas essas informações. 
Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg, 
profissão: Programador, altura: 1.83, Você exibe: Olá Giovanni, você tem 21 anos, 
é programador, tem 1.83M de altura e pesa 74kg.


Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela 
“Está liberado para tomar umas geladas”, se ele 
for menor exiba “Sem gelada para você”.


Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. 
Considere ano com 365 dias, mês com 30 dias e semana com 7 dias.

Calcule o IMC do seu usuário e informe a faixa dele.


*O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: IMC = peso / (altura x altura)

O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2. Depois de obter o resultado, 
é possível verificar em que faixa o IMC se encontra, podendo indicar:

      - Magreza, quando o resultado é menor que 18,5 kg/m2;

      - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   

      - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;

      - Obesidade, quando o resultado é maior que 30 kg/m2.



A partir da idade informada descubra o ano que o seu usuário nasceu(Considere o ano atual como 2023, 
faça essa conta usando apenas o ano).

Agora você deve exibir todos os anos que o usuário já viveu até o ano atual e informar qual a idade dele no determinado ano.
   

   *ATENÇÃO: Aqui você deve utilizar o loop FOR.

   Ex: Nasceu em 2018 você deve exibir: 

       2018 - 0 anos de idade

       2019 - 1 anos de idade

       2020 - 2 anos de idade

       2021 - 3 anos de idade

       2022 - 4 anos de idade



Utilizando o loop WHILE/DOWHILE, pergunte a seu usuário se ele deseja inserir novos dados ou se deseja finalizar o programa

*/
let continuar = 'S';
// entrada dos dados solicitados
// let nome = prompt('Digite seu nome: ');
// let idade = Number(prompt('Digite sua idade: '));
// let profissao = prompt('Digite sua profissão: ');
// let peso = prompt('Digite seu peso: ');
// let altura = prompt('Digite sua altura: ');


// // saída de dados solicitada
// console.log("Olá " + nome +", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa " + peso + "kg.");


// // criando função verificarIdade, poderia ser um simples if/else mas preferi criar a função para praticar
// function verificarIdade(idade_usuario) 
// {
//       let maioridade;
//       if (idade_usuario >= 18)
//       {     
//             maioridade = 'Está liberado para tomar umas geladas';
//             console.log(maioridade);
//       }
//       else
//       {
//             maioridade = 'Sem geladas para você!';
//             console.log(maioridade);
//       }

//       return maioridade;
// }

// verificarIdade(idade);

// // informando idade em meses
// let idadeMeses = idade * 12;
// console.log('Você possui ' + idadeMeses + ' meses de idade.');

// // informando idade em semanas
// let idadeSemanas = idade * 48;
// console.log('Você possui ' + idadeSemanas + ' semanas de idade.');

// // informando idade em dias
// let idadeDias = idade * 365;
// console.log('Você possui ' + idadeDias + ' dias de idade.');

// // calculando IMC
// let imc = peso / (altura * altura);

// // criando função classificarIMC, poderia também ser um if/else if/else, mas preferi criar uma função

// function classificarIMC(imc) 
// {
//       let classificacao = '';
//       if (imc < 18.5) 
//       {
//             classificacao = 'Magreza';
//             // console.log(classificacao); sem esse console.log, ele não vai retornar junto com o return se for chamado a função por isso precisa criar uma variável antes
//       } 
//       else if (imc >= 18.5 && imc < 24.9) 
//       {
//             classificacao = 'Normal';
//             // console.log(classificacao); sem esse console.log, ele não vai retornar junto com o return se for chamado a função por isso precisa criar uma variável antes
//       }
//       else if (imc >= 24.9 && imc < 30) 
//       {
//             classificacao = 'Sobrepeso';
//             // console.log(classificacao); sem esse console.log, ele não vai retornar junto com o return se for chamado a função por isso precisa criar uma variável antes
//       }
//       else
//       {
//             classificacao = 'Obesidade';
//             // console.log(classificacao); sem esse console.log, ele não vai retornar junto com o return se for chamado a função por isso precisa criar uma variável antes
//       }

//       return classificacao;
// }

// let classificao = classificarIMC(imc); // variável criada
// console.log('Seu IMC é: ' + imc.toFixed(2) + ' é classificado como: ' + classificao);

// // descobrindo data de nascimento
// let dataNascimento = 2023 - idade;

// console.log('Sua data de nascimento é: ' + dataNascimento);

// console.log('Sua idade a cada ano que viveu é: ');

// // estrutura for para mostrar idade a cada ano que nasceu
// for (let contador = 0; contador <= idade; contador++) 
// {
//       console.log((dataNascimento + contador) + ' - ' + contador + ' anos de idade.');
// }

 do 
 {
      // entrada dos dados solicitados
      let nome = prompt('Digite seu nome: ');
      let idade = Number(prompt('Digite sua idade: '));
      let profissao = prompt('Digite sua profissão: ');
      let peso = prompt('Digite seu peso: ');
      let altura = prompt('Digite sua altura: ');


      // saída de dados solicitada
      console.log("Olá " + nome +", você tem " + idade + " anos, é " + profissao + ", tem " + altura + "M de altura e pesa " + peso + "kg.");


      // criando função verificarIdade, poderia ser um simples if/else mas preferi criar a função para praticar
      function verificarIdade(idade_usuario) 
      {
            let maioridade;
            if (idade_usuario >= 18)
            {     
                  maioridade = 'Está liberado para tomar umas geladas';
                  console.log(maioridade);
            }
            else
            {
                  maioridade = 'Sem geladas para você!';
                  console.log(maioridade);
            }

            return maioridade;
      }

      verificarIdade(idade);

      // informando idade em meses
      let idadeMeses = idade * 12;
      console.log('Você possui ' + idadeMeses + ' meses de idade.');

      // informando idade em semanas
      let idadeSemanas = idade * 48;
      console.log('Você possui ' + idadeSemanas + ' semanas de idade.');

      // informando idade em dias
      let idadeDias = idade * 365;
      console.log('Você possui ' + idadeDias + ' dias de idade.');

      // calculando IMC
      let imc = peso / (altura * altura);

      // criando função classificarIMC, poderia também ser um if/else if/else, mas preferi criar uma função

      function classificarIMC(imc) 
      {
            let classificacao = '';
            if (imc < 18.5) 
            {
                  classificacao = 'Magreza';
                  // console.log(classificacao); sem esse console.log, ele não vai retornar junto com o return se for chamado a função por isso precisa criar uma variável antes
            } 
            else if (imc >= 18.5 && imc < 24.9) 
            {
                  classificacao = 'Normal';
                  // console.log(classificacao); sem esse console.log, ele não vai retornar junto com o return se for chamado a função por isso precisa criar uma variável antes
            }
            else if (imc >= 24.9 && imc < 30) 
            {
                  classificacao = 'Sobrepeso';
                  // console.log(classificacao); sem esse console.log, ele não vai retornar junto com o return se for chamado a função por isso precisa criar uma variável antes
            }
            else
            {
                  classificacao = 'Obesidade';
                  // console.log(classificacao); sem esse console.log, ele não vai retornar junto com o return se for chamado a função por isso precisa criar uma variável antes
            }

            return classificacao;
      }

      let classificao = classificarIMC(imc); // variável criada
      console.log('Seu IMC é: ' + imc.toFixed(2) + ' é classificado como: ' + classificao);

      // descobrindo data de nascimento
      let dataNascimento = 2023 - idade;

      console.log('Sua data de nascimento é: ' + dataNascimento);

      console.log('Sua idade a cada ano que viveu é: ');

      // estrutura for para mostrar idade a cada ano que nasceu
      for (let contador = 0; contador <= idade; contador++) 
      {
            console.log((dataNascimento + contador) + ' - ' + contador + ' anos de idade.');
      }

      continuar = prompt('Quer continuar?[S/N]: ');
 } 
 while (continuar === 'S');