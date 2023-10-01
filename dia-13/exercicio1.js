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

