var app = angular.module("myModule",[]);
app.controller("myController",function($scope,$http){
	//$scope.result = {};
	$scope.search=function () {
	  $http({
	    method:'GET',
	    url:'https://maps.googleapis.com/maps/api/geocode/json?address='+$scope.input
	  }).then(function successCallback(response) {
	      $scope.results=response.data.results;
				console.log($scope.results);

	  }, function errorCallback(response) {
	  console.log(response);
	  });
	}

});
 //url:'http://it-ebooks-api.info/v1/search/'+$scope.input
