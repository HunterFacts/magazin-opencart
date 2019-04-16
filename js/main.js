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
 DateIndex();
});

function DateIndex (){
  if ($("div").is("#year")){
    var date = new Date();
    var monts = date.getMonth()+1;
    if (date.getFullYear() > $('#year').text()){
      $('#main-h4').html("Было");
    }
    else if (date.getFullYear() < $('#year').text()){
      $('#main-h4').html("Скоро");
    }
    else if (monts > $('#month').text()){
      $('#main-h4').html("Было");
    }
    else if (monts < $('#month').text()){
      $('#main-h4').html("Скоро");
    }
    else if ($('#day').text() - date.getDate() == -1){
      $('#main-h4').html("Было вчера");
    }
    else if (date.getDate() > $('#day').text()){
      $('#main-h4').html("Было");
    }
    else if ($('#day').text() - date.getDate() == 1){
      $('#main-h4').html("Уже завтра!");
    }
    else if (date.getDate() < $('#day').text()){
      $('#main-h4').html("Скоро");
    }
    else if (date.getDate() == $('#day').text()){
      $('#main-h4').html("Сегодня!");
    }
  }

}
