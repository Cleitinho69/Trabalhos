/*Esse elemento serve apenas para o java checar se existe o elemento que ele quer mexer, tive que adicionar pq tava dando erro toda hora */
document.addEventListener('DOMContentLoaded', function() {
    var bloco1 = document.getElementById('bloco_1');
    var bloco2 = document.getElementById('bloco_2');
    var bloco3 = document.getElementById('bloco_3');
    var bloco4 = document.getElementById('bloco_4');
    var bloco5 = document.getElementById('bloco_5');
    var bloco6 = document.getElementById('bloco_6');
    var botão = document.getElementById('botão');

    
    if (bloco1) {
        /*Nessas duas eu coloquei a mesma animação, já que não muda muita coisa*/
        bloco1.style.animation = "bloco1 2s ease-in-out forwards";
        bloco3.style.animation = "bloco1 2s ease-in-out forwards";


        bloco2.style.animation = "bloco2 2s ease-in-out 0.3s forwards";
        bloco3.style.animation = "bloco1 2s ease-in-out forwards";
        bloco4.style.animation = "bloco4 2s ease-in-out forwards";

        /*Nessas duas eu coloquei a mesma animação, já que não muda muita coisa*/
        bloco5.style.animation = "side 2s ease-in-out 1s forwards";
        bloco6.style.animation = "side 2s ease-in-out 1s forwards";

        botão.style.transition= '0.4s ease-in-out';
    }

    // botão.addEventListener('click', ()=>{
    //   botão.style.animation="pagina 0.5s ease-in-out forwards";
    //   botão..remove('hover');
    // });

    const style = document.styleSheets
  });

console.log('bloco');