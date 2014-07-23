'use strict';

/**
 * @ngdoc function
 * @name prContent.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prContent
 */
angular.module('prContent')
  .controller('MainCtrl', function ($scope) {
    /*$scope.specs = [
      { 'name': 'Create a shopping list',
        'snippet': 'Create your shopping list before you get to the store to take advantage of our resources.' },
      { 'name': 'Add to cart',
        'snippet': 'Add products to your cart here as you shop for fast and easy checkout.' },
      { 'name': 'Helpful information',
        'snippet': 'Find out more information about the products you are buying as you shop.' },
    ];*/
    
    $scope.name = 'Amanda';
    
   
  });
