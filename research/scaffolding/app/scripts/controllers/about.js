'use strict';

/**
 * @ngdoc function
 * @name scaffoldingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the scaffoldingApp
 */
angular.module('scaffoldingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
