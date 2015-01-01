'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:droneTable
 * @description
 * # droneTable
 */
 angular.module('oblivionApp')
 .directive('droneTable', function (dataService) {
  return {
    templateUrl: 'views/droneTable.html',
    restrict: 'E',
    link: function postLink(scope, element) {

      scope.droneTable = dataService.getDroneTable();

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