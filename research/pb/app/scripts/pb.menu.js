pb.namespace('menu');

pb.menu = (function() {
  function init() {
    handlers();
    setMinMenuHeight();
  };

  var $menu = $('.menu-overlay');
  var $searchMenu = $('.search-overlay');
  var open = false;
  var saveOffset = 0;

  function resetMenu($overlayAnimated) {
    TweenMax.set($overlayAnimated, { transformPerspective: 1100 });
    TweenMax.to($overlayAnimated, .1, {
      transformOrigin: '50% 0%', scale: 1
    });
    $menu.css({
      'visibility': 'hidden',
      'display': 'none'
    });
    $('#home-area, .main-content').css('height', '');
    TweenMax.set($overlayAnimated, {
      bottom: 0, opacity: 0, rotationX: -10, scale: 1
    });
    openMenu($overlayAnimated);
  };

  function openMenu($overlayAnimated) {
    offset = $(window).scrollTop();

    $('body').addClass('scroll open');

    $overlayAnimated.css({
      'visibility': 'visible',
      'display': 'block'
    });

    var height = $(window).height();
    $('#home-area, .main-content').height(height);

    TweenMax.to($overlayAnimated, .35, {
      rotationX: 0, opacity: 1, ease: Ease.easeOut
    });

    open = true;
  }

  function closeMenu($overlayAnimated) {

    $overlayAnimated.fadeOut('fast', function() {

      $('body').removeClass('scroll open');
      //$(window).scrollTop(offset);
      open = false;
      $('#home-area, .main-content').css('height', '');
    });

  }

  function searchClear() {
    var $input = $('.mobile-search');
    $input.val('Search');
  };

  function setMinMenuHeight() {
    $menu.css('min-height', $(window).height());
  };

  function handlers() {

    $('.icn-menu').click(function(e) {
      e.preventDefault();
      if (!open) {
        $(this).addClass('x');
        resetMenu($menu);
      } else {
        $(this).removeClass('x');
        closeMenu($menu);
      }

    });

    $(window).resize(function() {
      setMinMenuHeight();
    });

    $('.close.close-search').click(function(e) {
      e.preventDefault();
      closeMenu($searchMenu);
    });

    $('.search-clear').click(function(e) {
      e.preventDefault();
      searchClear();
    });



  }

  return {
    init: init
  };
})();
