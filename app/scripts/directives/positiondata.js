'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:positionData
 * @description
 * # positionData
 */
angular.module('oblivionApp')
  .directive('positionData', function () {
    return {
      templateUrl: 'templates/positionData.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
