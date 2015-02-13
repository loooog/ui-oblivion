'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:vizEnergyUsage
 * @description
 * # vizEnergyUsage
 */
angular.module('oblivionApp')
  .directive('vizEnergyUsage', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      	var w = Math.floor(element.parent().width()/scope.energyUsage.length);
      	var h = element.height();
      	var p = 3;
      	var barW = (w-(p*2))/6;

      	var svg = d3.select(element[0]).append('svg')
      		.attr({
      			w: w,
      			height: h
      		})

      	// var bars = svg.selectAll('rect')
      	// 	.data([1,2,3,4,5,6])
      	// 	.enter()
      	// 	.append('rect')
      	// 		.attr({
      	// 			width: w-1,
      	// 			height: h-p,
      	// 			fill: 'red'
      	// 		});
      }
    };
  });
