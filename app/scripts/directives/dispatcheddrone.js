'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:dispatchedDrone
 * @description
 * # dispatchedDrone
 */
angular.module('oblivionApp')
  .directive('dispatchedDrone', function () {
    return {
      templateUrl: 'templates/dispatchedDrone.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
