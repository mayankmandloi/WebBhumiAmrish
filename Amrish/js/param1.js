application.controller('showParamController',function(bookData,$scope,$routeParams){
	
		$scope.books=bookData.book;

	$scope.link=false;
	$scope.showData= function(item)
	{
		if(item.ID==$routeParams.param1)
		{
			console.log(item.Title)
			return true;
		}
		else
		{
			return false;
		}
	}	
});

application.controller("showBookController", function($http,bookData,$scope,$routeParams){

		$scope.books=bookData.book
	$scope.link=true;
	$scope.showData= function(item)
	{
		return true;
	}	
});


application.service('bookData',function ($http) {
	var bookData = {}
		 var sucess =function (argument) {
		bookData.book =argument.data.data.Books;
		console.log(bookData.book)


	}
		$http.get("http://localhost/class/amrish/js/jsonData/bookJSON.js").then(sucess);
});





