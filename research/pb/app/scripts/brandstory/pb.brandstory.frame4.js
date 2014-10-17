pb.namespace('brandstory.frame1');

pb.brandstory.frame1 = (function() {

  //animated elements & frame global values
  var icon,
      $canvas = $('#canvas'),
      centerIconPath = '/images/brandstory/frame1/icn-cim.png',
      circleRadius = 40;

  var line;

  function animateIn() {
    appendAnimateText();
    pb.brandstory.addAnimateCenterCircles(circleRadius);
    icon = pb.brandstory.addAnimateCenterIcon(centerIconPath);
    drawLines();

    animateAlongCircle();
  }

  function drawLines() {
    var midWidth = $canvas.width() / 2;
    var midHeight = $canvas.height() / 2;
    var attrObj = {
      stroke: '#FFF'
    };

    //var line = {};

    line = pb.brandstory.canvas
      .path('M' + midWidth + ',' + midHeight + 'L' +
            midWidth + ',' + midHeight);
    line.attr(attrObj);
    var _transformedPath = Raphael
      .transformPath('M' + midWidth + ',' + midHeight + 'L40,30');

    var animObj = {
      path: _transformedPath
    };
    var anim = Raphael.animation(animObj, 1000, '<>');
    line.animate(anim.delay(1000));
  }

  function animateAlongCircle() {
    var cx = $canvas.width() / 2;
    var cy = $canvas.height() / 2;
    var largeCircle = pb.brandstory.canvas.circle(cx, cy, 250);


    //var image = pb.brandstory.canvas.circle(0, 0, 1).attr('fill', 'red');
    var icon1 = pb.brandstory.canvas
      .image('images/brandstory/frame4/icn-chat.png', -18, -16, 36, 32);



    var point = largeCircle.getPointAtLength(800);

    icon1.data('mypath', largeCircle);

    pb.brandstory.canvas.customAttributes.progress = function(v) {
      var path = this.data('mypath');
      if (!path) {
        return {
          transform: 't0,0'
        };
      }
      var len = path.getTotalLength();
      var point = path.getPointAtLength(v * len);

      animatelineAround(point.x, point.y);
      return {
        transform: 't' + [point.x, point.y]
      };
    };
    icon1.attr('progress', 0);
    icon1.animate({ progress: 1 }, 10000);

    line.attr('progress', 0);
    line.animate({progress: 1}, 1000);
  }

  function animatelineAround(x, y) {
    console.log(x, y);

    var cx = $canvas.width() / 2;
    var cy = $canvas.height() / 2;

    var _transformedPath = Raphael
      .transformPath('M' + cx + ',' + cy + 'L' + x + ',' + y);

    var animObj = {
      path: _transformedPath
    };
    var anim = Raphael.animation(animObj, 1000, '<>');
    line.animate(anim.delay(1000));
  }

  function appendAnimateText() {
    var desc = $('#frame-4 p').html();

    $canvas.append('<p>' + desc + '</p>');
    setTimeout(function() {
      $('#canvas p').fadeIn(1000);
    }, 1500);
  }


  function animateOut() {
    var anim = Raphael.animation({
      'opacity': 0
    }, 1000, '<>');
    icon.animate(anim);
  }

  function resetAnimation() {
    pb.brandstory.resetCenterCircles();
    pb.brandstory.resetIcon(icon);

    $('#canvas p').remove();
  }

  return {
    animateIn: animateIn,
    animateOut: animateOut,
    resetAnimation: resetAnimation
  };
})();
