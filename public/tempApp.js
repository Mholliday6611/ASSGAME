angular.module("gameApp", ["ngRoute"])
	.config(function($routeProvider){
		$routeProvider
		.when("/", {
			templateUrl: "directory.html"
		})
		.when("/forum-post", {
			templateUrl: "forum-post.html"
		})
	})