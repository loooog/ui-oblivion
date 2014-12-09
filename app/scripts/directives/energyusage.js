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
      templateUrl: 'views/energyUsage.html',
      restrict: 'E',
      link: function postLink(scope, element) {
      }
    };
  });
