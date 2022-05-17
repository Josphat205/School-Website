const menu = document.querySelector('.humbergur');
const nav = document.querySelector('nav ul');
const navheader = document.querySelector('header');

menu.addEventListener('click', () => {
  if (menu.firstElementChild.classList.contains('fa-bars')) {
    nav.classList.toggle('showmenu');
    menu.firstElementChild.classList.replace('fa-bars', 'fa-xmark');
    menu.style.color = 'white';
    navheader.style.background = '#d62828';
  } else {
    nav.classList.toggle('showmenu');
    menu.firstElementChild.classList.replace('fa-xmark', 'fa-bars');
    navheader.style.background = 'white';
    menu.style.color = 'black';
  }
});

nav.addEventListener('click', () => {
  nav.classList.toggle('showmenu');
  nav.style.display = 'hidden';
  navheader.style.background = 'white';
  menu.style.color = 'black';
  menu.firstElementChild.classList.replace('fa-xmark', 'fa-bars');
});
