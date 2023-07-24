require(['jquery'], function($) {
    $(document).ready(function() {
      var sectionHeaders = $('.section-header');
      var scrollToTop = $('.scroll-to-top');
  
      sectionHeaders.on('click', function() {
        var content = $(this).next('.section-content');
        content.slideToggle();
      });
  
      $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
          scrollToTop.fadeIn();
        } else {
          scrollToTop.fadeOut();
        }
      });
  
      scrollToTop.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
      });
    });
  });
  