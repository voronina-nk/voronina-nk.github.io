let toogleMenu = document.querySelector('.toogle_menu '),
    menu = document.querySelector('.menu');

toogleMenu.onclick = function (e) {
    e.preventDefault;
    toogleMenu.classList.toggle('toogle_menu_active');
    menu.classList.toggle('menu_active');
}