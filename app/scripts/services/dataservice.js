'use strict';

/**
 * @ngdoc service
 * @name oblivionApp.dataService
 * @description
 * # dataService
 * Factory in the oblivionApp.
 */
 angular.module('oblivionApp')
 .factory('dataService', function ($interval) {

  var Drone = function() {
    this.num = _.random(50,300);
  }

  return {
    getDroneTable: function () {
      var matrix = [];
      for(var i=0; i<6; i++) {
        matrix[i] = [];
        for(var j=0; j<3; j++) {
          matrix[i][j] = new Drone();
        }
      }
      return matrix;
    }
  };

});
