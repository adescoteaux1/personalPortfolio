const menuOpen = document.querySelector('.fa-bars');
const menuClose = document.querySelector('.fa-times');
const nav = document.querySelector('.nav-links');

menuClose.addEventListener('click', menuTog);
menuOpen.addEventListener('click', menuTog);

function menuTog(e) {
  nav.classList.toggle('active');
}