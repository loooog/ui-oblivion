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
    scope: {
      size: "@"
    },
    link: function postLink(scope, element, attrs) {
      // TBD: responsive SVGs are tough, 
      element.css('width',scope.size);
      element.css('height',scope.size);

      d3.select(element[0]).append('svg')
      .append('circle')
      .attr({
        cx: scope.size/2,
        cy: scope.size/2,
        r: scope.size/2,
        stroke: 'rgba(126,208,223,.2)'
      })
    }
  };
});
