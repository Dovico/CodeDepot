angular.module('starter.controllers', [])

.controller('AppCtrl', ['$scope', function($scope){
	// console.log("success")
	$scope.menuItems = [{
		text: "About The Depot",
		url: "#"
	},{
		text: "Pointless Projects",
		url: "#"
	},{
		text: "GitHub",
		url: "https://github.com/Dovico/CodeDepot"
	},{
		text: "Slack",
		url: "#"
	}]
}])