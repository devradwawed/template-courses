$(document).ready(function() {

//navber
  $("#menu").click(function () { 
    $(this).toggleClass("fa-times");
    $(".navber").toggleClass("nav-toggle");
  });
//login
  $("#login").click(function() {
    $(".login-form").addClass("popup");
  });

  $(".login-form form .fa-times").click(function() {
    $(".login-form").removeClass("popup");
  });




  $(window).on('load scroll' , function () {

    $(this).removeClass("fa-times");
    $(".navber").removeClass("nav-toggle");
    $(".login-form").removeClass("popup");
    
    $("section").each(function () {

      let top =$(window).scrollTop();
      let height = $(this).height();
      let id = $(this).attr("id");
      let offset = $(this).offset().top - 200;

      if(top > offset && top < offset + height){
        $(".navber ul li a").removeClass("active");
        $(".navber").find(`[href="#${id}"]`).addClass("active");
      }

    })

  });
  
});