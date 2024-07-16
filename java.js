var vez=0;
var vez1=0;
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
function perfil(item) {
  var perfil=document.querySelector(".perfil");
  if (vez == 0 && item == 0) {
    perfil.style.display = "flex";
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
  } else if(item == 0){
    perfil.style.display = "flex";
    perfil.classList.remove("sumir_direita");
    perfil.classList.add("aparecer_direita");
  }else{
    perfil.classList.remove("aparecer_direita");
    perfil.classList.add("sumir_direita");
  }
}

// Abertura da parte skill
function skill(item) {
  var pag_skill = document.querySelector(".pag_skill");
  if (item == 0) {
    pag_skill.style.display = "flex";
    pag_skill.classList.remove("sumir_esquerda");
    pag_skill.classList.add("aparecer_esquerda");
  } else {
    pag_skill.classList.remove("aparecer_esquerda");
    pag_skill.classList.add("sumir_esquerda");
  }
}

function btnMove(item){
    var btn = [...document.querySelectorAll(".botao")];
    btn.map((el)=>{
      if(item==1){
          el.classList.remove("btn_mover_direita");
          el.classList.add("btn_mover_esquerda");
      }else{
        el.classList.remove("btn_mover_esquerda");
        el.classList.add("btn_mover_direita");
      }
    });
}

// aqui pega todos os elementos que possuem a class botao
var btn = [...document.querySelectorAll(".botao")];

// aqui serve para meio que passar em todos os elementos que possuam a class botao um por um
btn.map((el) => {
  // aqui, como todos os elementos estão sendo armazenados no el, ele passa o eventlistener para todos eles
  // no eventlistener ele esta chamando uma função que vai pegar o elemento que acionou o ele e vai amarzenar em botao
  el.addEventListener("mouseenter", (botao) => {
    // aqui eu pego o botao que esta armazenado o elemento e acesso o id e class dele e logo em seguida armazeno no mesmo botao
    botao = botao.target;

    // aqui eu peguei a posição texto dentro do elemento botao e armazenei em texto
    var texto = botao.children[1];
    // aqui é a mesma coisa, só que com as chaves
    var chaves = [...botao.children[0].children];

    chaves[0].style.transition = "0.5s ease-in-out";
    chaves[1].style.transition = "0.5s ease-in-out";

    // aqui ele calcula o tamanho do elemento e amarzena o tanto que as chaves devem percorrer para chegar no final da palavra
    tamTexto = texto.clientWidth / 2 + 40;
    chaves[0].style.transform = "TranslateX(" + tamTexto + "px)";
    chaves[1].style.transform = "TranslateX(" + -tamTexto + "px)";

    chaves[0].style.color = "white";
    chaves[1].style.color = "white";

    botao.style.transition = "0.5s ease-in-out";
    botao.style.backgroundColor = "#0800ff";
    botao.style.color = "white";
  });

  el.addEventListener("mouseleave", (botao) => {
    botao = botao.target;
    var chaves = [...botao.children[0].children];

    chaves[0].style.transition = "0.2s ease-in-out";
    chaves[1].style.transition = "0.2s ease-in-out";

    chaves[0].style.transform = "TranslateX(0)";
    chaves[1].style.transform = "TranslateX(0)";

    chaves[0].style.color = "transparent";
    chaves[1].style.color = "transparent";

    botao.style.color = "RGBA(0, 195, 255, 0.308)";
    botao.style.backgroundColor = "rgba(0, 0, 0, 0.103)";
  });

  el.addEventListener("click", (botao) => {
    if(botao.target.classList.contains("botao")){
      botao = botao.target
    }else{
      botao = botao.target.offsetParent;
    }

    if (botao.id == "home" && vez==0) {
      let botao = document.querySelectorAll(".botao");
      // botao[0] = home
      // botao[1] = skill
      // botao[2] = projeto
      botao[1].style.display = "flex";
      botao[2].style.display = "flex";

      botao[0].style.transition = "1s ease-in-out";
      botao[0].style.left = "950px";

        skill(0);
        perfil(1);

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
      vez++;
    }else if (botao.id == "home") {
      btnMove(1);
      perfil(0);
      skill(1);
      vez1++;
    } else if (botao.id == "skill") {
      if(!vez1==0){
        btnMove(0);
        vez1++;
      }
      perfil(1);
      skill(0);
    } else {
      btnMove(1);
      perfil(1);
      skill(1);
      vez1++;
    }
  });
});

pagina();
perfil(0);