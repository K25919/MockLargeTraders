angular.module("LargeTraders").directive("largeTraderTrade",[function($scope){
    return {
        scope: {
            tradeOptions:'='
        },
        restrict: "EA",
        templateUrl: "/src/views/large-trader-trade.html",
        replace: true,
        link:function(scope, element, attrs){
        }
    }
}]);