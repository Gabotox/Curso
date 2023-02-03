let icon = document.getElementById('respo');
let nav = document.getElementById('nav_respo');
let mostrarlo = document.getElementById('poner');
let quitarlo = document.getElementById('quitar');

mostrarlo.addEventListener('click', mostrar);
quitarlo.addEventListener('click', ocultar);

let items = document.querySelectorAll('.link');

items.forEach((item) => {
    item.addEventListener('click', ocultar);
})


function mostrar(){
    nav.style.maxHeight = '400px';
    mostrarlo.style.display = 'none';
    quitarlo.style.display = 'block';
}

function ocultar(){
    nav.style.maxHeight = '0';
    mostrarlo.style.display = 'block';
    quitarlo.style.display = 'none';
}