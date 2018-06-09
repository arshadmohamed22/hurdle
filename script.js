$(document).ready(function() {
  
  setTimeout(function(){
    $("#titles").fadeIn(1000);
  }, 1000);


  
  var homeHeight = document.getElementById("home").scrollHeight - 50;

  $(window).scroll(function () {

      if ($('header').height() == 200 ){
    			if ($(window).scrollTop() > 120) {
            $('#logo-bar').addClass('shrink');
      			$('#logo').addClass('switch-logo-small');

            setTimeout(function(){
              $("#logo-bar").fadeIn(600);
            }, 100);
    			}

    			if ($(window).scrollTop() < 120) {
      				$('#logo').removeClass('switch-logo-small');
              $('#logo-bar').removeClass('shrink');

    			}
      }
      else {

        $('#logo').removeClass('switch-logo');
        $('#logo-bar').removeClass('shrink');

        if ($(window).scrollTop() > homeHeight/3) {
          $("#btn-group").fadeOut(600);
        }
        if ($(window).scrollTop() < homeHeight/3) {
          $("#btn-group").fadeIn(600);
        }

        if ($(window).scrollTop() > homeHeight) {
          $('#logo').addClass('switch-logo');
        }

      }
  });
  
  $("#logo").click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
  });

  $("#learn-more").click(function(){
    scrollAbout();
  });
  $("#about-btn").click(function(){
    scrollAbout();
  });

  function scrollAbout(){
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  }

});
