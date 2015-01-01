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
      templateUrl: '/views/dispatchedDrone.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	// randomly simulate drone data updates
      	// TBD: check if this is a performance hit vs running an update interval in the data service across the whole dataset
      	$interval(function(){
      		scope.drone.num--;
      	},_.random(2000,10000))
      }
    };
  });
