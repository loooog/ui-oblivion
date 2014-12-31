'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:dotGrid
 * @description
 * # dotGrid
 */
 angular.module('oblivionApp')
 .directive('dotGrid', function () {
 	return {
 		restrict: 'E',
 		link: function postLink(scope, element, attrs) {
			// Select the DIV container "D3grid_D3way", then
			// add an SVG element to it

			var w = element.width();
			var h = element.height();
			var cellSize = 10;
			var yaxiscoorddata = d3.range(cellSize, h, cellSize);
			var xaxiscoorddata = d3.range(cellSize, w, cellSize);
			var svg = d3.select(element[0]).append('svg')
				.attr({
					width: w,
					height: h
				});

			// Using the xaxiscoorddata to generate vertical lines.
			svg.selectAll("line.vertical")
				.data(xaxiscoorddata)
				.enter().append("svg:line")
					.attr("x1", function(d){return d;})
					.attr("y1", cellSize)
					.attr("x2", function(d){return d;})
					.attr("y2", h-cellSize)
					.style("stroke", "rgba(110,110,110,.1)")
					.style("stroke-width", 1);       


			// Using the yaxiscoorddata to generate horizontal lines.       
			svg.selectAll("line.horizontal")
				.data(yaxiscoorddata)
				.enter().append("svg:line")
					.attr("x1", cellSize)
					.attr("y1", function(d){return d;})
					.attr("x2", w-cellSize)
					.attr("y2", function(d){return d;})
					.style("stroke", "rgba(110,110,110,.1)")
					.style("stroke-width", 1);
		}
	};
});
