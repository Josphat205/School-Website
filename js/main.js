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
    image: '../img/s1.jpg',
    name: 'Hellen Johnson',
    department: 'Academic Director and Exam Controller',
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
  {
    image: '../img/s2.jpg',
    name: 'Veronica Mwalia',
    department: 'Disciplinary Master and Enviromental Manager',
    description:
      'My duties include assigning homework, grading tests, documenting progress and keeping up with parent communication',
  },
];

const demo = document.getElementById('demo');
for (let i = 0; i < staff.length; i += 1) {
  demo.innerHTML += `<div class="toggle"><div class="team">
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
</div></div>
  `;
}

$('#see-me').on('click', () => {
  $('.toggle:hidden').slice(0, 2).slideDown();
  if ($('.toggle:hidden').length === 0) {
    $('#see-me').fadeOut();
  }
});

const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.closeBtn');
const enrol = document.querySelector('.enroll');
const enrol1 = document.querySelector('.enrol');

enrol.addEventListener('click', () => {
  overlay.style.display = 'block';
  popup.style.display = 'block';
});
enrol1.addEventListener('click', () => {
  overlay.style.display = 'block';
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  popup.style.display = 'none';
});