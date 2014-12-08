'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:node
 * @description
 * # node
 */
angular.module('oblivionApp')
  .directive('node', function () {
    return {
      templateUrl: 'templates/node.html',
      restrict: 'E',
      scope: {
      	serial: '@serial',
      	number: '@number',
      	dmx: '@dmx'
      },
      link: function postLink(scope, element, attrs) {

      }
    };
  });
