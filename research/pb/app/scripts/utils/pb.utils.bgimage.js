pb.namespace('utils.bgimage');

pb.utils.bgimage = (function() {

  function loadBgImages() {
    $('.bgimage').each(function() {
      var bg = '';
      if (pb.config.isMobile) {
        bg = $(this).attr('data-bg-mobile');
        //bgHover = $(this).attr('data-bg-mobile-hover');
      } else {
        bg = $(this).attr('data-bg');
        //bgHover = $(this).attr('data-bg-hover');
      }
      /*$(this).mouseenter(function() {
        $(this).css('background-image', 'url(' + bgHover + ')');
      });
      $(this).mouseout(function() {
        $(this).css('background-image', 'url(' + bg + ')');
      });*/

      $(this).css('background-image', 'url(' + bg + ')');
    });
  }

  return{
    loadBgImages: loadBgImages
  };

}());
