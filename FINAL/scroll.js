(function ($) {
      $(document).ready(function(){
        
      // hide .navbar first
      $(".navbar").hide();
      
      // fade in .navbar
      $(function () {
        $(window).scroll(function () {
                // set distance user needs to scroll before we fadeIn navbar
          if ($(this).scrollTop() > 100) {
            $('.navbar').fadeIn();
          } else {
            $('.navbar').fadeOut();
          }
        });
    
      
      });
    $(".nav-link").click(function () {
      console.log("fire")
      $(".navbar-collapse").collapse("hide");
    })
    });
      }(jQuery));
      // show logo then hide on scroll 
      (function ($) {
        $(document).ready(function(){
          
        
        $(".logo").show();
        
        // fade in .navbar
        $(function () {
          $(window).scroll(function () {
                  // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 100  && $(this).width() < 450) {
              $('.logo').fadeOut();
            } else {
              $('.logo').fadeIn();
            }
          });
      
        
        });
      
      });
        }(jQuery));