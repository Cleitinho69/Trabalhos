// animação de abertura da página
function pagina() {
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
}
// Animação do botão no momento em que você clica
function botao_enter() {
  var chaves = document.querySelectorAll("#chaves, #direita, #esquerda");

  chaves[0].style.display = "flex";

  setTimeout(() => {
    chaves[0].style.transition = "0.5s ease-in-out";
    chaves[1].style.transition = "0.5s ease-in-out";
    chaves[2].style.transition = "0.5s ease-in-out";

    chaves[2].style.marginLeft = "115px";
    chaves[1].style.marginRight = "115px";
    chaves[0].style.marginLeft = "120px";

    chaves[1].style.color = "white";
    chaves[2].style.color = "white";

    botao.style.transition = "0.5s ease-in-out";
    botao.style.backgroundColor = "#0800ff";
    botao.style.color = "white";
  }, 1);
}

function botao_out() {
  var chaves = document.querySelectorAll("#chaves, #direita, #esquerda");

  chaves[0].style.transition = "0.2s ease-in-out";
  chaves[1].style.transition = "0.2s ease-in-out";
  chaves[2].style.transition = "0.2s ease-in-out";

  chaves[2].style.marginLeft = "0px";
  chaves[1].style.marginRight = "0px";
  chaves[0].style.marginLeft = "250px";

  botao.style.backgroundColor = "transparent";
  botao.style.color = "RGBA(0, 195, 255, 0.308)";
  chaves[1].style.color = "transparent";
  chaves[2].style.color = "transparent";

  setTimeout(() => {
    chaves[0].style.display = "none";
  }, 200);
}

// Serve para o meu perfil
function perfil() {
  var titulo = document.querySelector(".dev h1");
  var nome = document.querySelector(".dev #nome");
  var foto = document.querySelector(".dev #foto");
  var link = document.querySelectorAll(
    ".dev .contatos #github, .dev .contatos #email, .dev .contatos #linkedin"
  );

  setTimeout(() => {
    foto.style.animation = "dev_foto 1s ease-in-out both";

    setTimeout(() => {
      nome.style.animation = "dev_nome 1s ease-in-out both";
    }, 1000);

    setTimeout(() => {
      link[0].style.animation = "dev_contatos 2s ease-in-out both";

      setTimeout(() => {
        link[1].style.animation = "dev_contatos 2s ease-in-out both";

        setTimeout(() => {
          link[2].style.animation = "dev_contatos 2s ease-in-out both";
        }, 500);
      }, 500);
    }, 500);
  }, 1000);
}

pagina();
perfil();
