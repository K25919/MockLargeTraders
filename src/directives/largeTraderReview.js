angular.module("LargeTraders").directive("largeTraderReview",[function($scope){
    return {
        scope: {

        },
        restrict: "EA",
        templateUrl: "/src/views/large-trader-review.html",
        replace: true,
        link:function(scope, element, attrs){
            element.ready(function(){
                angular.element('#reviewFrom').datepicker();
                angular.element('#reviewTo').datepicker();
            });
        }
    }
}]);