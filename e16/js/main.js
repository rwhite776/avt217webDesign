$(document).ready(function() {
  //$('h1').css('color', 'white');
  $('#number5').click(function() {
    $('#number5').css('color', 'white');
    $('#yeehaw-5').toggleClass('black');
  })
  
  $('#number4').hover(function() {
    $('#number4').css('color', 'goldenrod');
  })

  $('#number4').mouseleave(function() {
    $('#number4').css('color', 'purple');
  })

  $('#number3').click(function() {
    $('#number3').hide();
  });

  $('#number2').click(function() {
    $('#number2').css('color', 'white');
    $('#yeehaw-2').toggleClass('black');
    })
});
