'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:vizFuel
 * @description
 * # vizFuel
 */
 angular.module('oblivionApp')
 .directive('vizFuel', function () {
  return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        console.log(element.height())
      	var w = _.random(element.width()/2,element.width());
        var h = 12;
      	var tickWidth = 3;
      	var padding = 1;
      	var dataset = _.range(w/(tickWidth));
      	var svg = d3.select(element[0]).append('svg')
          .attr({
               width: w,
               height: h
         });

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

    }
};
});
