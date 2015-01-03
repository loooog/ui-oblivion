'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:randomText
 * @description
 * # randomText
 */
angular.module('oblivionApp')
  .directive('randomText', function () {
    return {
      templateUrl: 'views/randomText.html',
      restrict: 'E',
      scope: {
      	type: "@type"
      },
      link: function postLink(scope, element) {

      //   scope.getRandomChars = function(total) {
      //       var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      //       var st = '';
      //       for(var i=0; i<total; i++)
      //         st += chars.charAt(_.random(chars.length));

      //       return st;
      //   }
        
      //   scope.vals = [];

      //   switch(scope.type) {
      //     case '0':
      //       scope.vals.push(scope.getRandomChars(3));
      //       break;
      //     case '1':
      //       scope.vals.push(_.range(2).forEach(scope.getRandomChars(3)));
      //       break;
      //     case '2':
      //       break;
      //     case '3':
      //       break;
      //     case '4':
      //       break;
      //     case '5':
      //       break;
      //   }
      }

    };
  });
