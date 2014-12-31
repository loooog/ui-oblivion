'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:vizCircular
 * @description
 * # vizCircular
 */
angular.module('oblivionApp')
  .directive('vizCircular', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	var minDimension = element.width() < element.height() ? element.width() : element.height();

      	d3.select(element[0]).append('svg')
      		.attr('width',minDimension)
      		.attr('height',minDimension)
      	.append('circle')
      		.attr('cx', minDimension/2)
      		.attr('cy', minDimension/2)
      		.attr('r', minDimension/2 - 2)
      }
    };
  });
