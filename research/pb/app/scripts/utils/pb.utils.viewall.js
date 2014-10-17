pb.namespace('utils.viewall');

pb.utils.viewall = (function() {
  function init() {
    handlers();
    $('.additional-content').slideUp();
  };

  function handlers() {
    $('.view-all').click(function(e) {
      e.preventDefault();
      $(this).siblings('.additional-content').slideToggle();
      $(this).children().toggleClass('hide show');
    });

  }

  return {
    init: init
  };

})();

$(function() {
  pb.utils.viewall.init();
});
