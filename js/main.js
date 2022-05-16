const menu = document.querySelector('.humbergur');
const nav = document.querySelector('nav ul');

menu.addEventListener('click', () => {
  if (menu.firstElementChild.classList.contains('fa-bars')) {
    nav.classList.toggle('showmenu');
    menu.firstElementChild.classList.replace('fa-bars', 'fa-xmark');
  } else {
    nav.classList.toggle('showmenu');
    menu.firstElementChild.classList.replace('fa-xmark', 'fa-bars');
  }
});

nav.addEventListener('click', () => {
  nav.classList.toggle('showmenu');
  nav.style.display = 'hidden';
  menu.firstElementChild.classList.replace('fa-xmark', 'fa-bars');
});
