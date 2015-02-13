'use strict';

/**
 * @ngdoc directive
 * @name oblivionApp.directive:modelViewer
 * @description
 * # modelViewer
 */
 angular.module('oblivionApp')
 .directive('modelViewer', function () {
 	return {
 		restrict: 'E',
 		link: function (scope, element, attrs) {

 			var camera, scene, renderer, light, mesh, loader,
 			contW = element[0].offsetWidth,
      contH = element[0].offsetHeight;

      scope.init = function () {
        // Camera
        camera = new THREE.PerspectiveCamera( 90, contW / contH, .3, 1000 );
        camera.position.z = 1.5;

        // camera = new THREE.PerspectiveCamera( 50, contW/contH, 150, 1000 );
        // cameraPerspectiveHelper = new THREE.CameraHelper( camera );
        

				// Scene
				scene = new THREE.Scene();

				// Ligthing
				// light = new THREE.DirectionalLight( 0xffffff );
				// light.position.set( 0, 0, 1 );
				// scene.add( light );

        // Mesh
        // loader = new THREE.JSONLoader();
        // loader.load('images/drone.js', function( object ){
        //   mesh = new THREE.Mesh(object, new THREE.MeshBasicMaterial({
        //     wireframe: true,
        //     color: 'rgb(126,208,223)'
        //   }));

        //   // var mesh = new THREE.Mesh( object, new THREE.MeshBasicMaterial({wireframe: false, color:'rgb(126,208,223'}));
        //   scene.add(mesh);
        //   scope.animate();
        //   // scope.render();
        // })


				// mesh = new THREE.Mesh(new THREE.BoxGeometry(200, 200, 200), new THREE.MeshBasicMaterial({
				// 	wireframe: true,
				// 	color: 'rgb(126,208,223)'
				// }));
				// mesh.rotation.x = Math.PI * 0.1;
				// scene.add(mesh);

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setClearColor( 0x000000, 0 );
				renderer.setSize( contW, contH );

        // element is provided by the angular directive
        element[0].appendChild( renderer.domElement );
      };

      // -----------------------------------
      // Draw and Animate
      // -----------------------------------

      scope.animate = function () {
        requestAnimationFrame( scope.animate );
        scope.render();
      };


      var rotObjectMatrix;
      function rotateAroundObjectAxis(object, axis, radians) {
        rotObjectMatrix = new THREE.Matrix4();
        rotObjectMatrix.makeRotationAxis(axis.normalize(), radians);
        object.matrix.multiply(rotObjectMatrix);
        object.rotation.setFromRotationMatrix(object.matrix);
      }

      var yAxis = new THREE.Vector3(0,1,0);

      scope.render = function() {
        rotateAroundObjectAxis(mesh, yAxis, Math.PI / 180);
        renderer.render( scene, camera);
      }

      // Begin
      scope.init();
      // scope.animate();

    }

  };
});
