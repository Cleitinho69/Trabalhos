
document.addEventListener('DOMContentLoaded', function() {
    var bloco1 = document.getElementById('bloco_1');
    var bloco2 = document.getElementById('bloco_2');
    if (bloco1) {
        bloco1.style.height = '620px';
        bloco1.style.width = '300px';
    }
    if (bloco2){
      bloco2.style.animation= "bottom 2s ease-in-out forwards";
      bloco1.style.height = 'height: 620px'.width = '300px;';
    }
  });

console.log('bloco');