var app = angular.module("MyModule",[]);
app.controller("myController",function($scope,$http) {
$scope.search=function () {
  $http({
    method:'GET',
    url:'https://maps.googleapis.com/maps/api/geocode/json?address='+$scope.input
  }).then(function successCallback(response) {
      $scope.maps=response.data.results;
  }, function errorCallback(response) {
  });
};

$scope.typesShow = function (as) {
  for(x in as.types) {

    if(as.types[x]=='locality' || as.types[x] == 'postal_code'){
      return true;
    }else{
      return false;
    }
}
}});
