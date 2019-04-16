$('#cubik-preloader').fadeIn();

$(document).ready(function(){
  setTimeout(function(){
    $('#cubik-preloader').fadeOut();
  },2000);
 $('.dropdown-content li a, .anim-a').click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);
  });
  $('.tabs').tabs();
  function redirectPage() {
    window.location = linkLocation;
  }
 $('.sidenav').sidenav();
 $(".dropdown-trigger").dropdown();
 var swiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   autoplay: {
     delay: 9500,
     disableOnInteraction: false,
   },
   spaceBetween: 30,
   loop: true
 });
});
