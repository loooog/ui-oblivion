'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:energyUsage
 * @description
 * # energyUsage
 */
angular.module('oblivionApp')
  .directive('energyUsage', function () {
    return {
      templateUrl: 'templates/energyUsage.html',
      restrict: 'E',
      link: function postLink(scope, element) {
      }
    };
  });
