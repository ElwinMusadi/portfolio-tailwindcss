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

$('.page-scroll').on('click', function(e) {
    if( this.hash !== '' ) {
      e.preventDefault();

      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 20
      }, 1000, 'easeInOutExpo')
    }
  });

var jumlahAngkot = 10,
    angkotBeroperasi = 6,
    noAngkot = 1;

while( noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
  noAngkot++;
}

for( noAngkot; noAngkot > angkotBeroperasi && noAngkot <= jumlahAngkot; noAngkot++) {
  console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}