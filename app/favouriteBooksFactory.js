(function(){
    angular.module('factoryAndControllers')
        .factory('myFactory', function(){
            var favouriteBooksRepository = [
                {
                    author: 'Tim Ferris',
                    title: '4-hour work week'
                },
                {
                    author: 'Michal Szafrański',
                    title: 'Finansowy Ninja'
                },
                {
                    author: 'Stephen R. Covey',
                    title: '7 nawyków skutecznego dzialania'
                },
                {
                    author: 'Robert Kiyosaki',
                    title: 'Bogaty ojciec, biedny ojciec'
                },
                {
                    author: 'Ferenc Molnár',
                    title: 'Chłopcy z placu broni'
                }
            ];

            var factory = this;

            factory.getFavouriteBooks = function(){
                return favouriteBooksRepository;
            };

            factory.addFavouriteBook = function(author, title){
                var newFavouriteBook = this;

                newFavouriteBook.author = author;
                newFavouriteBook.title = title;

                favouriteBooksRepository.push(newFavouriteBook)
            };

            return factory;
        })
})();

