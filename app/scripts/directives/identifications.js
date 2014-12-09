'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:identifications
 * @description
 * # identifications
 */
angular.module('oblivionApp')
  .directive('identifications', function () {
    return {
      templateUrl: 'views/identifications.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	scope.drones = [
      		{id:"Z1"},
      		{id:"Z2"},
      		{id:"Z3"},
      		{id:"Z4"},
      		{id:"Z5"},
      		{id:"Z6"},
      		{id:"Z7"},
      		{id:"Z8"}
      	]
      }
    };
  });
