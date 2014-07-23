'use strict';

/**
 * @ngdoc overview
 * @name prContent
 * @description
 * # prContent
 *
 * Main module of the application.
 */
var PR = angular
  .module('prContent', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
PR.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/shoppingList', {
        templateUrl: 'views/shoppingList.html',
        controller: 'ShopListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var openNav = function(){
      console.log('openNav');
      var navEl = document.getElementById('mainNav');
      navEl.className = navEl.className + ' navOpen';
};
setTimeout(function(){
      openNav();
    }, 1000);

