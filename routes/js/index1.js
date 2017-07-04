var application = angular.module("manyRoutes",["ngRoute"]);
application.controller("myController1",function ($scope) {
$scope.players = [{name:"sachin",like:0,dislike:0,view:true},{name:"Virat",like:0,dislike:0,view:true},{name:"Dhoni",like:0,dislike:0,view:true},{name:"Dhawan",like:0,dislike:0,view:true}];

$scope.addLike= function (player) {
  player.like++;
};
$scope.addDisLike= function (player) {
  player.dislike++;
};
$scope.addPlayer= function() {
  var player={};
  player.name=$scope.newName;
  player.like=0;
  player.dislike=0;
  player.view=true;
  $scope.players.push(player);
};
$scope.deleteMe= function (player) {
  $scope.players.splice($scope.players.indexOf(player),1);
}
$scope.changeView=function (player) {
  console.log(player.view);
  if (player.view==true) {
    player.view="";
  }
  else {
    player.view=true;
  }
}
$scope.search=function (item) {
  if ($scope.searchText==null) {
    return true;
  }
  else if (item.name.toUpperCase().indexOf($scope.searchText.toUpperCase())>=0) {
        return true;
  }
  else {
    return false;
  }
}
$scope.oder="name";
$scope.sortBy= function(item) {

  if ($scope.oder==item) {

      $scope.oder="-"+item;
  }
  else {
      $scope.oder=item;
  }

}
});






application.config(function ($routeProvider) {
  $routeProvider.when('/likedislike',{
    templateUrl:"template/likedislike.html",
    controller:"myController1"
  });
  $routeProvider.when('/data',{
    templateUrl:"template/datadata.html",
    controller:"myController"
  });
  $routeProvider.when('/shalini',{
    templateUrl:"template/shalini.html",
    controller:"placeController"
  });

});
