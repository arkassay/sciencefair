pb.namespace('brandstory.frame3');

pb.brandstory.frame3 = (function() {

  //animated elements & frame global values
  var $canvas = $('#canvas'),
      icon,
      locationPointsArr = [],
      centerIconPath = '/images/brandstory/frame1/icn-cim.png';

  function animateIn() {
    appendAnimateText();
    fadeInBackgroundMap();

    addAnimateLocationPoints();

    icon = pb.brandstory.addAnimateCenterIcon(centerIconPath);

    pb.brandstory.addAnimateCenterCircles(circleRadius);
  }

  function addAnimateLocationPoints() {

    var xMax = $canvas.width();
    var yMax = $canvas.height();
    var locationRadius = 7;

    var numCircles = 6, i = 0;
    var circleAttributes = {
      'stroke': '#FFF',
      'fill': '#FFF',
      'opacity' : 0
    };

    var outerCircleAttr = {
      'stroke': '#FFF',
      'stroke-width': 1,
      'opacity' : 0
    };

    for (i, numCircles; i < numCircles; i++) {

      var cx = getRandomInt(0, xMax);
      var cy = getRandomInt(0, yMax);

      locationPointsArr[i] = {};

      locationPointsArr[i].center = pb.brandstory.canvas
        .circle(cx, cy, locationRadius)
        .attr(circleAttributes);

      locationPointsArr[i].outer1 = pb.brandstory.canvas
        .circle(cx, cy, locationRadius + 3)
        .attr(outerCircleAttr);

      locationPointsArr[i].outer2 = pb.brandstory.canvas
        .circle(cx, cy, locationRadius + 6)
        .attr(outerCircleAttr);


      var animObj = {'opacity': 1};
      var animObj2 = {'opacity': .8};
      var animObj3 = {'opacity': .3 };

      //lower opacity for outer circles
      if (i == 0 || i == 3) {
        animObj.opacity = .5;
      } else if (i == 1 || i == 4) {
        animObj.opacity = .7;
      }

      var anim = Raphael.animation(animObj, 1000, '<>');
      var anim2 = Raphael.animation(animObj2, 1000, '<>');
      var anim3 = Raphael.animation(animObj3, 1000, '<>');

      locationPointsArr[i].center.animate(anim.delay(1000));
      locationPointsArr[i].outer1.animate(anim2.delay(1300));
      locationPointsArr[i].outer2.animate(anim3.delay(1600));


      //animate location points to center
      var posObj = {
        cy: $canvas.height() / 2
      };

      posObj.cx = $canvas.width() / 6;

      if (i <= 2) {
        posObj.cx = i * posObj.cx + 18;
      } else if (i > 2) {
        posObj.cx = $canvas.width() - (posObj.cx * (i % 3)) - 18;
      }

      var anim2 = Raphael.animation(posObj, 1000, '<>');
      locationPointsArr[i].center.animate(anim2.delay(3000));
      locationPointsArr[i].outer1.animate(anim2.delay(3000));
      locationPointsArr[i].outer2.animate(anim2.delay(3000));
    }
  }

  function fadeInBackgroundMap() {
    setTimeout(function() {
      $('#frame-3').fadeIn(1000);
    }, 1000);
  }

  function appendAnimateText() {
    var desc = $('#frame-3 p').html();

    $canvas.append('<p>' + desc + '</p>');
    setTimeout(function() {
      $('#canvas p').fadeIn(1000);
    }, 1500);
  }

  function animateOut() {

    var midWidth = $canvas.width() / 2;
    var midHeight = $canvas.height() / 2;

    $('#canvas p').fadeOut(1000, function() {
      $(this).remove();
    });

    var anim = Raphael.animation({
      'opacity': 0
    }, 1000, '<>');
    icon.animate(anim);

    $('#frame-3').fadeOut(1000);


    //animate out location circles
    var i = locationPointsArr.length - 1;

    while (i > -1) {
      var anim = Raphael.animation({
        cx: midWidth,
        cy: midHeight,
        'stroke-width': '5',
        'opacity' : 0
      }, 1000, '<>');
      locationPointsArr[i].center.animate(anim);
      locationPointsArr[i].outer1.animate(anim);
      locationPointsArr[i].outer2.animate(anim);
      i--;
    }

  }

  function resetAnimation() {
    var i = locationPointsArr.length - 1;

    while (i > -1) {
      locationPointsArr[i].center.remove();
      locationPointsArr[i].outer1.remove();
      locationPointsArr[i].outer2.remove();
      i--;
    }

    pb.brandstory.resetCenterCircles();
    pb.brandstory.resetIcon(icon);

    $('#canvas p').remove();

  }

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return {
    animateIn: animateIn,
    animateOut: animateOut,
    resetAnimation: resetAnimation
  };
})();
