 //Classe "itens".
 class Itens{
    constructor(parametroy){
        this.img = imgitens[int(random(0,4))];
      //A posição "posiçãox" para 0 para começar a cair em cima.
        this.posicaox = 0;
      //a posicaoy está aleatória.
        this.posicaoy = random(10,570);
        this.velocidade = random(1,5);
        this.largura = 55;
        this.altura = 50;
        this.yInicial = this.posicaoy;
        this.yFinal = this.posicaoy + this.altura;
        this.xInicial = this.posicaox;
        this.xFinal = this.posicaox + this.largura;
    }
    
    //faz os itens se mexerem.
     mova(){
       //mudei o simbolo de subtração para divisão, com o objetivo de somar a "posicaox".
       //troquei as posições "posocaox" de lugar para posicaoy, com intuito dos objetos cairem na vertical.
       
      this.posicaox += this.velocidade;
      image(this.img,this.posicaoy,this.posicaox, this.largura, this.altura);
       
      this.yInicial = this.posicaoy;
      this.yFinal = this.posicaoy + this.altura;
      this.xInicial = this.posicaox;
      this.xFinal = this.posicaox + this.largura;
    }
  }