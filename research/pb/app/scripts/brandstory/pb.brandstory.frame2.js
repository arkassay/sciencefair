pb.namespace('brandstory.frame2');

pb.brandstory.frame2 = (function() {

  //animated elements & frame global values
  var circlesArr = [],
      icon,
      $canvas = $('#canvas'),
      centerIconPath = '/images/brandstory/frame1/icn-cim.png';

  function animateIn() {
    addCircleGrid();
    appendAnimateText();
    pb.brandstory.addAnimateCenterCircles(circleRadius);
    icon = pb.brandstory.addAnimateCenterIcon(centerIconPath);
  }

  function addCircleGrid() {
    var numCircles = 45,
        i = 0;

    circleRadius = pb.brandstory.circleRadius;
    var strokeWidth = 3;

    var circleAttributes = {
      'stroke': '#FFF',
      'stroke-width': strokeWidth,
      'opacity' : 0
    };

    var countRow = 0;

    for (i, numCircles; i < numCircles; i++) {
      var iModulo = i % 9;
      if (iModulo == 0) {
        ++countRow;
      }

      //SET XY COORDINATES FOR CIRCLES
      var cx = ($canvas.width() / 18) * ((iModulo * 2) + 1);
      var cy = getCircleYValue(countRow, circleRadius);

      circlesArr[i] = pb.brandstory.canvas
        .circle(cx, cy, circleRadius)
        .attr(circleAttributes);

      //create fade in animation for circles
      var animObj = {
        'stroke-width': '1'
      };

      animObj.opacity = getCircleOpacity(iModulo, countRow);
      var anim = Raphael.animation(animObj, 1000, '<>');

      if (countRow == 1) {
        createStaggeredAnimation(i, iModulo);
      } else {
        circlesArr[i].animate(anim.delay(0));
      }
    }
  }

  function createStaggeredAnimation(pos, iModulo) {
    var anim = Raphael.animation({
      '25%': {
        opacity: .5
      },
      '50%': {
        opacity: 1,
        'stroke-width': 1
      },
      '100%': {
        opacity: getCircleOpacity(iModulo, 1)
      }
    }, 1000, '<>');

    if (iModulo == 0 || iModulo == 8) {
      circlesArr[pos].animate(anim.delay(100));
    } else if (iModulo == 1 || iModulo == 7) {
      circlesArr[pos].animate(anim.delay(200));
    } else if (iModulo == 2 || iModulo == 6) {
      circlesArr[pos].animate(anim.delay(300));
    } else if (iModulo == 3 || iModulo == 5) {
      circlesArr[pos].animate(anim.delay(400));
    } else if (iModulo == 4) {
      circlesArr[pos].animate(anim.delay(500));
    }
  }

  function appendAnimateText() {

    //var title = $('#frame-2 h4');
    var desc = $('#frame-2 p').html();

    //$canvas.append(title);
    //$('#canvas h4').fadeIn(1500);

    $canvas.append('<p>' + desc + '</p>');
    setTimeout(function() {
      $('#canvas p').fadeIn(1000);
    }, 1500);
  }

  function getCircleOpacity(iModulo, countRow) {
    var opacity = .5;

    //stagger opacity properly
    if (iModulo == 4) {
      opacity = 1;
    } else if (iModulo == 0 || iModulo == 8) {
      opacity = .1;
    } else if (iModulo == 1 || iModulo == 7 || iModulo == 3 || iModulo == 5) {
      opacity = .3;
    }

    if (countRow == 4) {
      opacity = .1;
    } else if (countRow == 5) {
      opacity = .1;
    }

    return opacity;
  }

  function getCircleYValue(countRow, circleRadius) {
    var cy = 0;

    //create rows of circles by adding different
    //heights every 9 iterations
    if (countRow == 1) {
      cy = $canvas.height() / 2;
    } else if (countRow == 2) {
      cy = circleRadius + 1;
    } else if (countRow == 3) {
      cy = $canvas.height() - circleRadius - 1;
    } else if (countRow == 4) {
      cy = $canvas.height() / 4;
    } else if (countRow == 5) {
      cy = ($canvas.height() / 4) * 3;
    }

    return cy;
  }

  function animateOut() {
    var midWidth = $canvas.width() / 2;
    var midHeight = $canvas.height() / 2;
    var i = circlesArr.length - 1;
    var j = pb.brandstory.centerCirclesArr.length - 1;

    $('#canvas p').fadeOut(1000, function() {
      $(this).remove();
    });

    var anim = Raphael.animation({
      'opacity': 0
    }, 1000, '<>');
    icon.animate(anim);

    while (i > -1) {
      var anim = Raphael.animation({
        cx: midWidth,
        cy: midHeight,
        'stroke-width': '5',
        'opacity' : 0
      }, 1000, '<>');
      circlesArr[i].animate(anim);
      i--;
    }

    while (j > -1) {
      var anim = Raphael.animation({
        'opacity' : 0
      }, 1000, '<>');
      pb.brandstory.centerCirclesArr[j].animate(anim);
      j--;
    }

  }

  function resetAnimation() {
    var i = 0,
        len = circlesArr.length;

    for (i, len; i < len; i++) {
      circlesArr[i].remove();
    }

    pb.brandstory.resetCenterCircles();
    pb.brandstory.resetIcon(icon);

    //$('#canvas h4').remove();
    $('#canvas p').remove();


    //$canvas.html('');
  }

  return {
    animateIn: animateIn,
    animateOut: animateOut,
    resetAnimation: resetAnimation
  };
})();
