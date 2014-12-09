'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:diagnosticMatrix
 * @description
 * # diagnosticMatrix
 */
angular.module('oblivionApp')
  .directive('diagnosticMatrix', function () {
    return {
      templateUrl: 'views/diagnosticMatrix.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
