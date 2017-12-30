(function($){

  $.fn.urijqclickto = function(options) {

    var settings = $.extend({
      positionoffset : 0,
      speed: 1000
    },options);

    return this.each(function(){
      var $this = $(this);
      
      $this.click(function(){
        $('html, body').animate({
          scrollTop: $( $(this).attr('href') ).offset().top + settings.positionoffset
        }, settings.speed);
        return false;
      });
      
    });

  };

}(jQuery));