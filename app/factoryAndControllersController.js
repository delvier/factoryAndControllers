(function(){
    'use strict';

    angular.module('factoryAndControllers', [])
        .controller('myCtrl', myCtrl);

    function myCtrl($scope, myFactory) {
        $scope.favouriteBooks = myFactory.getFavouriteBooks();
        $scope.addFavouriteBook = function(author, title){
            myFactory.addFavouriteBook(author,title);
        };
    }
})();

