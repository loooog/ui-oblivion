'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:ammunition
 * @description
 * # ammunition
 */
angular.module('oblivionApp')
  .directive('ammunition', function () {
    return {
      templateUrl: 'templates/ammunition.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
