angular.module("manyRoutes",["ngRoute"]);

angular.module("manyRoutes").config(function ($routeProvider,$locationProvider) {
/*  $routeProvider.when('/login',{
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
*/
  $routeProvider.when('/booksAPI/',{
    templateUrl:"template/demoParam.html",
    controller:"showBookController"
  });

  $routeProvider.when('/booksAPI/:param1',{
    templateUrl:"template/demoParamEdit.html",
    controller:"showParamController"
  });

  $routeProvider.when('/booksAPI/:param1/edit',{
    templateUrl:"template/demoParamEdit.html",
    controller:"showParamController"
  });
});



angular.module("manyRoutes").service("booksAPI", ["$http", "$q", function ($http, $q) {
  var self = this;
  self.books = null;

  self.getBooks = function() {
    var defer = $q.defer();

    if (self.books) {
      defer.resolve(self.books);
    } else {
      $http.get("http://localhost/class/amrish/js/jsonData/bookJSON.js").then(function sucess(response) {
        self.books = response.data.data.Books;
        defer.resolve(self.books);
      }, function error(errors) {
        defer.reject(errors);
      });
    }
    return defer.promise;
  };

  function getBookById(id) {
    var selectedBook = null;
    for (var i = 0; i < self.books.length; i++) {
      if (self.books[i].ID == id) {
        selectedBook = self.books[i];
        break;
      }
    }
    return selectedBook;
  }

  self.getBook = function(bookId) {
    var defer = $q.defer();

    if (self.books) {
      defer.resolve(getBookById(bookId));
    } else {
      self.getBooks().then(function(response) {
        if (self.books) {
          defer.resolve(getBookById(bookId));
        }
      }, function(errors) {
        defer.reject(errors);
      });
    }
    return defer.promise;
  };


  self.saveBook = function(book) {
    for (var i = 0; i < self.books.length; i++) {
      if (self.books[i].ID == book.id) {
        self.books[i] = book;
        break;
      }
    }
  };

  return self;
}]);
