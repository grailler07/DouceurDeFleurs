// Scroll smooth vers la section correspondante lorsque le menu est cliqué
document.querySelectorAll('nav ul li a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var targetSection = document.querySelector(link.getAttribute('href'));
    var headerHeight = document.querySelector('header').offsetHeight;
    var targetOffset = targetSection.offsetTop - headerHeight;
    window.scrollTo({ top: targetOffset, behavior: 'smooth' });
  });
});

// Afficher le bandeau du haut en permanence lors du défilement vers le bas
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  if (window.pageYOffset > 0) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
});