$(document).ready(function() {

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(window).scrollTop() > 705) {          // 705 peut être remplacer par $(window).height() mais n'est pas fluide
      $('#nav-bar').addClass('navbar-fixed');
      $('#nav-bar').removeClass('navbar-default');
    }
    if ($(window).scrollTop() < 705) {          // idem que plus haut
      $('#nav-bar').removeClass('navbar-fixed');
      $('#nav-bar').addClass('navbar-default');
    }
  });

  // Player
  $("#video").hide();
  $(".circle-play").click(function(){
    $("#video")[0].src += "&autoplay=1";
    $("#video").show();
    $("header").addClass("effect");
    $(this).hide();
    $(".play").hide();
    $(".title").hide();
  });

  // Slides
  $(".info").hide();
  $(".sec").click(function(){
    $var = $(this).closest('.sec');
    $var.siblings().find('.info').hide();
    $var.find('.info').toggle();
    if( $(this).hasClass("open") ) {
        $(this).removeClass("open").addClass("closed");
    } 
    else {
        $(this).siblings().removeClass("open").addClass("closed"); 
        $(this).removeClass("closed").addClass("open");
    }
  });

});