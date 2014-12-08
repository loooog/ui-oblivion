'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:identification
 * @description
 * # identification
 */
angular.module('oblivionApp')
  .directive('identification', function () {
    return {
      templateUrl: 'templates/identification.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
