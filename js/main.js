$('#cubik-preloader').fadeIn();

$(document).ready(function(){
  window.onload = function() {
      $('#cubik-preloader').fadeOut();
  };
 $('.dropdown-content li a, .anim-a').click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(600, redirectPage);
  });
  $('.tabs').tabs();
  function redirectPage() {
    window.location = linkLocation;
  }
 $('.sidenav').sidenav();
 $('.collapsible').collapsible();
 $('.modal').modal();
 $('input#first_name, textarea#comment, input#theme').characterCounter();
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

function SubmitTeam (){
  let name = $("#first_name").val();
  let comment = $("#comment").val();
  if (name != "" && name != null){
    if (comment != "" && comment != null){
      $('#command-btn').hide();
      $('#modal1').modal('close');
      M.toast({html: 'Успешно'});
    }
    else {
      M.toast({html: 'Напишите комментарий'});
    }
  }
  else {
    M.toast({html: 'Заполните фамилию и имя'});
  }
}

function SubmitWillBe (){
  let name = $("#first_name").val();
  let theme = $("#theme").val();
  let comment = $("#comment").val();
  if (name != "" && name != null){
    if (comment != "" && comment != null){
      if (theme != "" && theme != null)
      {
        $('a.modal-trigger').hide();
        $('#modal2').modal('close');
        M.toast({html: 'Успешно'});
      }
      else
      {
          M.toast({html: 'Заполните поле Тема'});
      }

    }
    else {
      M.toast({html: 'Заполните поле Описание'});
    }
  }
  else {
    M.toast({html: 'Заполните фамилию и имя'});
  }
}

function Be(){
  $('#modal1').modal('open');


}

function WillBeModal(num){
  $('#modal1').modal('open');
  if (num == 1){
    $('#modal-will-be').html(
      '<div class="row">'
        +'<div class="col s4 offset-s4">'
          +'<img src="./img/skoro.png" alt="" class="responsive-img">'
        +'</div>'
      +'</div>'
      +'<h5>DI-КОНТЕЙНЕР UNITY</h5>'
      +'<div class="date-be">Начало: 15.05.2019</div>'
      +'<h6>Описание</h6>'
      +'<span>Отсутствует</span>'
    );
  }
  else {
    $('#modal-will-be').html(
      '<div class="row">'
        +'<div class="col s4">'
          +'<img src="./img/skoro.png" alt="" class="responsive-img">'
          +'<h5>ТЕСТЫ НА XUNIT</h5>'
          +'<div class="date-be">Начало: 17.07.2019</div>'
        +'</div>'
        +'<div class="col s8">'
          +'<h6>Описание</h6>'
          +'<span>Отсутствует</span>'
        +'</div>'
      +'</div>'
    );
  }

}

function CopyVideo(num){
  var func;
  if (num == 1)
  {
    func = document.getElementById("video-youtube");
  }
  else if (num == 2) {
    func = document.getElementById("video-playlist");
  }
  if (copyToClipboard(func) == true){
    M.toast({html: 'Скопировано'});
  }
  else {
    M.toast({html: 'Ошибка при копирование'});
  }
  //очистим выделение текста, чтобы пользователь "не парился"
  window.getSelection().removeAllRanges();
}

function copyToClipboard(elem) {
	  // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
    	  succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
}

function ModalTeam(){
  $('#modal2').modal('open');
  $('#modal-team-content').html(
    '<div class="row">'
      +'<div class="col s4 offset-s4">'
        +'<img src="img/human.jpg" alt="" class="circle responsive-img">'
      +'</div>'
    +'</div>'
    +'<h4>Иванов Иван</h4>'
    +'<h5>Проекты:</h5>'
    +'T-Mобис, GIS-Flexberry'
    +'<h5>Основное области знаний:</h5>'
    +'<span><div class="chip">Ember-Flexberry</div><div class="chip">Ember</div><div class="chip">ASP.NET</div></span>'
    +'<h5>Общая информация:</h5>'
    +'<span>Крутой мужик</span>'
    +'<h5>Теги:</h5>'
    +'<span>'
      +'<div class="chip">Tag</div><div class="chip">Tag</div> <div class="chip">Tag</div> <div class="chip">Tag</div>'
    +'</span>'
  );
}
function ModalExperts (num){
  $('#modal1').modal('open');
  if (num == 1){
    $('#modal-experts-content').html(
      '<div class="row">'
        +'<div class="col s4 offset-s4">'
          +'<img src="img/human.jpg" alt="" class="circle responsive-img">'
        +'</div>'
      +'</div>'
      +'<h4>Иванов Иван</h4>'
      +'<h5>Проекты:</h5>'
      +'T-Mобис, GIS-Flexberry'
      +'<h5>Основное области знаний:</h5>'
      +'<span><div class="chip">Ember-Flexberry</div><div class="chip">Ember</div><div class="chip">ASP.NET</div></span>'
      +'<h5>Общая информация:</h5>'
      +'<span>Крутой мужик</span>'
      +'<h5>Теги:</h5>'
      +'<span>'
        +'<div class="chip">Tag</div><div class="chip">Tag</div> <div class="chip">Tag</div> <div class="chip">Tag</div>'
      +'</span>'
    );
  }
  else {
    $('#modal-experts-content').html(
      '<div class="row">'
        +'<div class="col s4 offset-s4">'
          +'<img src="img/human.jpg" alt="" class="circle responsive-img">'
        +'</div>'
      +'</div>'
      +'<h4>Иванова Настя</h4>'
      +'<h5>Проекты:</h5>'
      +'T-Mобис, GIS-Flexberry'
      +'<h5>Основное области знаний:</h5>'
      +'<span><div class="chip">Ember-Flexberry</div><div class="chip">Ember</div><div class="chip">ASP.NET</div></span>'
      +'<h5>Общая информация:</h5>'
      +'<span>Добросовестный сотрудник</span>'
      +'<h5>Теги:</h5>'
      +'<span>'
        +'<div class="chip">Tag</div><div class="chip">Tag</div> <div class="chip">Tag</div> <div class="chip">Tag</div>'
      +'</span>'
    );
  }
}

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
