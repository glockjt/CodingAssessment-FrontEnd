var App = angular.module('App', []);

App.controller('tableCtrl', function($scope, $http) {
	$scope.currentPage = 0;
	$scope.pageSize = 10;
	$scope.players = [];
	$scope.numberOfPages = function() {
		return Math.ceil($scope.players.length/$scope.pageSize);
	}

  	$http.get('teamstats.json')
       	.then(function(res){
          	$scope.players = res.data;                
        });
});

App.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});