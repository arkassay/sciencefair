'use strict';

pb.namespace('brandstory');

pb.brandstory = (function() {
  var currFrame = 1,
      animateArea = 'canvas',
      canvas = null,
      centerCirclesArr = [],
      $canvas = $('#canvas'),
      circleRadius = 40;

  function init() {
    initializeCanvas();
    initScrollBetweenFrames();
    pageLoadAnimateFrame();
    if ($(window).width() < 768) {
      circleRadius = 10;
    }
    //animateDownArrow();
  };


  function initializeCanvas() {
    $('#' + animateArea).height($('#animateArea').height());
    pb.brandstory.canvas = Raphael('canvas', '100%', '100%');
    resetAnimationOnResize();
  }

  function initScrollBetweenFrames() {
    $('#wrapper').snappish()
      .on('scrollbegin.snappish', function(e, data) {
          var nextFrameNum = data.toSlideNum + 1;
          var prevFrameNum = data.fromSlideNum + 1;
          animateFrame(prevFrameNum, nextFrameNum);
          crossFadeFrameHeadline(nextFrameNum);
        })
      .on('scrollend.snappish', function(e, data) {
          currFrame = data.toSlideNum + 1;
        });

    $('.down-arrow').on('click', function() {
      goToNextFrame();
    });
  }

  function pageLoadAnimateFrame() {
    var url = location.href;
    var urlArr = url.split('#');
    //check for a direct link (hash tag)
    if (urlArr.length > 1) {
      var frameNum = urlArr[1];
      goToFrame(frameNum - 1); //0-indexed
      animateFrame(frameNum, null);
    } else {
      //animate first frame if there are none specified in the url
      animateFrame(null, 1);
    }
  }

  function animateFrame(numPrev, numTo) {
    if (numPrev == null) {
      runFrameAnimateIn(numTo);
    } else {
      //animate out the current frame
      runFrameAnimateOut(numPrev);
      //animate in the next frame
      runFrameAnimateIn(numTo);
    }
  }

  function resetAnimationOnResize() {
    $(window).resize(function() {
      $('#' + animateArea).height($('#animateArea').height());
      runFrameAnimateIn(currFrame);
    });
  }

  function runFrameAnimateIn(numTo) {
    var story = pb.brandstory;
    switch (numTo) {
      case 1:
        //animate in frame 1
        story.frame1.resetAnimation();
        story.frame1.animateIn();
        break;
      case 2:
        //animate in frame 2
        story.frame2.resetAnimation();
        story.frame2.animateIn();
        break;
      case 3:
        //animate in frame 3
        story.frame3.resetAnimation();
        story.frame3.animateIn();
        break;
      case 4:
        //animate in frame 4
        story.frame4.resetAnimation();
        story.frame4.animateIn();
        break;
    }
  }

  function runFrameAnimateOut(num) {
    var story = pb.brandstory;
    switch (num) {
      case 1:
        //animate in frame 1
        story.frame1.animateOut();
        break;
      case 2:
        //animate in frame 2
        story.frame2.animateOut();
        break;
      case 3:
        //animate in frame 3
        story.frame3.animateOut();
        break;
      case 4:
        //animate in frame 4
        story.frame4.animateOut();
        break;
    }
  }

  function goToFrame(num) {
    $('#wrapper').trigger('scrollto.snappish', num);
  };

  function goToNextFrame() {
    $('#wrapper').trigger('scrolldown.snappish');
  }

  /***SHARED ANIMATION FUNCTIONS (ACROSS FRAMES)*****/
  function addAnimateCenterCircles(circleRadius) {
    //add circles around center space
    var cx = $canvas.width() / 2;
    var cy = $canvas.height() / 2;

    var centerCirclesAttr = {
      'stroke': '#FFF',
      'stroke-width': '3',
      'opacity': 0
    };

    var centerNum = 5;

    for (var i = 0; i < centerNum; i++) {
      var radius = circleRadius + (5 * i);
      centerCirclesArr[i] = pb.brandstory.canvas.circle(cx, cy, radius)
        .attr(centerCirclesAttr);

      var animObj = {
        'opacity': 1 / ((i + 1) * 2),
        'stroke-width' : 1
      };

      var anim = Raphael.animation(animObj, 700, '<>');

      centerCirclesArr[i].animate(anim.delay(700 + (i * 200)));
    }


    //EXPLICITYLY ADDING SMALLEST CENTER CIRCLE
    var radius = circleRadius;
    centerCirclesArr[centerNum] = pb.brandstory.canvas.circle(cx, cy, radius)
      .attr(centerCirclesAttr);

    var animObj = {
      'opacity': 1,
      'stroke-width' : 1
    };

    var anim = Raphael.animation(animObj, 700, '<>');
    centerCirclesArr[centerNum].animate(anim.delay(600));


  }

  function crossFadeFrameHeadline(numTo) {

    $('#canvas').find('h4').fadeOut(1000, function() {
      $(this).remove();
    });

    var title = $('#frame-' + numTo + ' h4').text();
    //var desc = $('#frame-' + numTo + ' p');

    $('#canvas').append('<h4>' + title + '</h4>');
    $('#canvas h4').fadeIn(1500);
  }

  function addAnimateCenterIcon(imgPath) {
    var x = ($canvas.width() / 2) - 16;
    var y = ($canvas.height() / 2) - 20;
    var width = 32;
    var height = 41;
    var icon;

    if ($(window).width() < 768) {
      x = ($canvas.width() / 2) - 8;
      y = ($canvas.height() / 2) - 10;
      width = 16;
      height: 20;
    }

    icon = pb.brandstory.canvas
      .image(imgPath, x, y, width, height)
      .attr({opacity: 0});

    var anim = Raphael.animation({
      'opacity': 1
    }, 1000, '<>');
    icon.animate(anim.delay(1500));

    return icon;
  }

  function resetIcon(icon) {
    if (icon) {
      icon.remove();
    }
  }

  function resetCenterCircles() {
    var j = 0,
        len = centerCirclesArr.length;

    for (j, len; j < len; j++) {
      centerCirclesArr[j].remove();
    }
  }


  return {
    init: init,
    currFrame: currFrame,
    canvas: canvas,
    addAnimateCenterCircles: addAnimateCenterCircles,
    addAnimateCenterIcon: addAnimateCenterIcon,
    centerCirclesArr: centerCirclesArr,
    circleRadius: circleRadius,
    resetIcon: resetIcon,
    resetCenterCircles: resetCenterCircles
  };
})();
