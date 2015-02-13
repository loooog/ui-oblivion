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

  var Engine = function() {
    this.tank_1 = _.random(30,90)/100;
    this.tank_2 = _.random(30,90)/100;
    this.thrust = _.random(30,90)/100;
  }

  return {
    getFuelStatus: function() {
      var val = [];
      _.each(_.range(2), function(a) {
        val[a] = new Engine();
      })
      return val;
    },
    getDroneTable: function () {
      var val = [];
      _.each(_.range(6), function(g){
       val[g] = [];
       _.each(_.range(3), function(d) {
        val[g][d] = new Drone();
       })
    })
      return val;
    },
    getEnergyUsage: function() {
      var val = [];
      _.each(_.range(15), function(a) {
        val[a] = [];
        _.each(_.range(6), function(b) {
          val[a][b] = _.random(1)*100;
        })
      })
      console.log(val)
      return val;
    }
  };

});
