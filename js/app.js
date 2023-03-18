const btnMenu = document.querySelector('.boton-menu');
const navegacion = document.querySelector('.navegacion');

btnMenu.addEventListener('click', () =>{
    navegacion.classList.toggle('visible');
});