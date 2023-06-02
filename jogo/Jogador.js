//Classe "Jogador".
class Jogador{
    constructor(){
    //Imagem do jogador.
      this.img = loadImage('jogo/imgjogo/cebolinha.png');
    //posição, velocidade, altura e largura do personagem.
      this.posicaox = 240;
      this.posicaoy = 280;
      this.velocidade = 5;
      this.largura = 100;
      this.altura = 110;
      this.yInicial = this.posicaoy;
      this.yFinal = this.posicaoy + this.altura;
      this.xInicial = this.posicaox;
      this.xFinal = this.posicaox + this.largura;
    }
    
    //Movimentação do jogador
    
    mova(){
      image(this.img, this.posicaox, this.posicaoy, this.largura, this.altura);
      
      // *A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. 
      
      
      
        //movimentação para direita.
        if((keyIsDown(39)) && (this.xFinal < 630)){
          this.posicaox += this.velocidade;
        }
        //movimentação para esquerda.
        if((keyIsDown(37)) && (this.xInicial > -30)){
          this.posicaox -= this.velocidade;
        }
  
      this.xInicial = this.posicaox;
      this.xFinal = this.posicaox + this.largura;
    }
  }