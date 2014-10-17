pb.namespace('controller');

pb.controller = (function() {

  function init() {
    pb.menu.init();
    pb.header.init();
    pb.category.init();
    //should be added as conditional when page has video content
    //pb.video.init();
    //set touch boolean for global access
    pb.utils.init();

  };

  return {
    init: init
  };
})();


$(function() {
  pb.controller.init();
});
