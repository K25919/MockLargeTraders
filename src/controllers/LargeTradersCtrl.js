angular.module("LargeTraders").controller("LargeTradersCtrl",['$scope',function($scope){
    $scope.tradeOptions= [
        {'name':'All Trades','id':'allTrades'},
        {'name':"Equities Trade",'id':'equitiesTrade'},
        {'name':"Options Trades",'id':'optionsTrade'},
        {'name':"Fixed Income Trades",'id':'fixedIncomeTrade'}];
}]);