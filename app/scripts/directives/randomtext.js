'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:randomText
 * @description
 * # randomText
 */
angular.module('oblivionApp')
  .directive('randomText', function () {
    return {
      templateUrl: 'views/randomText.html',
      restrict: 'E',
      scope: {
      	type: "@type"
      },
      link: function postLink(scope, element) {

      }
    };
  });
