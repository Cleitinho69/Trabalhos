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

// Serve para o meu perfil
function perfil() {
  document.querySelector(".perfil").style.display = "flex";
  var titulo = document.querySelector(".perfil h1");
  var nome = document.querySelector(".perfil #nome");
  var foto = document.querySelector(".perfil #foto");
  var link = document.querySelectorAll(
    ".perfil .contatos #github, .perfil .contatos #email, .perfil .contatos #linkedin"
  );
  titulo.style.visibility = "inherit";
  titulo.style.color = "#021fc0";
  titulo.style.transform = "translateX(0)";
  setTimeout(() => {
    foto.style.animation = "perfil_foto 1s ease-in-out both";

    setTimeout(() => {
      nome.style.animation = "perfil_nome 1s ease-in-out both";
    }, 1000);

    setTimeout(() => {
      link[0].style.animation = "perfil_contatos 2s ease-in-out both";

      setTimeout(() => {
        link[1].style.animation = "perfil_contatos 2s ease-in-out both";

        setTimeout(() => {
          link[2].style.animation = "perfil_contatos 2s ease-in-out both";
        }, 500);
      }, 500);
    }, 500);
  }, 1000);
}

// Abertura da parte skill
function skill() {
  var pag_skill = document.querySelector(".pag_skill");
  pag_skill.style.display = "flex";
  console.log(pag_skill.style.display)
}
// Animação do botão no momento em que você clica
function mouse_enter(id) {
  var botao = document.getElementById(id);

  // seletor para poder mudar qual das chaves irá abrir, para que todas elas não abram ao mesmo tempo e para facilitar na hora de adicionar mais coisas
  if (id == "home") {
    // botao home
    var chaves = document.querySelectorAll(
      "#home .chaves #esquerda, #home .chaves #direita"
    );
    var texto = document.querySelector("#home #texto");
  } else if (id == "skill") {
    // botao skill
    var chaves = document.querySelectorAll(
      "#skill .chaves #esquerda, #skill .chaves #direita"
    );
    var texto = document.querySelector("#skill #texto");
  } else {
    // botao projeto
    var chaves = document.querySelectorAll(
      "#projeto .chaves #esquerda, #projeto .chaves #direita"
    );
    var texto = document.querySelector("#projeto #texto");
  }

  // animação pra as chaves abrir
  chaves[0].style.transition = "0.5s ease-in-out";
  chaves[1].style.transition = "0.5s ease-in-out";
  //serve apenas pra saber se ta escrito proximo ou home, para poder mudar a abertura das chaves
  // apenas o botao home

  if (texto.textContent == "Próximo") {
    chaves[0].style.transform = "TranslateX(160px)";
    chaves[1].style.transform = "TranslateX(-160px)";
  } else if (texto.textContent == "Home") {
    chaves[0].style.transform = "TranslateX(130px)";
    chaves[1].style.transform = "TranslateX(-130px)";
  }

  // ver qual é o botao para poder mudar a abertura das chaves
  if (id == "skill") {
    // botao skill
    chaves[0].style.transform = "TranslateX(120px)";
    chaves[1].style.transform = "TranslateX(-120px)";
  } else if (id == "projeto") {
    // botao projeto
    chaves[0].style.transform = "TranslateX(160px)";
    chaves[1].style.transform = "TranslateX(-160px)";
  }

  chaves[0].style.color = "white";
  chaves[1].style.color = "white";

  botao.style.transition = "0.5s ease-in-out";
  botao.style.backgroundColor = "#0800ff";
  botao.style.color = "white";
}

function mouse_leave(id) {
  var botao = document.getElementById(id);

  // seletor para poder mudar qual das chaves irá abrir, para que todas elas não abram ao mesmo tempo e para facilitar na hora de adicionar mais coisas
  if (id == "home") {
    var chaves = document.querySelectorAll(
      "#home .chaves #esquerda, #home .chaves #direita"
    );
  } else if (id == "skill") {
    var chaves = document.querySelectorAll(
      "#skill .chaves #esquerda, #skill .chaves #direita"
    );
  } else {
    var chaves = document.querySelectorAll(
      "#projeto .chaves #esquerda, #projeto .chaves #direita"
    );
  }
  // animação pra as chaves fecharem
  chaves[0].style.transition = "0.2s ease-in-out";
  chaves[1].style.transition = "0.2s ease-in-out";

  chaves[0].style.transform = "TranslateX(0)";
  chaves[1].style.transform = "TranslateX(0)";

  chaves[0].style.color = "transparent";
  chaves[1].style.color = "transparent";

  botao.style.color = "RGBA(0, 195, 255, 0.308)";
  botao.style.backgroundColor = "rgba(0, 0, 0, 0.103)";
}

function botao_click(id) {
  var botao = document.getElementById(id);
  var vez = 1;

  // esse código só vai executar se a pessoa clicar no botao enquanto ele for "Proximo"
  if (id == "home" && vez == 1) {
    // botao[0] = home
    // botao[1] = skill
    // botao[2] = projeto
    botao = document.querySelectorAll(".botao");
    botao[1].style.display = "block";
    botao[2].style.display = "block";

    botao[0].style.transition = "1s ease-in-out";
    botao[0].style.left = "950px";

    skill();

    setTimeout(() => {
      var perfil = document.querySelector(".perfil");
      perfil.style.visibility = "hidden";
      perfil.style.transform = "translateX(1000px)";
      setTimeout(() => {
        perfil.style.display = "none";
      }, 400);
    }, 200);

    setTimeout(() => {
      texto = document.querySelector("#home #texto");
      botao[0].style.transition = "1.5s ease-in-out";
      botao[0].style.top = "150px";
      texto.innerText = "Home";

      setTimeout(() => {
        botao[1].style.visibility = "inherit";
        botao[1].style.color = "RGBA(0, 195, 255, 0.308)";
        botao[1].style.backgroundColor = "rgba(0, 0, 0, 0.103)";
        botao[1].style.transition = "1s ease-in-out";
        botao[1].style.transform = "TranslateY(0px)";
        setTimeout(() => {
          botao[2].style.visibility = "inherit";
          botao[2].style.color = "RGBA(0, 195, 255, 0.308)";
          botao[2].style.backgroundColor = "rgba(0, 0, 0, 0.103)";
          botao[2].style.transition = "1s ease-in-out";
          botao[2].style.transform = "TranslateY(0px)";
        }, 500);
      }, 1000);
    }, 1000);
  } else if (id == "home") {
    document.querySelector(".perfil").style.display = "none";
  } else if (id == "skill"){
    
  }
}

pagina();
perfil();