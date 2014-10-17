pb.namespace('utils.flexsliderinit');

pb.utils.flexsliderinit = (function() {
  function init() {
    flexInitMobile();
    handlers();
  };

  function flexInitMobile() {

    if (pb.config.isMobile) {
      $("[id^='sliderM']").each(function() {

        currentSlider = $(this);


        $(currentSlider).addClass('flexslider')
          .find('li').removeClass('col-sm-4');

        $(currentSlider).flexslider({
          animation: 'slide',
          controlNav: true,
          animationLoop: true,
          slideshow: true,
          /*sync: "#carousel",*/
          start: function(slider) {
            $('body').removeClass('loading');
          }
        });
      });
    } else {
      // going to get rid of this

      $("[id^='sliderM']").each(function() {
        currentSlider = $(this);
        $(currentSlider).find('li').addClass('col-sm-4');
      });


      $("[id^='sliderD']").each(function() {
        currentSlider = $(this);

        console.log('slider run');

        $(currentSlider).flexslider({
          animation: 'slide',
          controlNav: true,
          animationLoop: true,
          slideshow: true,
          /*sync: "#carousel",*/
          start: function(slider) {
            $('body').removeClass('loading');
          }
        });
      });

    }
  }

  function handlers() {
    $('.open-modal').click(function() {
      console.log('click!');
      flexInitMobile();
    });
  }

  return {
    init: init
  };

})();

$(function() {
  pb.utils.flexsliderinit.init();
});
