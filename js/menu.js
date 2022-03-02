const menuMobile = document.getElementById('mobile-menu');

function toggleMenu() {
  const nav  = document.getElementById('nav');
  nav.classList.toggle('active')
}

menuMobile.addEventListener('click', toggleMenu);
