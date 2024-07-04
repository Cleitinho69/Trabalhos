var bloco1 = document.getElementById("bloco_1");
var bloco2 = document.getElementById("bloco_2");
var bloco3 = document.getElementById("bloco_3");
var bloco4 = document.getElementById("bloco_4");
var bloco5 = document.getElementById("bloco_5");
var bloco6 = document.getElementById("bloco_6");
var botao = document.getElementById("botao");
var pagina = document.getElementById("pagina");
var h1 = document.getElementById("texto");

/*Nessas duas eu coloquei a mesma animação, já que não muda muita coisa*/
bloco1.style.animation = "bloco1 2s ease-in-out forwards";
bloco3.style.animation = "bloco1 2s ease-in-out forwards";

bloco2.style.animation = "bloco2 2s ease-in-out 0.3s forwards";
bloco4.style.animation = "bloco4 2s ease-in-out forwards";

/*Nessas duas eu coloquei a mesma animação, já que não muda muita coisa*/
bloco5.style.animation = "side 2s ease-in-out 1s forwards";
bloco6.style.animation = "side 2s ease-in-out 1s forwards";


// Animação do botão no momento em que você clica
function botao_enter(){
  var chaves = document.querySelectorAll("#chaves, #direita, #esquerda");

  chaves[0].style.display = "flex";

  setTimeout(()=>{
    chaves[0].style.transition = "0.5s ease-in-out";
    chaves[1].style.transition = "0.5s ease-in-out";
    chaves[2].style.transition = "0.5s ease-in-out";

    chaves[2].style.marginLeft = "115px";
    chaves[1].style.marginRight = "115px";
    chaves[0].style.marginLeft = "120px";

    chaves[1].style.color = "white";
    chaves[2].style.color = "white";

    botao.style.transition = "0.5s ease-in-out";
    botao.style.backgroundColor = "rgb(0, 174, 255)";
    botao.style.color = "white";
  },1);
}

function botao_out(){
  var chaves = document.querySelectorAll("#chaves, #direita, #esquerda");

  chaves[0].style.transition = "0.2s ease-in-out";
  chaves[1].style.transition = "0.2s ease-in-out";
  chaves[2].style.transition = "0.2s ease-in-out";

  chaves[2].style.marginLeft = "0px";
  chaves[1].style.marginRight = "0px";
  chaves[0].style.marginLeft = "250px";

  botao.style.backgroundColor = "transparent";
  botao.style.color = "rgba(0, 0, 0, 0.308)";
  chaves[1].style.color = "transparent";
  chaves[2].style.color = "transparent";

  setTimeout(()=>{
    chaves[0].style.display = "none";
  },200);
}