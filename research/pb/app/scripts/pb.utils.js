pb.namespace('utils');

pb.utils = (function() {
  function init() {
    handlers();
    $('.additional-content').slideUp();
    checkForTouch();
    checkForSmallRes();
    checkForBgImageSet();
  };

  function checkForBgImageSet() {
    if ($('.bgimage').length > 0) {
      pb.utils.bgimage.loadBgImages();
    }
  }

  function checkForTouch() {
    console.log('checkForTouch()');
    pb.config.isTouch = $('html').hasClass('touch');
  }

  function checkForSmallRes() {
    if ($(window).width() > 767) {
      if (pb.config.isMobile) {
        pb.config.isMobile = false;
        checkForBgImageSet();
      }
    } else {
      if (!pb.config.isMobile) {
        pb.config.isMobile = true;
        checkForBgImageSet();
      }
    }
  }

  function handlers() {

    $(window).resize(function() {
      checkForSmallRes();
    });

    /*
    need to double check - moved to own file
    $('input').each(function() {
      pb.utils.placeholder.init($(this));
    });*/

  }

  return {
    init: init
  };

})();
