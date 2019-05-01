$('.menu').on('click', function() {

  $('.portfolio-items').addClass('animated zoomOutDown');
  setTimeout(function() {
    $('.portfolio-items').removeClass('zoomOutDown').addClass('fadeInLeft');
  }, 1000)
});