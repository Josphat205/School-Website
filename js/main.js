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

const staff = [
  {
    image: '../img/t7.jpeg',
    name: 'Jane Bellow',
    department: 'Senior Teacher',
    description:
      'My duties include assigning homework, grading tests, documenting progress and keeping up with parent communication',
  },
  {
    image: '../img/t2.jpeg',
    name: 'William Great',
    department: 'School Principle and Senior Administrator',
    description:
      'My duties include assigning homework, grading tests, documenting progress and keeping up with parent communication',
  },
  {
    image: '../img/t6.jpeg',
    name: 'Mercy Greary',
    department: 'Human Resource Manager',
    description:
      'My duties include assigning homework, grading tests, documenting progress and keeping up with parent communication',
  },

  {
    image: '../img/t1.jpeg',
    name: 'Victor Wise',
    department: 'Lab Technician and Computer Expert',
    description:
      'My duties include assigning homework, grading tests, documenting progress and keeping up with parent communication',
  },
];

const demo = document.getElementById('demo');
for (let i = 0; i < staff.length; i += 1) {
  const fetch = demo.innerHTML;
  demo.innerHTML = `<div class="team">
    <div class="image-div">
      <img src="img/rec.jpg" alt="" class="pattern">
      <img src="${staff[i].image}" alt="teacher">
      <div class="icons">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter-square"></i>
        <i class="fa-brands fa-instagram-square"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </div>
    <div class="body-div">
      <h4>${staff[i].name}</h4>
      <h5><i><small>${staff[i].department}</small></i></h5>
      <hr class="dash">
      <p>${staff[i].description}</p>
    </div>
  </div>
  ${fetch}`;
}

const seeBtn = document.querySelector('#see-me');
seeBtn.addEventListener('click', () => {

});
