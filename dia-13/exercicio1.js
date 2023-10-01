/*

1 - Crie uma classe para representar o seu computador:


Tipo - desktop ou notebook;
Processador - nome do seu processador, ex: Ryzen 5
Video - Integrado ou Dedicado;
Armazenamento - número em GB de memória, ex: 500 ou 1000;
MemoriaRam - número em GB de memória, ex: 4, 8 ou 16;
SSD - True ou False


2 - Implemente um método nessa classe para exibir as informações no console;


   Se você não souber todas essas informações do seu computador, não tem problema preencha com os 
   valores de exemplo mesmo.

*/

class Computador
{
    // propriedades
    tipo;
    processador;
    video;
    armazenamento;
    memoriaram;
    ssd;
    // metodos construtores
    constructor(tipo, processador, video, armazenamento, memoriaram, ssd)
    {
        this.tipo = tipo;
        this.processador = processador;
        this.video = video;
        this.armazenamento = armazenamento;
        this.memoriaram = memoriaram;
        this.ssd = ssd;
    }
    // metodos da classe
    informacoes()
    {
        console.log('Tipo: ' + this.tipo + '\nProcessador: ' + this.processador + '\nVideo: ' + this.video + '\nArmazenamento: ' + this.armazenamento + '\nMemória RAM: ' + this.memoriaram + '\nSSD: ' + this.ssd);
    }
}

let continuar = true;
let indiceComputador = 0;
let computadores = [];

while (continuar) 
{
    let tipo = prompt('Digite o tipo do seu computador: ');
    let processador = prompt('Digite o processador do seu computador: ');
    let video = prompt('Digite qual o tipo de GPU do seu computador: ');
    let armazenamento = prompt('Digite o armazenamento você possui em seu computador (GB): ');
    let memoriaram = prompt('Digite a quantidade de memória RAM que você possui em seu computador (GB): ');
    let ssd = prompt('Você possui SSD? [S|N]: ');
    ssd = ssd.toUpperCase();
    while (ssd != "S" && ssd != "N") 
    {
        ssd = prompt('Você possui SSD?[S|N]: ');
        ssd = ssd.toUpperCase();    
    }
    if (ssd == 'S')
    {
        ssd = true;
    }
    else
    {
        ssd = false;
    }

    let computador = new Computador(tipo, processador, video, armazenamento, memoriaram, ssd);
    computadores[indiceComputador] = computador;

    let pergunta = prompt('Quer continuar? [S|N]: ');
    pergunta = pergunta.toUpperCase();
    while (pergunta != 'S' && pergunta != 'N') 
    {
        pergunta = prompt('Digite "S" para SIM ou "N" para NÃO\nQuer continuar?[S|N]: ');
    }
    if (pergunta == 'N')
    {
        continuar = false;
        continue;
    }
    indiceComputador ++;
}

for (let c = 0; c < computadores.length; c++) 
{
    computadores[c].informacoes();    
}
