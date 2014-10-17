pb.namespace('utils.accordion');

pb.utils.accordion = (function() {
  function init() {
    $('.accordion').accordion({
      collapsible: true
    });

    var icons = $('.accordion').accordion('option', 'icons');

    // setter
    $('.accordion').accordion('option', 'icons', {
      'header': 'icn-plus', 'activeHeader': 'icn-minus'
    });
  };

  return {
    init: init
  };

})();

$(function() {
  pb.utils.accordion.init();
});
