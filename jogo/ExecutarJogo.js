function executarJogo(){
    background(vimagemlimoeiro);
  
    //movimentação do jogador.
    vjogador.mova();
    
    for(let i = 0; i < itens.length; i++){
      itens[i].mova();
      if (itens[i].posicaox > 600){
        itens[i] = new Itens(itens[i].posicaoy);
      }
      
      if (
      vjogador.yInicial<itens[i].xFinal &&
      vjogador.yFinal>itens[i].xInicial &&
      vjogador.xInicial<itens[i].yFinal &&
      vjogador.xFinal>itens[i].yInicial){ 
     
   
     //pontuação
    if(
        vjogador.yInicial< itens[i].xFinal &&
        vjogador.yFinal>itens[i].xInicial &&
        vjogador.xInicial< itens[i].yFinal &&
        vjogador.xFinal>itens[i].yInicial 
        ){
       
      //  codigo para colisão das bombas  
      if (itens[i].img == imgitens[3]){
        itens[i]= new Itens(itens[i].posicaoy);
        vida ++;

        //quantidade de bombas antes do game over
        if(vida == 3){
          controleTela = "Gameover";
          ponto = 0;
          vida = 0;
          vjogador = new Jogador();
        }     
      }
      //codigo para existir colisão nos objetos
      else{ 
      console.log(itens[i].yFinal)
          itens[i] = new Itens(itens[i].posicaoy);
       ponto++;
      }
     }
    }
    //pontos
        textSize(18)    
       text("Pontuação: " + ponto,250,30);  
       text("Bombas: " + vida , 100,30);
  }
}
