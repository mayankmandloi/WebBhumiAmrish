var app = angular.module("technologyModule",[]);
app.controller("techController",function($scope) {
  $scope.technologies = [{name:"Java",fee:8000},{name:"Angular",fee:10000},{name:"Web Designing",fee:15000},{name:"C & C++",fee:5000},{name:"PHP",fee:8000}];
  $scope.addTech = function() {
    var obj ={};
    obj.name = $scope.Tname;
    obj.fee= $scope.Tfee;
    $scope.technologies.push(obj);
  }
$scope.showHide=function(tt)
{
  if(tt.view==true)
  {
    tt.view=false;
  }
  else {
    tt.view=true;
  }
}
$scope.deleteTech = function (obj) {
  $scope.technologies.splice($scope.technologies.indexOf(obj),1);
}
$scope.order=function (ordr) {
  if($scope.orderByMe==ordr)
  {
    $scope.orderByMe= "-"+ordr;
  }
  else {
    $scope.orderByMe = ordr;
  }
}
})
