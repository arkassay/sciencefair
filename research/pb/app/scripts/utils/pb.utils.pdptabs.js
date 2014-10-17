pb.namespace('utils.pdptabs');

pb.utils.pdptabs = (function() {

  function init() {
    switchTabs();
  };

  var currentTab;

  function switchTabs() {
    $('.tabs-nav li').click(function(e) {

      if (!$(this).hasClass('active')) {
        $(this).addClass('active').siblings().removeClass('active');
      }

      e.preventDefault();
      currentTab = $(this).attr('data-tab-section');
      currentTab = '.' + currentTab;

      if (!$(currentTab).hasClass('show')) {
        $(currentTab).toggleClass('hide show')
          .siblings('.tab')
          .removeClass('hide show')
          .addClass('hide');
      }

    });
  }

  return{
    switchTabs: switchTabs,
    init: init
  };

}());


$(function() {
  pb.utils.pdptabs.init();
});
