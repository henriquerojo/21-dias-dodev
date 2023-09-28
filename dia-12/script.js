/*

1 - Crie 2 arrays: um para nomes e um para senhas

2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, 
excluir um cadastro ou encerrar o programa.

3 - Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando 
encerrar o programa conforme as opções.

4 - Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde 
cada um no seu respectivo array.

5 - Se a opção escolhida for login solicite ao usuário um nome e uma senha, 
depois procure o nome recebido no array de nomes e em caso positivo compare a senha no array de senhas. 
Se as duas comparações forem válidas exiba uma mensagem de sucesso

6 - Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, 
então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array, 
por fim organize o array para eliminar os espaços vazios.

*/

let nomes = [];
let senhas = [];
let continuar = true;
let cont = true
let contador = 0;

while (continuar) 
{

    let escolha = prompt('O que deseja realizar?\nDigite 1 para cadastrar\nDigite 2 para fazer login\nDigite 3 para excluir um cadastro\nDigite 4 para encerrar o programa');
    while (escolha != '1' && escolha != '2' && escolha != '3' && escolha != 4)
    {
        escolha = prompt('Por favor, digite corretamente.\nDigite 1 para cadastrar\nDigite 2 para fazer login\nDigite 3 para excluir um cadastro\nDigite 4 para encerrar o programa');
    }    
    if (escolha == 1) 
    {
        while (cont) 
        {
        nomes[contador] = prompt('Digite um nome: ');
        senhas[contador] = prompt('Digite a senha: ');
        let pergunta = prompt('Quer continuar? [S|N]: ');
        pergunta = pergunta.toUpperCase();
        while (pergunta != 'S' && pergunta != 'N')
        {
            pergunta = prompt('Por favor digite S para SIM ou N para NÃO\nQuer continuar? [S|N]: ');
        }
        if (pergunta == 'N') 
        {
            cont = false;
            continue;
        }
        contador ++;
        }
    } 
    else if (escolha == 2)
    {
        let login = prompt('Login: ');
        let senhaLogin = prompt('Senha: ');
        let loginValido = false;
        for (let c = 0; c < nomes.length; c++) 
        {
            for (let i = 0; i < senhas.length; i++) 
            {
                if (nomes[c] == login && senhas[i] == senhaLogin)
                {
                    loginValido = true;
                }
            }
        }   
        if (loginValido === true) 
        {
            console.log('Login realizado com sucesso!')
        }
        else
        {
            console.log('Login não realizado!')
        }
    }
    else if (escolha == 3)
    {
        let nome = prompt('Nome para excluir: ');
        let nomeExcluir = [];
        let senhaExcluir = [];
        let cont = 0;
        for (let c = 0; c < contador; c++) 
        {
            if (nome === nomes[c]) 
            {
                alert('Cadastro excluído com sucesso!')    
            }
            else
            {
                nomeExcluir[cont] = nomes[c];
                senhaExcluir[cont] = senhas[c];
                cont ++;
            }

            nomes = nomeExcluir;
            senhas = senhaExcluir;
            contador --;

            break;
        }   
    }
    else 
    {
        console.log('Programa finalizado!');
        continuar = false;
        continue;
    }
}
