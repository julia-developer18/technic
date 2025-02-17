document.addEventListener('DOMContentLoaded', function() {
    const menuBurger = document.querySelector('.menu-burger');
    const navList = document.querySelector('.nav__list');

    menuBurger.addEventListener('click', function() {
        navList.classList.toggle('show'); 
    });
});