var LargeTraders=angular.module("LargeTraders",['ngRoute']);
LargeTraders.controller('BookController', function($scope, $routeParams) {
    $scope.name = "BookController";
    $scope.params = $routeParams;
});
LargeTraders.config(['$routeProvider','$locationProvider',
    function($routeProvider,$locationProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: '/src/large-trader-home.html',
                controller : 'BookController'
            }).
            otherwise({
                redirectTo: '/phones'
            });
        $locationProvider.html5Mode(true);
    }]);