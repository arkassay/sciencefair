'use strict';

pb.namespace('config');

pb.config = (function() {
  var isTouch = false,
      isMobile = false;

  return{
    isTouch: isTouch,
    isMobile: isMobile
  };
});
