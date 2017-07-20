var myApp = angular.module("gameApp", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
		.when("/index", {
			templateUrl: "directory.html"
		})
		.when("/forum-post", {
			templateUrl: "forum-post.html"
		})
		.when("/createPage", {
			templateUrl: "createPage.html"
		})
	});

myApp.controller('gameCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.post = function() {
		console.log($scope.list);
		$http.post("/questionList", $scope.list).then(function(response) {
			console.log(response.data);
		});
	}
	
	$scope.search = function() {
		console.log("Aloha Loser");
	}
}]);