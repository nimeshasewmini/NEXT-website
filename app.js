const menu = document.querySelector('#mobile-menu');
const mwnuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    mwnuLinks.classList.toggle('active');
});