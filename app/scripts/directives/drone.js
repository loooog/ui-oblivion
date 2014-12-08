'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:drone
 * @description
 * # drone
 */
angular.module('oblivionApp')
  .directive('drone', function () {
    return {
      templateUrl: 'templates/drone.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
