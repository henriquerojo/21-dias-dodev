/*

1 - Crie uma classe Carro com as seguintes propriedades:


Nome - qual a equipe do carro Ferrari, Mercedes, McLaren, etc;
Potencia - número de cavalos de potência do carro;
VelocidadeMaxima - qual a maior velocidade que o carro pode alcançar;
Aceleracao - o tempo em segundos que o carro leva para ir de 0 a 100 km/h


2 - Adicione na classe carro um método que recebe como parâmetro uma distância em metros e calcula 
o tempo em segundos para percorrer essa distância. Use a seguinte fórmula para o cálculo: 


 resultado = distância / (VelocidadeMaxima / Aceleracao). 



   A função deve retornar esse resultado;

3 - Crie uma classe Corrida com as seguintes propriedades:


Nome - nome do local da corrida;
Tipo - uma corrida pode ser Fórmula 1, Stock Car, Rally, etc;
Distancia - o total em metros da corrida;
Participantes - um array de objetos da classe Carro
Vencedor - qual a equipe que ganhou a corrida;

4 - Adicione na classe Corrida um método que verifica qual foi o carro que completou a corrida em menor 
tempo, para isso utilize o método criado na classe carro. Salve o nome do carro que fez o menor tempo na 
propriedade “Vencedor”.


5 - Adicione na classe Corrida um método que exibe na tela quem é o vencedor da corrida.


6 - Crie um objeto da classe Corrida e preencha a propriedade Participantes com alguns objetos da calsse Carro.


7 - Chame o método para verificar quem fez o menor tempo e por fim o método que exibe o vencedor.
*/
class Carro
{
  //propriedades
  nome;
  potencia;
  velocidadeMaxima;
  aceleracao;
  // metodos construtores
  constructor(nome, potencia, velocidadeMaxima, aceleracao)
  {
    this.nome = nome;
    this.potencia = potencia;
    this.velocidadeMaxima = velocidadeMaxima;
    this.aceleracao = aceleracao;
  }
  // metodos da classe
  calcularTempo(distancia)
  {
    resultado = distancia / (this.velocidadeMaxima / this.aceleracao)
    return resultado;
  }
}

class Corrida
{
  // propriedades
  nome;
  tipo;
  distancia;
  participantes;
  vencedor;
  // metodos construtores
  constructor(nome, tipo, distancia)
  {
    this.nome = nome;
    this.tipo = tipo;
    this.distancia = distancia;
  }
  // metodos da classe
  corridaMenorTempo()
  {
    let menorTempo = this.participantes[0].calcularTempo(this.distancia);
    this.vencedor = this.participantes[0];
    for (let c = 1; c < this.participantes.length; c++) 
    {
        let tempo = this.participantes[c].calcularTempo(this.distancia)
        if (tempo < menorTempo)
        {
          menorTempo = tempo;
          vencedor = this.participantes[c];
        }
        return this.vencedor = vencedor;
    }
  }

  exibirVencedor()
  {
    alert('O vencedor é ' + this.vencedor.nome)
  }
}

let corrida = new Corrida('Monza', 'Fórmula 1', 60000);

corrida.participantes[0] = new Carro('Onix', 120, 150, 5);
corrida.participantes[1] = new Carro('Celta', 100, 140, 4);
corrida.participantes[2] = new Carro('Uno', 110, 160, 6);

corrida.corridaMenorTempo();
corrida.exibirVencedor();
