var elem = document.querySelector('.carousel');
var navLinks = document.querySelector('.nav-collapse');
var toggle = document.querySelector('.toggle');

var flkty = new Flickity( elem, {
  pageDots: true,
  prevNextButtons: true,
  wrapAround: true,
  autoPlay:5000
});

toggle.addEventListener('click', function(){
  if(navLinks.classList.contains('nav-collapse-active')){
    navLinks.classList.toggle('nav-collapse-show');
    setTimeout(function(){
      navLinks.classList.toggle('nav-collapse-active');
    },300);
  }
  else{
    navLinks.classList.toggle('nav-collapse-active');
    setTimeout(function(){
      navLinks.classList.toggle('nav-collapse-show');
    },10);
  }
});
