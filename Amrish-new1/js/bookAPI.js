application.controller("showBooksController",["$scope","$http","$sce",function ($scope,$http,$sce) {
  var url1 ="http://maps.googleapis.com/maps/api/geocode/json?address=webbhumi" ;
  console.log(url1);
  $http({
    method:"get"  ,
    url:url1
  }).then(function (responseText) {
    alert("sucess");
    $scope.books=responseText
  },function (responseText) {
    alert("failed");
    $scope.books=responseText
  })
}]);
