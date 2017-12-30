(function($){

  $.fn.urijqstickmenu = function(options) {

    var settings = $.extend({
      menuoffset : 0
    },options);

    return this.each(function(){
      var $this = $(this);
      var $menuheight = $this.outerHeight();
      var $menuposition = $this.offset().top + settings.menuoffset;

      $this.append('<div class="menu_replace" style="display: none; height: ' + $menuheight + 'px;"></div>');

      $(document).scroll(function(){
        var $scrollposition = $(window).scrollTop();
        if( $scrollposition >= $menuposition ) {
          $(".stcMenu").addClass('menu_fixed');
          $(".menu_replace").show();
        } else {
          $(".stcMenu").removeClass('menu_fixed');
          $(".menu_replace").hide();
        }
      });
      
    });

  };

}(jQuery));