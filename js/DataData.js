var app = angular.module("myModule",[]);

app.controller("myController1",function ($scope,$http) {
$scope.Books={};
  $http({
    method:'GET',
    url:'http://it-ebooks-api.info/v1/search/php%20mysql'
  }).then(function successCallback(response) {
    $scope.Books=response.data.Books;
  }, function errorCallback(response) {
    console.log(response);
  });
});
