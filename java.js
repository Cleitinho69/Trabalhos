// animação de abertura da página
function pagina() {
  var bloco1 = document.getElementById("bloco_1");
  var bloco2 = document.getElementById("bloco_2");
  var bloco3 = document.getElementById("bloco_3");
  var bloco4 = document.getElementById("bloco_4");
  var bloco5 = document.getElementById("bloco_5");
  var bloco6 = document.getElementById("bloco_6");

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
function mouse_enter() {
  var botao = document.querySelector(".botao");
  var chaves = document.querySelectorAll(
    ".botao .chaves #esquerda, .botao .chaves #direita"
  );

  chaves[0].style.transition = "0.5s ease-in-out";
  chaves[1].style.transition = "0.5s ease-in-out";

  chaves[0].style.transform = "TranslateX(160px)";
  chaves[1].style.transform = "TranslateX(-160px)";

  chaves[0].style.color = "white";
  chaves[1].style.color = "white";

  botao.style.transition = "0.5s ease-in-out";
  botao.style.backgroundColor = "#0800ff";
  botao.style.color = "white";
}

function mouse_leave() {
  var botao = document.querySelector(".botao");
  var chaves = document.querySelectorAll(
    ".botao .chaves #esquerda, .botao .chaves #direita"
  );
  chaves[0].style.transition = "0.2s ease-in-out";
  chaves[1].style.transition = "0.2s ease-in-out";

  chaves[0].style.color = "transparent";
  chaves[1].style.color = "transparent";

  botao.style.color = "RGBA(0, 195, 255, 0.308)";
  botao.style.backgroundColor = "rgba(0, 0, 0, 0.103)";

  chaves[0].style.transform = "TranslateX(0)";
  chaves[1].style.transform = "TranslateX(0)";
}
// Serve para o meu perfil
function perfil() {
  var titulo = document.querySelector(".dev h1");
  var nome = document.querySelector(".dev #nome");
  var foto = document.querySelector(".dev #foto");
  var link = document.querySelectorAll(
    ".dev .contatos #github, .dev .contatos #email, .dev .contatos #linkedin"
  );
  titulo.style.visibility = "inherit";
  titulo.style.color = "#021fc0";
  titulo.style.transform = "translateX(0)";
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
