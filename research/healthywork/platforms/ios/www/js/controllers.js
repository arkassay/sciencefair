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
    console.log('click');
    $('.main-menu, .fixed-content-area').toggleClass('open');
  };

});
