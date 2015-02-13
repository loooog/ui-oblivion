'use strict';

/**
* @ngdoc directive
* @name oblivionApp.directive:vizFuel
* @description
* # vizFuel
*/
angular.module('oblivionApp')
.directive('vizFuel', function ($interval) {
  return {
    restrict: 'E',
    scope: {
      percent: "@"
    },
    link: function postLink(scope, element, attrs) {

      var w = element.width() * scope.percent;
      var h = 10;
      var tickWidth = 2.5;
      var padding = 1;
      var dataset = _.range(w/(tickWidth));
      var svg = d3.select(element[0]).append('svg')
      .attr({
        width: w,
        height: h
      })

      svg.selectAll('rect')
      .data(dataset)
      .enter()
      .append('rect')
      .attr({
        x: function(d, i) { return i * tickWidth; },
        y: 0,
        height: h,
        width: tickWidth - padding,
        fill: function(d, i) { 
          if(i <= dataset.length * .4) {
            return "rgb(45,57,64)";
          } else if(i <= dataset.length * .6) {
            return "rgb(95,132,138)"
          } else if(i <= dataset.length * .8) {
            return "rgb(90,186,201)"
          } else if(i <= dataset.length * .9) {
            return "rgb(188,245,235)"
          } else {
            return "rgb(236,248,191)"
          }
        }
      });

      $interval(function(){
        dataset.pop();
      },1000)

    }
  };
});
