document.addEventListener('DOMContentLoaded', function() {
  let hamburgerIcon = document.querySelector('.hamburger-menu');
  let menu = document.querySelector('.menu-ul');

  hamburgerIcon.addEventListener('click', function() {
    alert("clicked");
  });
});
