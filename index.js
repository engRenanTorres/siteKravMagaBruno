const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-aba')

botaoMenu.addEventListener('click',() => {
    menu.classList.toggle('menu-aba--ativo');
})