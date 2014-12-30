'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:dispatchedDrone
 * @description
 * # dispatchedDrone
 */
angular.module('oblivionApp')
  .directive('dispatchedDrone', function ($interval) {
    return {
      templateUrl: 'views/dispatchedDrone.html',
      restrict: 'E',
      scope: {},
      link: function postLink(scope, element, attrs) {
      	// generate a random number 
      	scope.num = _.random(30, 200);

      	// decrease number at random interval
      	$interval(function(){
      		scope.num--;
      	},_.random(5000,10000))

      }
    };
  });
