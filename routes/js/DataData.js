
application.controller("myController",function($scope,$http) {
$scope.search=function () {
  $http({
    method:'GET',
    url:'http://it-ebooks-api.info/v1/search/'+$scope.input
  }).then(function successCallback(response) {
      $scope.Books=response.data.Books;
  }, function errorCallback(response) {
  console.log(response);
  });
}
});
