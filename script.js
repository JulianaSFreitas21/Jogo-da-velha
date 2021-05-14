var jogador = null;
var jogadroSelecionado = document.getElementById('jogador-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador('X');

function escolherQuadrado(id){
  var quadrado = document.getElementById(id);
  if(quadrado.innerHTML !== '-'){
    return
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = "#000";

  if(jogador === 'X'){ 
    jogador = 'O';
  }else{ 
    jogador = 'X';
  };

  mudarJogador(jogador);
}

function mudarJogador(valor){
  jogador = valor;
  jogadroSelecionado.innerHTML = jogador;
}

function cheacaVencedor(){
  var quadrado1 = document.getElementsById('1');
  var quadrado2 = document.getElementsById('2');
  var quadrado3 = document.getElementsById('3');
  var quadrado4 = document.getElementsById('4');
  var quadrado5 = document.getElementsById('5');
  var quadrado6 = document.getElementsById('6');
  var quadrado7 = document.getElementsById('7');
  var quadrado8 = document.getElementsById('8');
  var quadrado9 = document.getElementsById('9');
}