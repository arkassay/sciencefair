pb.namespace('controller');

pb.controller = (function() {

  function init() {
    pb.brandstory.init();

  };

  return {
    init: init
  };
})();


$(function() {
  pb.controller.init();
});
