var application = angular.module("manyRoutes",["ngRoute"]);

application.config(function ($routeProvider,$locationProvider) {
  $routeProvider.when('/login',{
    templateUrl:"template/login.html",
    controller:"loginController"
  });
  $routeProvider.when('/dashboard/',{
    templateUrl:"template/dashboard.html",
    controller:"loginController"
  });

  $routeProvider.when('/',{
    templateUrl:"template/login.html",
    controller:"loginController"
  });

  $routeProvider.when('/booksAPI/',{
    templateUrl:"template/demoParam.html",
    controller:"showBookController"
  });

  $routeProvider.when('/booksAPI/:param1',{
    templateUrl:"template/demoParam.html",
    controller:"showParamController"
  });

  $routeProvider.when('/booksAPI/:param1/edit',{
    templateUrl:"template/demoParamEdit.html",
    controller:"showParamController"
  });



});



application.service("getMail",function () {
var data={};
return data;
});
