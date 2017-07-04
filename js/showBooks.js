var app = angular.module("BookModule",[]);
app.controller("showBooksController",function ($scope,$http) {
  $http.get("http://it-ebooks-api.info/v1/search/javascript").then(
    function sucessCallbacl(response) {
      $scope.Books=response.data.Books;
    },function errorCallback(response) {
      console.log(response);
    }
  )
})
