$(document).ready(function () {

   $('.header__burger').click(function (event) {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });

   var button = $('#button-up');
   $(window).scroll(function () {
      if ($(this).scrollTop() > 1500) {
         button.fadeIn();
      } else {
         button.fadeOut();
      }
   });
   button.on('click', function () {
      $('body, html').animate({
         scrollTop: 0
      }, 800);
      return false;
   });

});