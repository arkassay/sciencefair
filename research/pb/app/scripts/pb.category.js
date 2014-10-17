'use strict';

pb.namespace('category');

pb.category = (function() {
  function init() {
    fixedTabs();
  };

  function fixedTabs() {

    if ($('.tabs').length > 0) {
      var tabsTop = $('.tabs').offset().top;
      $(window).scroll(function() {
        if ($(window).scrollTop() >= tabsTop) {
          $('.tabs').addClass('fixed');
        } else {
          $('.tabs').removeClass('fixed pinned');
        }
      });

      $(window).resize(function() {
        tabsTop = $('.tabs').offset().top;
      });

      pb.header.headerpin.onPin = function() {
        $('.tabs.fixed').addClass('pinned');
      };
      pb.header.headerpin.onUnpin = function() {
        $('.tabs.fixed').removeClass('pinned');
      };
    }

  }

  return {
    init: init,
    fixedTabs: fixedTabs
  };
})();

/*$(function() {
  $('a').click(function(e) {
    e.preventDefault();
  });
});*/
