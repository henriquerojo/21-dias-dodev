class Aluno
{
    // propriedades
    nome 
    idade
    areaAtuacao
    // metodo construtor
    constructor(nome, idade)
    {
        this.nome = nome;
        this.idade = idade;
    }

    // metodos da classe - funções da classe
    apresentar()
    {
        console.log('Nome: ' + this.nome + ' Idade: ' + this.idade + ' Área de Atuação: ' + this.areaAtuacao);
    }
}

let continuar = true;
let alunos = [];
let indiceAluno = 0;

while (continuar) 
{
    let nome = prompt('Nome do aluno: ');
    let idade = parseInt(prompt('Insira a idade: '));
    let aluno = new Aluno(nome, idade);
    let areaAtuacao = prompt('Insira a área de atuação: ');
    aluno.areaAtuacao = areaAtuacao;
    alunos[indiceAluno] = aluno;
    let pergunta = prompt('Quer continuar? [S|N]: ');
    pergunta = pergunta.toLocaleLowerCase();
    while(pergunta != 'n' && pergunta != 's')
    {
        pergunta = prompt('Por Favor, digite "s" para sim ou "n" para não\nDeseja continuar? [S|N]: ');
    }
    if (pergunta == 'n')
    {
        continuar = false;
        continue;
    }
    else
    {
    indiceAluno ++;
    }
}

/*

alunos[0].apresentar()

*/