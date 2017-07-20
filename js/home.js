angular.module("assApp", ["ngRoute", "assApp.about", "assApp.leader"])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl: "home.html"
			})
			.when("/about", {
				templateUrl: "about.html"
			})
			.when("/leader", {
				templateUrl: "leader.html"
			})
			.when("/contact", {
				templateUrl: "contact.html"
			})
	})