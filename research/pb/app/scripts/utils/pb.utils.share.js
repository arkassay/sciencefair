pb.namespace('utils.share');

pb.utils.share = (function() {
  function init() {
    handlers();
  };

  function handlers() {

    if (!(pb.config.isMobile)) {

      $('.icn-fb a').click(function(e) {
        e.preventDefault();
        popUpShareWindow(this, 'facebookWindow', 'width=550, height=260');
      });

      $('.icn-tw a').click(function(e) {
        e.preventDefault();
        popUpShareWindow(this, 'twitterWindow', 'width=450, height=260');
      });

      $('.icn-in a').click(function(e) {
        e.preventDefault();
        popUpShareWindow(this, 'linkedInWindow', 'width=1000, height=600');
      });

    }
  }

  function popUpShareWindow(
      socialButton,
      socialChannel,
      windowSize)
  {

    href = $(socialButton).attr('href');

    window.open(
        href,
        socialChannel,
        windowSize);
  };

  return {
    init: init
  };

})();

$(function() {
  pb.utils.share.init();
});
