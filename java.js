var bloco1 = document.getElementById("bloco_1");
var bloco2 = document.getElementById("bloco_2");
var bloco3 = document.getElementById("bloco_3");
var bloco4 = document.getElementById("bloco_4");
var bloco5 = document.getElementById("bloco_5");
var bloco6 = document.getElementById("bloco_6");
var botão = document.getElementById("botão");
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

botão.style.transition = "0.4s ease-in-out";

botão.addEventListener("click", () => {
  botão.style.animation = "AniPagina 1s ease-in-out forwards";

  setTimeout(() => {
    botão.style.display = "none";
  }, 1000);

  setTimeout(() => {
    pagina.style.display = "block";
  }, 1000);

  setTimeout(() => {
    pagina.style.transform = "rotate(360deg)";
  }, 1100);

  setTimeout(() => {
    pagina.style.width = "1200px";
    pagina.style.height = "2000px";
    pagina.style.margin = "110% 0 0 0";
    pagina.style.transition = "1s ease-in-out";
  }, 2500);
});

setTimeout(()=>{
  h1.innerHTML=("Bem Vindo");
  pagina.classList.add("show");
},5000);
