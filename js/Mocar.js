

  let lader = document.getElementById('preloader');
  let nav = document.getElementById('navbar');
  
  



  window.addEventListener('scroll', function() {
    if(window.scrollY > 50) {
      nav.classList.add('top-nav-collapse');
    }else {
      nav.classList.remove('top-nav-collapse');
    }
});

  

  AOS.init();

  
(function lod() {
    window.onload = function() {
      lader.remove();
    }
})();