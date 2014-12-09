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
      templateUrl: 'views/identification.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
