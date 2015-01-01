'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:droneTable
 * @description
 * # droneTable
 */
 angular.module('oblivionApp')
 .directive('droneTable', function () {
  return {
    templateUrl: 'views/droneTable.html',
    restrict: 'E',
    link: function postLink(scope, element) {

      scope.droneTable = [
      [
      {num: _.random(50,200)},
      {num: 2},
      {num: 3}
      ],
      [
      {num: 4},
      {num: 5},
      {num: 6}
      ],
      [
      {num: 7},
      {num: 8},
      {num: 9}
      ],
      [
      {num: 10},
      {num: 11},
      {num: 12}
      ],
      [
      {num: 13},
      {num: 14},
      {num: 15}
      ],
      [
      {num: 16},
      {num: 17},
      {num: 18}
      ]
      ];

    }
  }
})

 .directive('test', function () {
  return {
    restrict: 'A',
    link: function postLink(scope, element) {
      if(scope.$index == 2 || scope.$index == 5) {
        element.css('width',((element.parent().width()-1)/3)-10);
      } else {
        element.css('width',((element.parent().width()-1)/3)+4)
      } 
    }
  }
});