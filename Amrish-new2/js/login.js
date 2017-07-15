angular.module("manyRoutes").controller("loginController",function ($scope,getMail,$location,$http) {
  $scope.email=getMail.email;
  $scope.password="";

  $scope.setMail= function() {
    if($scope.password == 'amrish123'){
    	console.log($scope.password);
        getMail.email=$scope.email;
        $http.post("http://localhost/123",{pass:$scope.email}).then(function (argument) {
        	console.log(argument+":)");
        },function (argument) {
        	console.log(argument+":(");
        })

        $location.path("/dashboard");
    }
  }
});
