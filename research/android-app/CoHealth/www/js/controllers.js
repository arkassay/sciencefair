var healthyApp = angular.module('healthyApp', []);

healthyApp.controller('healthHubCtrl', function ($scope) {
  $scope.healthInitiatives = [
    {'name': 'Hydrate',
     'total': '64oz'},
    {'name': 'Move!',
     'total': '3,064 steps'},
    {'name': 'Eat Right',
     'total': '1,020 cal'}
  ];

  $scope.menuClick = function() {
    $('.main-menu, .fixed-content-area').toggleClass('open');
  };

  $scope.leaderboardClick = function() {
    $('.main-menu, .fixed-content-area').toggleClass('open');
    $('.active').removeClass('active');
    $('.leaderboard').addClass('active');
    $('#box').height($('.box img').height());

  };

  $scope.homeClick = function() {
    $('.main-menu, .fixed-content-area').toggleClass('open');
    $('.active').removeClass('active');
    $('.home').addClass('active');
  }

  $scope.goalsClick = function() {
    $('.main-menu, .fixed-content-area').toggleClass('open');
    $('.active').removeClass('active');
    $('.goals').addClass('active');
  }


});
