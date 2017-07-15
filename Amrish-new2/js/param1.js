angular.module("manyRoutes").controller('showParamController',function(booksAPI,$scope,$routeParams, $location){

	booksAPI.getBook($routeParams.param1).then(function (book) {
		$scope.book = book;
	}, function() {

	});

	function edit() {
		$scope.edit = true;
	}

	if ( (/\/booksAPI\/[0-9]*\/edit/).test($location.url()) ) {
		edit();
	}

	$scope.saveBook = function(book) {
		booksAPI.saveBook(book);
	};
});

angular.module("manyRoutes").controller("showBookController", ["$http","booksAPI","$scope", "$routeParams",
	function($http,booksAPI,$scope,$routeParams) {
		booksAPI.getBooks().then(function(books) {
			$scope.books = books;
		}, function(errors) {
			console.log(errors);
		});
	}
]);


/*angular.module("manyRoutes").service('bookData',function ($http) {
	var bookData = {}
		 var sucess =function (argument) {
		bookData.book =argument.data.data.Books;
		console.log(bookData.book)


	}
		$http.get("").then(sucess);
});
*/
