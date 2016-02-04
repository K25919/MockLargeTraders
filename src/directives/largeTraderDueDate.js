angular.module("LargeTraders").directive("largeTraderDueDate",[function($scope){
    return {
        scope: {

        },
        restrict: "EA",
        templateUrl: "/src/views/large-trader-due-date.html",
        replace: true,
        link:function(scope, element, attrs){

        }
    }
}]);