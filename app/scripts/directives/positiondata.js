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
      templateUrl: 'views/positionData.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
