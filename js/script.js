$(document).ready(function(){

  // Click sulle freccette a schermo
  $('.prev').click(prevImg);
  $('.next').click(nextImg);

  // Tasti sinistra e destra della tastiera
  $(document).keydown(function(e) {
    if (e.keyCode == 37) {
      prevImg();
    } else if (e.keyCode == 39) {
      nextImg();
    }
  });

  // Click sui pallini a schermo
  $('.nav i').click(function(){
    $('.nav i.active').removeClass('active');
    $('.images img.active').removeClass('active');
    $(this).addClass('active');

    if ($(this).index() == 0) {
      $('.images img').eq(0).addClass('active');
    } else if ($(this).index() == 1) {
      $('.images img').eq(1).addClass('active');
    } else if ($(this).index() == 2) {
      $('.images img').eq(2).addClass('active');
    } else if ($(this).index() == 3) {
      $('.images img').eq(3).addClass('active');
    }
  });

});

// Funzioni immagine successiva e immagine precedente
function nextImg(){

  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.next().addClass('active');

  if(imgAttiva.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }

}

function prevImg(){

  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.prev().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.prev().addClass('active');

  if(imgAttiva.hasClass('first')){
    $('.images img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }

}
