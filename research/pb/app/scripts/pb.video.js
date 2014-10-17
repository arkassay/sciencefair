pb.namespace('video');

pb.video = (function() {
  var iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false);
  var ytPlayersArray = [];

  function init() {
    // initiate somethin

    //Loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  };


  function getVideoIdandInjectPlayer(playButton) {
    var playerContainer = $(playButton).parents('.module')
            .find('.video-container'),
        videoId = $(playerContainer).attr('data-video-id'),
        playerId = 'player-' + videoId;

    $(playerContainer).html('<div></div>');
    $(playerContainer).children(':first-child').attr('id', playerId);

    var youTubePlayer = initVideoPlayer(playerId, videoId);
    saveYtPlayerToArray(youTubePlayer);

    showVideoContainer(playButton);
  };

  function showVideoContainer(playButton) {

    if ($(playButton).parents().
        find('.video-container').hasClass('video-full')) {
      $(playButton).parents('.module').find('.video-container')
        .toggleClass('hide');
    }else {
      $(playButton).parents('.video-container').toggleClass('hide');
    }

    // if on a touch adjust height of module container
    // to height of video player
    if ($('html').hasClass('touch')) {
      // currentHeight saves original height to integrate if
      // video close button is integrated
      var currentHeight = $(playButton).parents('.module').height();
      playerHeight = $(playButton).parents('.module').
          find('.video-container').find('iframe').height();

      $(playButton).parents('.module').animate({height: playerHeight}, 500);
    }

  };

  function initVideoPlayer(playerId, videoId) {

    var videoPlayer = new YT.Player(playerId, {
      videoId: videoId,
      origin: location.origin,
      playerVars: {
        wmode: 'transparent'
      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });

    return videoPlayer;
  }

  function saveYtPlayerToArray(youTubePlayer) {
    ytPlayersArray.push(youTubePlayer);
  }

  function onPlayerReady(event) {
    if (iOS != true || $('html').hasClass('no-touch')) {
      event.target.playVideo();
    }
  };

  function onPlayerStateChange(event) {

    var newState = event.data;
    var currentPlayer = event.target.d.id;

    switch (newState) {
      case -1:
        //unstarted
        break;
      case 1:
        //playing

        $.each(ytPlayersArray, function(i, val) {

          if (currentPlayer == ytPlayersArray[i].d.id) {
            // currently playing - add analytics
          } else if (ytPlayersArray[i].getPlayerState() == 1) {
            // if video was playing and another video is started
            ytPlayersArray[i].pauseVideo();
          }

        });

        break;
    }
  };


  function handlers() {

    $('.video-play').click(function(e) {
      e.preventDefault();
      var playButton = $(this);
      getVideoIdandInjectPlayer(playButton);
    });

  }


  return {
    init: init,
    //initVideoPlayer: initVideoPlayer,
    ytPlayersArray: ytPlayersArray,
    handlers: handlers
  };

})();

//reference: https://developers.google.com/youtube/iframe_api_reference
function onYouTubeIframeAPIReady() {
  pb.video.handlers();
}

$(function() {
  pb.video.init();
});
