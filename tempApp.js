angular.module("gameApp", ["ngRoute"])
	.config(function($routeProvider){
		.when("/forum", {
			templateUrl: "public/directory.html"
		})
		.when("/forum-post", {
			templateUrl: "public/forum-post.html"
		})
	});