'use strict';

/**
 * @ngdoc overview
 * @name oblivionApp
 * @description
 * # oblivionApp
 *
 * Main module of the application.
 */
angular
  .module('oblivionApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
