application.controller('showParamController',function(getMail,$scope,$routeParams){
	console.log(getMail);
$scope.books=getMail.books;
	$scope.link=false;
	$scope.save=function () {
		getMail.books=$scope.books;
	}
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

application.controller("showBookController", function($http,getMail,$scope,$routeParams){

	if(getMail.books.length==0)
	{
		getMail.getBook().then(
		function (res) {
			$scope.books=res.data.data.Books;
			getMail.books=res.data.data.Books;
			console.log(getMail.books);
		});

	}
	else {
				$scope.books=getMail.books;
	}

});


/*application.service('bookData',function ($http) {
	var bookData = {}
		 var sucess =function (argument) {
		bookData.book =argument.data.data.Books;
		console.log(bookData.book)


	}
		$http.get("").then(sucess);
});
*/
