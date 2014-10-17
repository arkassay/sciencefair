pb.namespace('home');

pb.home = (function() {

  var homeScreen = '.group.default',
      activeLinks = false,
      animatedValuesArr = [],
      animationInProgress = false,
      currentCategoryContainer,
      currentCategoryContainerClass,
      previousCategory,
      activeCategory;

  function init() {
    generateAnimatedValuesArr();
    handlers();
  };

  function animateCategoryLinks() {
    $('.welcome .links').addClass('animated fadeInUp');
  };

  function setCurrentCategory(currentCategoryContainer) {

    // ISSUE REMOVING PREVIOUS CLASS 100% OF THE TIME
    if (animationInProgress == false) {
      animationInProgress = true;

      // shouldn't need this first one - fail safe
      $('#home-area').find('.previousCategory')
              .removeClass('previousCategory');

      // set the previous current category to the
      // previousCategory before setting current
      $('#home-area').find('.activeCategory')
              .removeClass('activeCategory')
              .addClass('previousCategory');

      $(currentCategoryContainer).addClass('activeCategory');
      currentCategoryContainerClass = currentCategoryContainer;

      activeCategory = $('.group.activeCategory');
      activeHeadline = $('.group.activeCategory .headline');

      previousCategory = $('.group.previousCategory');
      previousHeadline = $('.group.previousCategory .headline');

      animateCategories(
          currentCategoryContainerClass,
          currentCategoryContainer,
          activeCategory,
          activeHeadline,
          previousCategory,
          previousHeadline);
    }
  };

  function animateCategories(
      currentCategoryContainerClass,
      currentCategoryContainer,
      activeCategory,
      activeHeadline,
      previousCategory,
      previousHeadline)
  {

    $(previousHeadline).fadeOut(150, function() {
      $(activeCategory).fadeIn(250);
      $(activeHeadline).fadeIn(500);
      checkForAnimatedValues(currentCategoryContainer);

      $(previousCategory).fadeOut(500, function() {
        $(previousCategory).removeClass('previousCategory');
        animationInProgress = false;
        checkIfCurrentAnimationComplete();
      });
    });
  };

  function checkIfCurrentAnimationComplete() {
    if (currentCategoryContainer != currentCategoryContainerClass &&
        activeLinks != false) {
      setCurrentCategory(currentCategoryContainer);
    }
  }

  function animateHomeScreen() {
    if (animationInProgress == false && activeLinks == false) {
      setCurrentCategory('.group.default');
    }
  };

  function generateAnimatedValuesArr() {
    // animated numbers
    $('.animatedValue').each(function(index, value) {
      var id = $(value).attr('id'),
          percent = $(value).hasClass('percent');

      animatedValuesArr[index] = new pb.animatedvalues();

      if (percent) {
        animatedValuesArr[index].init(id, {afterText: '<span>%</span>'});
      } else {
        animatedValuesArr[index].init(id, {afterText: ''});
      }
      animatedValuesArr[index].changeTo(0);
    });
  }


  function checkForAnimatedValues(currCategoryContainer) {
    //get animated value(s) within a visible category
    //on hover and animate it
    var animatedVal = $(currCategoryContainer).find('.animatedValue'),
        animateId = '';

    $.each(animatedVal, function() {
      animateId = $(this).attr('id');
      $.each(animatedValuesArr, function(i, val) {
        if (animatedValuesArr[i].$el.selector == animateId) {
          animatedValuesArr[i].animateTo();
        }
      });
    });
  }

  function handlers() {
    //category page transition event
    $('.cat-transition').click(function(e) {
      e.preventDefault();
      var catPage = $(this).attr('data-cat');
      if (catPage) {
        $('footer').css('position' , 'static');
        pb.utils.pagetransition.startTransition({
          replaceElement: $('#home-area'),
          pagename: catPage,
          callback: function() {
            pb.category.fixedTabs();
          }
        });

      }
    });


    $('.links a').mouseenter(function() {
      var category = $(this).attr('data-catshow');
      $(this).parent().siblings().addClass('inactive');

      currentCategoryContainer = '.group.' + category;
      setCurrentCategory(currentCategoryContainer);

      activeLinks = true;
    });


    $('.links a').mouseout(function() {
      var category = $(this).attr('data-catshow');
      $(this).parent().siblings().removeClass('inactive');

      activeLinks = false;

      // slight wait to see if other animation starts
      setTimeout(function() {
        if (animationInProgress == false &&
            activeLinks == false &&
            (!$('.default').hasClass('activeCategory'))) {
          animateHomeScreen();
        }
      }, 500);
    });



  }
  return {
    init: init
  };
})();

$(function() {
  pb.home.init();
});
