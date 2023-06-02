//variável.
    let vimagemlimoeiro;
    let itens = [];
    let imgitens = [];
    let vjogador;
    let ponto = 0;
    let bomba;
    let bomba_sound;
    let itens_sound;
    let imgabertura;
    let controleTela = "INICIO";
    let imgFinal;
    let vida = 0;

  //imagens dos itens.
function preload(){
  
  vimagemlimoeiro = loadImage('jogo/imgjogo/limoeiro.jpg');
  imgitens[0] = loadImage('jogo/imgjogo/mauricio.png');
  imgitens[1] = loadImage('jogo/imgjogo/Sansão.png');
  imgitens[2] = loadImage('jogo/imgjogo/melancia.png');
  imgitens[3] = loadImage('jogo/imgjogo/bomba.png');

    itens[0] = new Itens(random(10,400));
    itens[1] = new Itens(random(10,500));
    itens[2] = new Itens(random(10,400));
    itens[3] = new Itens(random(10,500));

    vjogador = new Jogador();
 
    imgabertura = loadImage("imgsite/abertura.gif");
    imgFinal = loadImage("imgsite/fim.gif");
}


function setup() {
  createCanvas(600, 400).parent("jogo");
}

function keyPressed(){
if(keyCode == 32)
  controleTela = "jogo";

}

function draw(){
  if (controleTela == "INICIO"){
  mostraabertura();
  }
  else{
    executarJogo();
  } if (controleTela == "Gameover"){
    GameOver();
  }
    }

