'use strict';

/**
 * @ngdoc function
 * @name prContent.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the scaffoldingApp
 */
angular.module('prContent')
  .controller('AboutCtrl', function ($scope) {
    $scope.specs = [
      { 'name': 'Create a shopping list',
        'snippet': 'Create your shopping list before you get to the store to take advantage of our resources.' },
      { 'name': 'Add to cart',
        'snippet': 'Add products to your cart here as you shop for fast and easy checkout.' },
      { 'name': 'Helpful information',
        'snippet': 'Find out more information about the products you are buying as you shop.' },
    ];
    setTimeout(function(){
      var animatedEl = document.getElementById('animateMe');
      animatedEl.className = animatedEl.className + ' flipMe';

    }, 1000);

  });
