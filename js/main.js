document.addEventListener("DOMContentLoaded", function () {
    new PureCounter();

     /**
   * Preloader
   */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
        preloader.remove();
        });
    }

});

//JQUERY CODE
(function ($) {
    "use strict";
  
    // Back to top button visibility control
    function checkScroll() {
        if ($(window).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    }
  
    // Bind the scroll event to check button visibility
    $(window).on('scroll', checkScroll);
  
    // Back to top button click event
    $('.back-to-top').click(function () {
        // Animate the scroll to the top
        $('html, body').stop().animate({scrollTop: 0}, 1500, 'easeInOutExpo');
  
        // Temporarily unbind scroll during animation and rebind afterward
        $(window).off('scroll');
        $(window).on('scroll', checkScroll);
    });
  
  })(jQuery);