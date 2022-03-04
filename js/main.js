(function(){
  "user strict";

  $(window).on("load", function() {
      //preloader
      $("#preloader").delay(300).animate({
        "opacity" : "0"
        }, 500, function() {
        $("#preloader").css("display","none");
    });
    // add class on banner image div  for making animation effect after certain time
    setInterval(function(){ 
      $('.banner-image').addClass("active")
    }, 300);

     // run test on initial page load
     checkSize();
     // run test on resize of the window
     $(window).resize(checkSize);
  });

  $(document).on('ready',function() {
    background();
  });

  function background() {
    var img=$('.has_bg_image');
    img.css('background-image', function () {
    var bg = ('url(' + $(this).data('background') + ')');
    return bg;
    });
  }
})


