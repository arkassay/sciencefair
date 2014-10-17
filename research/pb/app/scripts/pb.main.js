pb.namespace('controller');

pb.controller = (function() {

  function init() {
    pb.menu.init();
    pb.header.init();
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
