(function($){

  $.fn.urijqscrollmenu = function(options) {

    var settings = $.extend({
      positionoffset : 0,
      speed: 1000,
      scrolloffset : 0
    },options);

    return this.each(function(){
      var $this = $(this);
      var $target = $this.find("a");
      
      $target.click(function(){
        $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top + settings.positionoffset
        }, settings.speed);
        return false;
      });

      $(document).scroll(function(){
        var $scrollPos = $(window).scrollTop();
        $target.each(function () {
          var $currLink = $(this);
          var $refElement = $($currLink.attr("href"));
          var $refPos = $refElement.offset().top;
          if ($refPos - settings.scrolloffset <= $scrollPos && $refPos + $refElement.outerHeight() - settings.scrolloffset >= $scrollPos) {
            $target.removeClass("active")
            $currLink.addClass("active");
          }
          else {
            $currLink.removeClass("active");
          }
        });
      });
      
    });

  };

}(jQuery));