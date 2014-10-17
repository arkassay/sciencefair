pb.namespace('utils.flexslidersettings');

pb.utils.flexslidersettings = (function() {
  var toggles = $('.toggle a'),
      codes = $('.code');

  function init() {
    handlers();
    flexNavWidth();
  };

  function handlers() {

    toggles.on('click', function(e) {
      e.preventDefault();
      var $this = $(this);

      if (!$this.hasClass('active')) {
        toggles.removeClass('active');
        $this.addClass('active');
        codes.hide().filter(this.hash).show();
      }
    });

    toggles.first().click();

  }

  function flexNavWidth() {
    liIndex = 0;

    $('.flex-nav-container .slides li').each(function(liIndex) {
      liIndex = liIndex + 1;
      currentWidth = 60 * liIndex;
      /*console.log('currentWidth ' + currentWidth);
      console.log('liIndex ' + liIndex);
      console.log($('.flex-viewport').width() +
          ' <<<< $(.flex-viewport).width()');*/

      if ($('.flex-viewport').width() > currentWidth) {
        $('.flex-viewport').css('text-align', 'center');
        $('.flex-nav-container .slides').css('width', currentWidth);
      }

    });
  }

  return {
    init: init
  };

})();

$(function() {
  pb.utils.flexslidersettings.init();
});
