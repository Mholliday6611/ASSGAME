<<<<<<< HEAD
=======
// Define the `assApp` module
>>>>>>> e9555f2582dd505d3d9a71d2aa83374d6921be9b
angular.module('assApp.about', [])
	.controller("controller1", function($scope){
      $scope.abouts = [
        {
          name: 'Malcolm Brunson',
          snippet: 'Back-End Developer'
        }, {
          name: 'Guessan G. Effi',
          snippet: 'Front-End Developer'
        }, {
          name: 'Malcolm Holliday',
          snippet: 'Game Developer'
        }, {
          name: 'Rene Pereyra',
          snippet: 'Fronter-End Developer'
        } 
      ];
	});