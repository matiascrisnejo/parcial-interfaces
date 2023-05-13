var toggle = document.getElementById('button-container');
var contMedio = document.querySelector('cont-Medio');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    contMedio.classList.toggle('active');
}


