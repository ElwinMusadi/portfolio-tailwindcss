// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('hamburger-active');
  // navMenu.classList.toggle('hidden');
  navMenu.classList.toggle('scale-0');
  navMenu.classList.toggle('scale-100');
  
})

window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed')
  } else {
    header.classList.remove('navbar-fixed')
  }
}

var angkot = 1;
while( angkot <= 10) {
  console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
  angkot++;
}